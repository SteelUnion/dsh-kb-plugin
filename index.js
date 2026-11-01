/**
 * dsh-kb-plugin — Host half
 *
 * 只做三件事：
 *   ① 找得到数据目录（插件自带 data/，可用 Config.dataDir 覆盖）
 *   ② 读写 bureau/ 下的 configs / drafts / index.json
 *   ③ 把上面这些暴露成 Client 可调的方法（走 host.call）
 *
 * 不画图、不碰会话日志。三维在浏览器里用原生 canvas 画。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BUNDLED_DATA = path.join(HERE, 'data');

/** bureau 目录的子目录布局。改这里要同步 client 和文档。 */
const LAYOUT = {
  configs: 'configs',
  drafts: 'drafts',
  index: 'index.json',
};

const safeName = (n) => {
  const base = String(n || '')
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, '-')
    .trim();
  // 全是点（. / .. / ...）不是合法文件名，不能静默改写成 untitled 让人猜
  if (!base || /^\.+$/.test(base)) throw new Error(`非法文件名：${JSON.stringify(n)}`);
  return base.slice(0, 80);
};

/**
 * @param ctx - Host 根上下文。
 * @param config - 行 config（经 Config 校验）。
 */
export function apply(ctx, config = {}) {
  const log = (...a) => ctx.logger?.('kb-bureau')?.info?.(...a);
  const home = () => config.bureauDir || path.join(ctx.dshHomePath?.() ?? process.cwd(), 'bureau');

  /** 目录不存在就建。返回绝对路径。 */
  const ensure = (sub) => {
    const p = path.join(home(), sub);
    fs.mkdirSync(p, { recursive: true });
    return p;
  };

  /** 重建分类文件列表：只认子目录，不递归。 */
  const listDir = (sub) => {
    const dir = path.join(home(), sub);
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => {
        const st = fs.statSync(path.join(dir, d.name));
        return { name: d.name, size: st.size, mtime: st.mtimeMs };
      })
      .sort((a, b) => b.mtime - a.mtime);
  };

  const readJsonSafe = (file, fallback) => {
    try {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
      return fallback;
    }
  };

  /** 把 configs/ + drafts/ 合成一份索引写回去。索引是缓存，丢了能重建。 */
  const rebuildIndex = () => {
    ensure('');
    const idx = {
      updatedAt: new Date().toISOString(),
      configs: listDir(LAYOUT.configs),
      drafts: listDir(LAYOUT.drafts),
    };
    fs.writeFileSync(path.join(home(), LAYOUT.index), JSON.stringify(idx, null, 2), 'utf8');
    return idx;
  };

  // ── 暴露给 Client 的方法 ────────────────────────────────
  const api = {
    /** 三维场景 + 接口索引。两个都是构建产物，从插件包里读。 */
    loadScene() {
      const dir = config.dataDir || BUNDLED_DATA;
      const scene = readJsonSafe(path.join(dir, 'scene.json'), null);
      const iface = readJsonSafe(path.join(dir, 'iface.json'), {});
      if (!scene) throw new Error(`scene.json 读不到：${dir}`);
      return { scene, iface, source: dir };
    },

    /** 当前 bureau 目录，展示用。 */
    where() {
      return { home: home(), layout: LAYOUT };
    },

    /** 配置 + 草稿的清单。第一次调用会顺手把目录建好。 */
    list() {
      ensure(LAYOUT.configs);
      ensure(LAYOUT.drafts);
      return rebuildIndex();
    },

    /** 读一份配置或草稿。kind = 'configs' | 'drafts'。 */
    read({ kind, name }) {
      const sub = LAYOUT[kind];
      if (!sub) throw new Error(`未知分类：${kind}`);
      const file = path.join(home(), sub, safeName(name));
      if (!fs.existsSync(file)) throw new Error(`不存在：${name}`);
      return { name, text: fs.readFileSync(file, 'utf8') };
    },

    /** 写一份。configs 存 JSON，drafts 存 Markdown（原样）。 */
    save({ kind, name, text }) {
      const sub = LAYOUT[kind];
      if (!sub) throw new Error(`未知分类：${kind}`);
      const dir = ensure(sub);
      const file = path.join(dir, safeName(name));
      fs.writeFileSync(file, String(text ?? ''), 'utf8');
      rebuildIndex();
      return { name: path.basename(file), bytes: Buffer.byteLength(String(text ?? '')) };
    },

    /** 删一份。只删这两个目录里的文件，别的路径一律拒绝。 */
    remove({ kind, name }) {
      const sub = LAYOUT[kind];
      if (!sub) throw new Error(`未知分类：${kind}`);
      const dir = path.join(home(), sub);
      const file = path.join(dir, safeName(name));
      // 去掉前缀后的残留里不能还有分隔符，也不能是 . / ..，否则就是越界
      const rel = path.relative(dir, path.resolve(file));
      if (rel.includes(path.sep) || rel === '' || rel === '.' || rel === '..') {
        throw new Error('越界路径');
      }
      if (fs.existsSync(file)) fs.unlinkSync(file);
      rebuildIndex();
      return { removed: true };
    },
  };

  // 注册成 Host 服务，Client 的 host.call() 走这里
  ctx.effect(() => {
    ensure(LAYOUT.configs);
    ensure(LAYOUT.drafts);
    rebuildIndex();
    log('bureau ready at', home());
    return () => {};
  }, 'kb-bureau: init dirs');

  // 不调 ctx.provide：host.call 是「本包私有」的 Client→Host RPC，
  // 不需要把 api 挂成全局服务名。多挂一个名字只是噪音。
}
