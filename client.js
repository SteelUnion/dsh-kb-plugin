window.__ModuleLoader__.load({
  // ── 首语句必须是 load()：不要在本文件顶部写注释（VERIFIED-API A 表第 2 条）──
  //
  // 补回原型 scene.html 的四件事：
  //   ① 球与球之间的键线（bonds）
  //   ② 球里服务的缩写名（聚焦该球时显示）
  //   ③ 分级：全景 → 点球聚焦 → 点球里服务选中
  //   ④ 搜索：接口名 / 服务名，回车定位
  //
  // 契约依据：
  //   sidebar.panellist  ui-sidebar/contract/slots.d.ts:42-50  {id, order, label} + props{size, active}
  //   main               ui-layout/client/index.d.ts:49-56     keyed，key 必须是同一个 id
  //   selectPanel        ui-layout/service                     selectPanel(id | null)
  id: 'dsh-kb-plugin',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PANEL_ID = 'kb-bureau';

    // ══ 数据（构建时内联）════════════════════════════════
    const SCENE = {"schemaVersion":"2","generatedAt":"2026-11-01T14:21:14.875Z","layout":"free-3d-spring","view":{"yaw":1.3963,"pitch":0,"overlapScore":7441.2},"params":{"baseRadius":11,"connBoost":0.45,"nodeSphere":0.86,"nodeSize":2.4,"minPacking":2.2,"minRadius":24,"bondGap":12,"bondCoef":4.2,"vdwGap":14,"yScale":26,"bondScale":2.5},"iterations":1200,"yPull":0.028,"rule":{"radius":"R = 11 · n^(1/3) · (1 + 0.45 · 连接密度)","distance":"d = R(i)+R(j) + [有键: (12 + 4.2·√键数)×2.5 | 无键: 14×1.4]","yConstraint":"层号只作弱约束，权重 0.028（0 = 完全自由）"},"summary":{"spheres":14,"nodeCount":129,"bonds":59,"totalBonds":285,"minSurfaceGap":10.08,"tightestPair":["client:L2","client:L4"]},"spheres":[{"id":"client:L0","plane":"client","layer":0,"radius":24,"nodeRadius":20.64,"x":1.74,"y":-57.15,"z":-38.8,"nodeCount":5,"nameEn":"Bridge","nameZh":"前端基座","why":"5 个服务：connection（WebSocket 两端）、modules、slots（槽位系统）、typert（类型通道）、uiRenderer。其余 8 层都建在它上面。","degree":13,"strength":41,"eigen":0.1813,"nodes":[{"name":"connection","local":[5.7,7.7,0],"pos":[7.5,-49.5,-38.8]},{"name":"modules","local":[-9.3,5.5,8.6],"pos":[-7.6,-51.6,-30.2]},{"name":"slots","local":[1.4,0,-16.3],"pos":[3.2,-57.1,-55.1]},{"name":"typert","local":[10.2,-7.3,13.3],"pos":[12,-64.5,-25.5]},{"name":"uiRenderer","local":[-11.8,-15.9,-2.1],"pos":[-10,-73.1,-40.9]}]},{"id":"client:L1","plane":"client","layer":1,"radius":24,"nodeRadius":20.64,"x":60.48,"y":-34.77,"z":20.15,"nodeCount":3,"nameEn":"Transport","nameZh":"远程通道","why":"3 个服务：remote、remoteAccess、resources。host 和浏览器之间唯一的一组双向依赖就在这层。","degree":11,"strength":38,"eigen":0.1692,"nodes":[{"name":"remote","local":[8.5,7.6,0],"pos":[68.9,-27.2,20.1]},{"name":"remoteAccess","local":[-12.1,0,11.1],"pos":[48.4,-34.8,31.2]},{"name":"resources","local":[1.3,-12.9,-14.4],"pos":[61.7,-47.7,5.7]}]},{"id":"client:L2","plane":"client","layer":2,"radius":27.51,"nodeRadius":23.66,"x":-75.75,"y":29.2,"z":5.87,"nodeCount":9,"nameEn":"Data Access","nameZh":"数据访问","why":"9 个服务：配置文件表单、设置 schema、工作区、任务、上传、产品统计。界面要拿数据，都从这里走。","degree":9,"strength":45,"eigen":0.2098,"nodes":[{"name":"configForms","local":[4.1,8,0],"pos":[-71.6,37.2,5.9]},{"name":"cordisInspect","local":[-7.2,8.7,6.6],"pos":[-82.9,37.9,12.4]},{"name":"dynamicCordisRunner","local":[1.2,6.9,-13.8],"pos":[-74.5,36.1,-7.9]},{"name":"fileUpload","local":[10.2,3.8,13.4],"pos":[-65.5,33,19.2]},{"name":"jobs","local":[-18.5,0,-3.3],"pos":[-94.2,29.2,2.6]},{"name":"productAnalytics","local":[16.5,-4.5,-10.5],"pos":[-59.2,24.7,-4.6]},{"name":"settingsSchema","local":[-4.9,-9.4,18.4],"pos":[-80.7,19.8,24.2]},{"name":"webTerminals","local":[-7.6,-14.8,-14.7],"pos":[-83.4,14.4,-8.9]},{"name":"workspaces","local":[10,-20.6,3.6],"pos":[-65.8,8.6,9.5]}]},{"id":"client:L3","plane":"client","layer":3,"radius":24,"nodeRadius":20.64,"x":7.82,"y":-48.74,"z":40.26,"nodeCount":2,"nameEn":"Session & Locale","nameZh":"会话与语言","why":"2 个服务：locale（55 个包依赖它）、sessions。会话状态和界面语言。","degree":11,"strength":31,"eigen":0.1028,"nodes":[{"name":"locale","local":[11.3,6.5,0],"pos":[19.1,-42.2,40.3]},{"name":"sessions","local":[-12,-9.4,11],"pos":[-4.2,-58.1,51.2]}]},{"id":"client:L4","plane":"client","layer":4,"radius":24,"nodeRadius":20.64,"x":-39.97,"y":6.78,"z":50.72,"nodeCount":3,"nameEn":"Input","nameZh":"输入交互","why":"3 个服务：输入触发器、快捷键、uiSession。用户敲键盘点鼠标的第一站。","degree":6,"strength":16,"eigen":0.0195,"nodes":[{"name":"inputTriggers","local":[8.5,7.6,0],"pos":[-31.5,14.4,50.7]},{"name":"shortcuts","local":[-12.1,0,11.1],"pos":[-52.1,6.8,61.8]},{"name":"uiSession","local":[1.3,-12.9,-14.4],"pos":[-38.7,-6.2,36.3]}]},{"id":"client:L5","plane":"client","layer":5,"radius":24,"nodeRadius":20.64,"x":-37.46,"y":-2.13,"z":-31,"nodeCount":3,"nameEn":"Theme & Tools","nameZh":"主题与工具","why":"3 个服务：commandUi（命令面板）、inspector（检查器）、theme。界面的皮肤和开发者工具。","degree":6,"strength":8,"eigen":0.0095,"nodes":[{"name":"commandUi","local":[8.5,7.6,0],"pos":[-29,5.4,-31]},{"name":"inspector","local":[-12.1,0,11.1],"pos":[-49.5,-2.1,-19.9]},{"name":"theme","local":[1.3,-12.9,-14.4],"pos":[-36.2,-15.1,-45.4]}]},{"id":"client:L6","plane":"client","layer":6,"radius":24,"nodeRadius":20.64,"x":-12.4,"y":54.56,"z":29.53,"nodeCount":3,"nameEn":"Layout","nameZh":"布局","why":"3 个服务：feedbackUi、layout、modelDirectories。界面怎么分区、消息条怎么摆。","degree":6,"strength":7,"eigen":0.0156,"nodes":[{"name":"feedbackUi","local":[8.5,7.6,0],"pos":[-3.9,62.1,29.5]},{"name":"layout","local":[-12.1,0,11.1],"pos":[-24.5,54.6,40.6]},{"name":"modelDirectories","local":[1.3,-12.9,-14.4],"pos":[-11.1,41.6,15.1]}]},{"id":"client:L7","plane":"client","layer":7,"radius":24,"nodeRadius":20.64,"x":13.26,"y":12.46,"z":-57.41,"nodeCount":5,"nameEn":"Navigation","nameZh":"导航","why":"5 个服务：pluginNavigation、sidebarRight、sidebarRightTabs、uiWorkspace、sessionLogDownload。左右栏和面板切换。","degree":7,"strength":10,"eigen":0.015,"nodes":[{"name":"pluginNavigation","local":[5.7,7.7,0],"pos":[19,20.1,-57.4]},{"name":"sessionLogDownload","local":[-9.3,5.5,8.6],"pos":[3.9,18,-48.9]},{"name":"sidebarRight","local":[1.4,0,-16.3],"pos":[14.7,12.5,-73.7]},{"name":"sidebarRightTabs","local":[10.2,-7.3,13.3],"pos":[23.5,5.1,-44.1]},{"name":"uiWorkspace","local":[-11.8,-15.9,-2.1],"pos":[1.5,-3.5,-59.5]}]},{"id":"client:L8","plane":"client","layer":8,"radius":24,"nodeRadius":20.64,"x":56.65,"y":55.88,"z":-7.99,"nodeCount":3,"nameEn":"Conversation","nameZh":"对话界面","why":"3 个服务：conversation、uiConversation、documentPreviews。用户实际看到的那一屏。","degree":7,"strength":22,"eigen":0.0378,"nodes":[{"name":"conversation","local":[8.5,7.6,0],"pos":[65.1,63.4,-8]},{"name":"documentPreviews","local":[-12.1,0,11.1],"pos":[44.6,55.9,3.1]},{"name":"uiConversation","local":[1.3,-12.9,-14.4],"pos":[57.9,42.9,-22.4]}]},{"id":"host:L0","plane":"host","layer":0,"radius":52.13,"nodeRadius":44.83,"x":-71.21,"y":-103.96,"z":19.52,"nodeCount":38,"nameEn":"Foundation","nameZh":"基础设施","why":"38 个服务：启动参数、凭证、文件读写、命令总线、HMR。整个 host 侧最先起来的一层，别的层都要它。","degree":9,"strength":91,"eigen":0.5084,"nodes":[{"name":"agentDefaultModel","local":[2.4,10.3,0],"pos":[-68.8,-93.7,19.5]},{"name":"appExit","local":[-4.4,14.1,4],"pos":[-75.6,-89.9,23.5]},{"name":"appReady","local":[0.8,15.7,-8.9],"pos":[-70.4,-88.2,10.6]},{"name":"attachments","local":[7.1,16.5,9.3],"pos":[-64.1,-87.4,28.8]},{"name":"cmdlineArgs","local":[-14,16.8,-2.5],"pos":[-85.2,-87.2,17]},{"name":"commands","local":[14,16.7,-8.9],"pos":[-57.2,-87.2,10.6]},{"name":"compaction","local":[-4.9,16.4,18.1],"pos":[-76.1,-87.6,37.6]},{"name":"credentials","local":[-9.6,15.8,-18.4],"pos":[-80.8,-88.2,1.1]},{"name":"credentialsController","local":[21.3,15,7.8],"pos":[-49.9,-88.9,27.3]},{"name":"deepseekLlmApiExtensions","local":[-22.6,14.1,9.3],"pos":[-93.8,-89.8,28.8]},{"name":"directoryPicker","local":[11.1,13.1,-23.7],"pos":[-60.1,-90.9,-4.1]},{"name":"fileReferences","local":[8.3,11.9,26.4],"pos":[-62.9,-92.1,45.9]},{"name":"fs","local":[-25.2,10.6,-14.6],"pos":[-96.4,-93.4,4.9]},{"name":"hmr","local":[29.7,9.2,-6.5],"pos":[-41.5,-94.8,13]},{"name":"loader","local":[-18.2,7.7,25.8],"pos":[-89.4,-96.3,45.4]},{"name":"officeToPdf","local":[-4.2,6.1,-32.4],"pos":[-75.4,-97.8,-12.9]},{"name":"otel","local":[25.7,4.5,21.7],"pos":[-45.5,-99.5,41.2]},{"name":"pluginRegistryProbe","local":[-34.5,2.7,1.4],"pos":[-105.7,-101.2,20.9]},{"name":"profileContext","local":[25,0.9,-24.9],"pos":[-46.2,-103,-5.3]},{"name":"ptcRuntime","local":[-1.7,-0.9,35.8],"pos":[-72.9,-104.9,55.4]},{"name":"sandbox","local":[-23.3,-2.9,-27.9],"pos":[-94.5,-106.8,-8.4]},{"name":"sessionPersistence","local":[36.4,-4.9,4.9],"pos":[-34.8,-108.8,24.4]},{"name":"sessionProjections","local":[-30.4,-6.9,21.1],"pos":[-101.6,-110.9,40.6]},{"name":"sessionTelemetry","local":[8.1,-9,-36.2],"pos":[-63.1,-113,-16.7]},{"name":"settingsController","local":[18.4,-11.2,32.2],"pos":[-52.8,-115.2,51.7]},{"name":"shell","local":[-35.1,-13.4,-11.2],"pos":[-106.3,-117.4,8.3]},{"name":"shellEnv","local":[33.2,-15.7,-15.3],"pos":[-38.1,-119.7,4.2]},{"name":"skills","local":[-13.9,-18,33.2],"pos":[-85.1,-122,52.7]},{"name":"speechToText","local":[-11.9,-20.4,-33.2],"pos":[-83.1,-124.3,-13.7]},{"name":"spillStore","local":[30.4,-22.8,16],"pos":[-40.8,-126.7,35.5]},{"name":"storage","local":[-32.1,-25.2,8.5],"pos":[-103.3,-129.2,28]},{"name":"subprocess","local":[17.2,-27.7,-26.7],"pos":[-54.1,-131.7,-7.2]},{"name":"systemPrompt","local":[5.1,-30.2,29.5],"pos":[-66.1,-134.2,49]},{"name":"terminals","local":[-22,-32.8,-17],"pos":[-93.2,-136.8,2.5]},{"name":"translator","local":[25,-35.4,-2.1],"pos":[-46.2,-139.4,17.4]},{"name":"web","local":[-14.8,-38.1,16],"pos":[-86,-142,35.5]},{"name":"webServer","local":[0.1,-40.7,-17.2],"pos":[-71.1,-144.7,2.3]},{"name":"workflowEngine","local":[6.8,-43.5,7.5],"pos":[-64.4,-147.4,27.1]}]},{"id":"host:L1","plane":"host","layer":1,"radius":42.4,"nodeRadius":36.47,"x":92.08,"y":-15.58,"z":-60.7,"nodeCount":23,"nameEn":"Kernel","nameZh":"内核服务","why":"23 个服务：agent 注册、审批、鉴权、沙箱策略、配置编辑、插件清单。管『谁能干什么』。","degree":8,"strength":79,"eigen":0.4416,"nodes":[{"name":"agents","local":[3,9.7,0],"pos":[95,-5.8,-60.7]},{"name":"approval","local":[-5.3,12.8,4.9],"pos":[86.7,-2.8,-55.8]},{"name":"authorization","local":[0.9,13.6,-10.8],"pos":[93,-2,-71.5]},{"name":"clientModules","local":[8.5,13.5,11.1],"pos":[100.6,-2,-49.6]},{"name":"configEditor","local":[-16.5,12.9,-2.9],"pos":[75.5,-2.7,-63.6]},{"name":"dshHomePath","local":[16.3,11.8,-10.4],"pos":[108.4,-3.8,-71.1]},{"name":"jobController","local":[-5.6,10.4,20.8],"pos":[86.5,-5.2,-39.9]},{"name":"messageFeedback","local":[-10.8,8.7,-20.9],"pos":[81.2,-6.8,-81.6]},{"name":"pluginInventory","local":[23.7,6.8,8.7],"pos":[115.8,-8.8,-52]},{"name":"pluginPackages","local":[-24.7,4.7,10.2],"pos":[67.4,-10.9,-50.5]},{"name":"productTelemetry","local":[11.9,2.4,-25.3],"pos":[103.9,-13.1,-86]},{"name":"sandboxPolicy","local":[8.7,0,27.6],"pos":[100.7,-15.6,-33.1]},{"name":"sessionFeedback","local":[-25.7,-2.6,-14.9],"pos":[66.4,-18.2,-75.6]},{"name":"sessionQuery","local":[29.4,-5.3,-6.5],"pos":[121.4,-20.9,-67.2]},{"name":"sessionTitle","local":[-17.4,-8.2,24.7],"pos":[74.7,-23.7,-36]},{"name":"speechController","local":[-3.9,-11.1,-29.7],"pos":[88.2,-26.7,-90.4]},{"name":"storageDomain","local":[22.5,-14.2,18.9],"pos":[114.6,-29.8,-41.8]},{"name":"timer","local":[-28.4,-17.4,1.2],"pos":[63.7,-32.9,-59.5]},{"name":"tokenMeter","local":[19.1,-20.6,-19],"pos":[111.1,-36.2,-79.7]},{"name":"tools","local":[-1.1,-24,24.8],"pos":[90.9,-39.6,-35.9]},{"name":"userQuestions","local":[-14,-27.5,-16.8],"pos":[78.1,-43,-77.5]},{"name":"workingDirectory","local":[17.5,-31,2.3],"pos":[109.5,-46.6,-58.4]},{"name":"workspaceChanges","local":[-8.7,-34.6,6],"pos":[83.4,-50.2,-54.7]}]},{"id":"host:L2","plane":"host","layer":2,"radius":38.82,"nodeRadius":33.38,"x":19.17,"y":23.86,"z":89.77,"nodeCount":18,"nameEn":"Capabilities","nameZh":"能力层","why":"18 个服务：LLM、MCP 资源、目标、计划模式、设置、子 agent、终端。模型和外界的接口都在这一层。","degree":9,"strength":77,"eigen":0.4316,"nodes":[{"name":"deepseekAccount","local":[3.3,9.5,0],"pos":[22.5,33.4,89.8]},{"name":"fileUploads","local":[-5.9,12.2,5.4],"pos":[13.2,36,95.2]},{"name":"goals","local":[1,12.5,-11.9],"pos":[20.2,36.3,77.9]},{"name":"llm","local":[9.3,11.8,12.1],"pos":[28.5,35.7,101.9]},{"name":"mcpResources","local":[-17.9,10.5,-3.2],"pos":[1.2,34.4,86.6]},{"name":"planMode","local":[17.5,8.7,-11.1],"pos":[36.6,32.6,78.7]},{"name":"pluginManager","local":[-5.9,6.6,22.1],"pos":[13.2,30.5,111.8]},{"name":"sessionProjectionCache","local":[-11.3,4.2,-21.8],"pos":[7.8,28,68]},{"name":"sessionReferenceResolver","local":[24.4,1.4,8.9],"pos":[43.5,25.3,98.7]},{"name":"settings","local":[-24.9,-1.5,10.3],"pos":[-5.7,22.4,100]},{"name":"subagents","local":[11.7,-4.6,-24.9],"pos":[30.8,19.2,64.9]},{"name":"terminalController","local":[8.3,-8,26.4],"pos":[27.4,15.9,116.1]},{"name":"toolResultPruner","local":[-23.6,-11.5,-13.7],"pos":[-4.4,12.4,76.1]},{"name":"typertGateway","local":[25.7,-15.2,-5.6],"pos":[44.8,8.7,84.1]},{"name":"webApp","local":[-14.1,-19,20.1],"pos":[5,4.9,109.9]},{"name":"workspaceFiles","local":[-2.8,-22.9,-21.8],"pos":[16.3,0.9,68]},{"name":"workspaceRegistry","local":[13.7,-27,11.6],"pos":[32.9,-3.2,101.3]},{"name":"worktrees","local":[-10.9,-31.2,0.4],"pos":[8.3,-7.4,90.2]}]},{"id":"host:L3","plane":"host","layer":3,"radius":35.61,"nodeRadius":30.62,"x":-31.73,"y":65.6,"z":-60.43,"nodeCount":12,"nameEn":"Agent Runtime","nameZh":"智能体运行时","why":"12 个服务：agentLoop、preset、权限预设、会话控制器、工作区控制器。一轮对话真正跑起来的地方。","degree":8,"strength":92,"eigen":0.4879,"nodes":[{"name":"accountController","local":[4.2,9.7,0],"pos":[-27.5,75.3,-60.4]},{"name":"agentLoop","local":[-7.5,11.5,6.8],"pos":[-39.2,77.1,-53.6]},{"name":"agentPresets","local":[1.3,10.6,-14.7],"pos":[-30.4,76.2,-75.1]},{"name":"agentTeams","local":[11.2,8.5,14.7],"pos":[-20.5,74.1,-45.8]},{"name":"directoryPickerController","local":[-21.1,5.5,-3.7],"pos":[-52.8,71.1,-64.2]},{"name":"permissionPresets","local":[19.9,2,-12.6],"pos":[-11.9,67.6,-73.1]},{"name":"pluginMarket","local":[-6.5,-2.1,24],"pos":[-38.2,63.5,-36.4]},{"name":"sessionController","local":[-11.7,-6.5,-22.5],"pos":[-43.4,59.1,-82.9]},{"name":"sessionFileReferences","local":[23.3,-11.4,8.5],"pos":[-8.4,54.2,-51.9]},{"name":"sessionSkillCatalog","local":[-21.3,-16.5,8.8],"pos":[-53,49.1,-51.7]},{"name":"subagentModelSelection","local":[8.2,-22,-17.5],"pos":[-23.5,43.6,-78]},{"name":"workspaceController","local":[3.6,-27.7,11.5],"pos":[-28.1,37.9,-48.9]}]},{"id":"host:L4","plane":"host","layer":4,"radius":24,"nodeRadius":20.64,"x":17.33,"y":13.98,"z":0.51,"nodeCount":2,"nameEn":"Extensions","nameZh":"扩展插件","why":"只有 2 个：思维链翻译、定时调度。挂在运行时之上的可选增强。","degree":8,"strength":13,"eigen":0.0609,"nodes":[{"name":"cotTranslation","local":[11.3,6.5,0],"pos":[28.6,20.5,0.5]},{"name":"schedule","local":[-12,-9.4,11],"pos":[5.4,4.6,11.5]}]}],"bundles":[{"from":"host:L0","to":"host:L3","count":29,"planeCross":false},{"from":"host:L0","to":"host:L1","count":22,"planeCross":false},{"from":"host:L1","to":"host:L2","count":19,"planeCross":false},{"from":"host:L0","to":"host:L2","count":19,"planeCross":false},{"from":"host:L2","to":"host:L3","count":18,"planeCross":false},{"from":"host:L1","to":"host:L3","count":16,"planeCross":false},{"from":"client:L1","to":"host:L3","count":10,"planeCross":true},{"from":"client:L2","to":"host:L1","count":9,"planeCross":true},{"from":"client:L2","to":"host:L0","count":9,"planeCross":true},{"from":"client:L1","to":"client:L2","count":8,"planeCross":false},{"from":"client:L0","to":"host:L3","count":8,"planeCross":true},{"from":"client:L3","to":"host:L3","count":6,"planeCross":true},{"from":"client:L4","to":"client:L8","count":6,"planeCross":false},{"from":"client:L0","to":"host:L2","count":6,"planeCross":true},{"from":"client:L0","to":"host:L1","count":5,"planeCross":true},{"from":"client:L2","to":"host:L2","count":5,"planeCross":true},{"from":"client:L0","to":"client:L2","count":5,"planeCross":false},{"from":"client:L1","to":"host:L2","count":5,"planeCross":true},{"from":"client:L0","to":"host:L0","count":4,"planeCross":true},{"from":"client:L3","to":"client:L8","count":4,"planeCross":false},{"from":"client:L2","to":"client:L8","count":4,"planeCross":false},{"from":"client:L3","to":"client:L4","count":4,"planeCross":false},{"from":"client:L3","to":"host:L1","count":4,"planeCross":true},{"from":"client:L1","to":"host:L0","count":3,"planeCross":true},{"from":"client:L0","to":"client:L1","count":3,"planeCross":false},{"from":"client:L2","to":"host:L3","count":3,"planeCross":true},{"from":"client:L3","to":"client:L5","count":2,"planeCross":false},{"from":"client:L0","to":"client:L8","count":2,"planeCross":false},{"from":"client:L5","to":"client:L8","count":2,"planeCross":false},{"from":"client:L8","to":"host:L2","count":2,"planeCross":true},{"from":"client:L7","to":"client:L8","count":2,"planeCross":false},{"from":"client:L0","to":"host:L4","count":2,"planeCross":true},{"from":"host:L0","to":"host:L4","count":2,"planeCross":false},{"from":"client:L3","to":"host:L4","count":2,"planeCross":true},{"from":"host:L3","to":"host:L4","count":2,"planeCross":false},{"from":"client:L0","to":"client:L4","count":2,"planeCross":false},{"from":"client:L1","to":"host:L1","count":2,"planeCross":true},{"from":"client:L3","to":"client:L6","count":2,"planeCross":false},{"from":"client:L3","to":"host:L0","count":2,"planeCross":true},{"from":"host:L1","to":"host:L4","count":2,"planeCross":false},{"from":"client:L3","to":"host:L2","count":2,"planeCross":true},{"from":"client:L1","to":"client:L4","count":2,"planeCross":false},{"from":"client:L3","to":"client:L7","count":2,"planeCross":false},{"from":"client:L1","to":"client:L7","count":2,"planeCross":false},{"from":"client:L1","to":"client:L5","count":1,"planeCross":false},{"from":"client:L4","to":"client:L5","count":1,"planeCross":false},{"from":"client:L0","to":"client:L5","count":1,"planeCross":false},{"from":"client:L1","to":"host:L4","count":1,"planeCross":true},{"from":"client:L2","to":"host:L4","count":1,"planeCross":true},{"from":"host:L2","to":"host:L4","count":1,"planeCross":false},{"from":"client:L1","to":"client:L6","count":1,"planeCross":false},{"from":"client:L5","to":"client:L6","count":1,"planeCross":false},{"from":"client:L0","to":"client:L6","count":1,"planeCross":false},{"from":"client:L6","to":"host:L0","count":1,"planeCross":true},{"from":"client:L0","to":"client:L3","count":1,"planeCross":false},{"from":"client:L0","to":"client:L7","count":1,"planeCross":false},{"from":"client:L6","to":"client:L7","count":1,"planeCross":false},{"from":"client:L4","to":"client:L7","count":1,"planeCross":false},{"from":"client:L2","to":"client:L7","count":1,"planeCross":false}]};
    const IFACE = {"accountController":{"zh":"账号页面背后的 Host 服务。浏览器用认证过的 Remote 命令读登录状态、订阅快照流。它只给状态，不返回 token 也不返回 PKCE 私密数据——凭据不出进程。","n":11,"ball":"host:L3","pkg":"dsh-api-account-controller","deps":[{"to":"deepseekAccount","c":"direct"},{"to":"agents","c":"direct"}],"by":[],"m":[{"n":"ackBonusNotified","s":"ackBonusNotified(accountId, orderId, client): true once Platform records the acknowledgement; false when t","z":"Record one displayed bonus as notified for the account it belongs to.","c":0},{"n":"cancelSignIn","s":"cancelSignIn(attemptId): settled cancellation or commit state.","z":"Cancel the named local attempt.","c":0},{"n":"getBalance","s":"getBalance(client): balance outcome, or null when the account grant is absent or","z":"Query Platform recharge-wallet balances.","c":0},{"n":"getProfile","s":"getProfile(client): profile outcome, or null when the account grant is absent or","z":"Query display-safe Platform profile data.","c":0},{"n":"getState","s":"getState(): current account and attempt state.","z":"Read the safe account projection.","c":0},{"n":"getUnnotifiedBonuses","s":"getUnnotifiedBonuses(client): bonuses with their account, or null when the account grant i","z":"Query the granted bonuses Platform has not yet recorded as displayed.","c":0},{"n":"hasRunningAccountTasks","s":"hasRunningAccountTasks(): whether running work has a latest request context on the acc","z":"Inspect the latest logged request providers of running tasks, including tools and retries.","c":0},{"n":"signOut","s":"signOut(client): state after removing the local account grant.","z":"Remove the local account grant and revoke it through Platform in the background, without deleting API keys.","c":0},{"n":"startSignIn","s":"startSignIn(client, callbackOrigin, loginSource): a new or already-active login attempt.","z":"Begin browser sign-in.","c":0},{"n":"watch","s":"watch(signal): initial snapshot and subsequent changes.","z":"Stream the safe account projection.","c":0},{"n":"watchExpiry","s":"watchExpiry(signal): notifications emitted while subscribed.","z":"Subscribe to credential expiry without replaying prior notifications.","c":0}]},"agentDefaultModel":{"zh":"管「默认用哪个模型」这件事的唯一归属，刻意不绑定任何宿主或传输方式——换宿主、换连接都不影响它。每次操作都去读所属配置里的引用。","n":2,"ball":"host:L0","pkg":"dsh-agent-default-model","deps":[],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"}],"m":[{"n":"currentSelection","s":"currentSelection(): ModelSelection","z":"读当前的默认模型选择，返回脱离的 provider + model + 可选推理设置。","c":1},{"n":"saveSelection","s":"async saveSelection(next)","z":"保存完整的默认模型选择。没有配置编辑器的部署会保留它自己的组合入口，不被这个操作改掉。","c":1}]},"agentLoop":{"zh":"具体负责造 agent、并把 agent 跑起来的服务。工厂（造）和驱动（跑）挂在同一个 key 下，所以它既能创建实例，也能接着推进对话轮次。","n":12,"ball":"host:L3","pkg":"dsh-agent-loop","deps":[{"to":"agents","c":"direct"},{"to":"sessionProjections","c":"direct"},{"to":"systemPrompt","c":"direct"},{"to":"tools","c":"direct"},{"to":"llm","c":"direct"},{"to":"sessionPersistence","c":"direct"},{"to":"sessions","c":"direct"}],"by":[],"m":[{"n":"config","s":"readonly config: Config","z":"agent-loop 服务持有的那份已校验配置，只读。","c":1},{"n":"create","s":"async create(id, options?, meta?): Promise<Agent>","z":"按调用方给的身份创建 agent 和会话，归属访问它的那个 fiber。构造期出错会走回滚。","c":1},{"n":"createAgent","s":"async createAgent(ownerCtx, options): Promise<AgentHandle>","z":"在调用方指定的会话 id 上创建一个受管 agent，返回句柄。","c":1},{"n":"resume","s":"async resume(ownerCtx, options): Promise<AgentHandle>","z":"从配置好的持久化服务里恢复一个受管 agent。","c":1},{"n":"appendUnstoredSuffix","s":"appendUnstoredSuffix(stored, session)","z":"Durably store the session events appended since the last stored cursor.","c":0},{"n":"createStoredSession","s":"createStoredSession(session, signal): owned handle and stored cursor, or `undefined` without a bac","z":"Take a fresh session's write ownership when persistence is mounted.","c":0},{"n":"prepare","s":"prepare(ownerCtx, id, options, session, callerSignal, handle, parentAgent)","z":"Construct the driver, scope, and one memoized reverse teardown for a new agent.","c":0},{"n":"reportConfiguredStartupFailure","s":"reportConfiguredStartupFailure(configId, action, sessionId, error)","z":"Report a contained declarative-start failure to identity-bound consumers.","c":0},{"n":"restoreOrCreateConfigured","s":"restoreOrCreateConfigured(ownerCtx, persistence, sessionId, agentOptions, meta)","z":"Restore a materialized exact config identity on remount, or create it on first use.","c":0},{"n":"resumeWith","s":"resumeWith(ownerCtx, persistence, options)","z":"Resume through an explicit persistence handle used by the deferred config path.","c":0},{"n":"setupAndPublish","s":"setupAndPublish(ownerCtx, id, preparation, agentOptions, setup, signal, source, stored, parentAgent)","z":"Prepare one Agent around an acquired Session, run setup, and publish it.","c":0},{"n":"waitForDrainingConfiguredIdentity","s":"waitForDrainingConfiguredIdentity(ownerCtx, sessionId)","z":"Wait for a draining same-id lifecycle to finish registry teardown.","c":0}]},"agentPresets":{"zh":"存放 YAML 里声明的 agent 预设，以及活着的 agent 各自持有的那份修订。注册、解析、按预设组装、增量重装都在这里。","n":16,"ball":"host:L3","pkg":"dsh-agent-preset-registry","deps":[{"to":"sessionProjections","c":"direct"},{"to":"loader","c":"direct"},{"to":"settings","c":"direct"}],"by":[],"m":[{"n":"register","s":"async register(definition): Promise<() => Promise<void>>","z":"注册并立即加载一个预设定义。加载失败不会消失——它会以错误状态留在名册里，让人看得见。","c":1},{"n":"inspectCompositions","s":"inspectCompositions(ctx?): AgentPresetInspection[]","z":"查看保留的修订，或某个 agent 实际加入的那一版。没匹配返回空数组，不抛。","c":1},{"n":"list","s":"async list(): Promise<AgentPreset[]>","z":"读所有已声明的预设，包括加载失败的，附带加载诊断。","c":1},{"n":"remoteExportList","s":"@Remote('list') async remoteExportList(): Promise<AgentPresetRoster>","z":"给客户端读的选择名册，每个预设都标出是不是当前默认。","c":1},{"n":"resolve","s":"async resolve(id?): Promise<AgentPreset>","z":"按身份解析一个预设，不启动 agent。","c":1},{"n":"readDocument","s":"@Remote('read') readDocument(agentPreset): Promise<AgentPresetDocument>","z":"把一个声明里的子插件列表按 YAML 读出来，只供查看，不改动任何东西。","c":1},{"n":"mount","s":"async mount(ctx, id?): Promise<AgentPreset>","z":"把未发布的 agent 绑定到当前这一版预设上。","c":1},{"n":"composeFrom","s":"composeFrom(ctx, parent): string | undefined","z":"让子 agent 加入父级保留的那一版预设，返回继承到的预设 id；无预设的组合返回 undefined。","c":1},{"n":"composedPreset","s":"composedPreset(ctx): string | undefined","z":"读一个活 agent 用的是哪个预设。","c":1},{"n":"serviceFor","s":"serviceFor(agent, name): Context[K] | undefined","z":"读某个 agent 被隔离的预设分组里提供的服务。这是跨过隔离边界拿服务的唯一正规入口。","c":1},{"n":"recompose","s":"async recompose(ctx, id): Promise<AgentPreset>","z":"给一个空白 agent 重新绑定预设。空白会话的检查由调用方自己负责，它不替你做。","c":1},{"n":"select","s":"@Remote('select') async select(agent, agentPreset): Promise<string>","z":"在会话开第一轮之前选好预设。一旦日志记下了预设、agent 也已经启动，就不能再改。","c":1},{"n":"acquireScope","s":"async acquireScope(id?): Promise<{ key } & AsyncDisposable>","z":"租一份修订来读冷转写内容。读完要 dispose 这个租约，否则修订无法回收。","c":1},{"n":"compositionInventory","s":"compositionInventory(): Promise<AgentPresetComposition[]>","z":"读插件行和激活状态，不创建 agent。","c":1},{"n":"defaultId","s":"defaultId()","z":"Default preset for a subsequently created session.","c":0},{"n":"diagnostic","s":"diagnostic(record): one line per unusable row, or undefined when the definition ","z":"Current activation diagnostic of a definition.","c":0}]},"agentTeams":{"zh":"团队服务，背后接的就是那条活的 Lead 会话日志。成员、消息、任务都通过它协调。","n":14,"ball":"host:L3","pkg":"dsh-experimental-agent-team","deps":[{"to":"agents","c":"direct"},{"to":"sessions","c":"direct"},{"to":"subagents","c":"direct"},{"to":"sessionProjections","c":"direct"},{"to":"sessionPersistence","c":"direct"}],"by":[],"m":[{"n":"membership","s":"membership(agent: Agent): TeamMembership","z":"解析某个活 agent 在团队里的角色：根、团队身份、角色、模型可见的名字。","c":1},{"n":"listMembers","s":"listMembers(agent: Agent): TeamMemberView[]","z":"列出某个团队成员能看到的名单，Lead 和队友按创建顺序。","c":1},{"n":"spawnTeammate","s":"async spawnTeammate(caller, request)","z":"给团队 Lead 创建一个有名字、可继续对话的直接子 agent。","c":1},{"n":"sendMessage","s":"async sendMessage(caller, request)","z":"把一条同伴消息送进目标收件箱，或拒绝这次尝试。返回接受即代表写入成功，不等模型处理完。","c":1},{"n":"createTask","s":"async createTask(caller, request)","z":"在团队 Lead 日志里创建一个无归属的待办任务。","c":1},{"n":"getTask","s":"getTask(caller, id): TeamTaskView","z":"取一个任务，包括已经删除的墓碑记录——删除过这件事本身也是信息。","c":1},{"n":"listTasks","s":"listTasks(caller): TeamTaskView[]","z":"列出当前未删除的任务，按创建顺序。","c":1},{"n":"updateTask","s":"async updateTask(caller, request)","z":"对一次被授权的任务状态迁移做比较并设置（CAS），避免并发改乱。","c":1},{"n":"waitForChange","s":"async waitForChange(caller, timeoutMs, signal)","z":"等团队域或成员状态的下一次变化，超时就返回超时结果。","c":1},{"n":"interrupt","s":"interrupt(caller, targetName)","z":"打断某个活队友的当前轮次，但不清空它待处理的收件箱——停了还能接着做。","c":1},{"n":"tryMembership","s":"tryMembership(agent): TeamMembership | undefined","z":"不抛错地解析调用方身份，非团队成员或已失效身份返回 undefined。","c":1},{"n":"disposeRuntime","s":"disposeRuntime()","z":"Stop Team-owned live branches and release every waiter before service disposal completes.","c":0},{"n":"scheduleRecovery","s":"scheduleRecovery(agent)","z":"Queue one contained provisioning reconciliation after publication has unwound.","c":0},{"n":"sendAdmitted","s":"sendAdmitted(caller, request)","z":"Deliver an admitted send using the Lead's authority and the actual sender's identity.","c":0}]},"agents":{"zh":"活着的 agent 的登记处，同时负责把「发起者」沿着一条进程内的异步驱动链传下去。注意它不管创建——创建由实现了 AgentFactory 的插件提供，也就是 agentLoop。","n":22,"ball":"host:L1","pkg":"dsh-agent","deps":[{"to":"typert","c":"direct"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"subagents","c":"direct"},{"from":"agentTeams","c":"direct"},{"from":"fileUpload","c":"ambiguous"},{"from":"fileUploads","c":"ambiguous"},{"from":"schedule","c":"direct"},{"from":"agentLoop","c":"direct"},{"from":"accountController","c":"direct"},{"from":"goals","c":"direct"},{"from":"deepseekAccount","c":"direct"},{"from":"llm","c":"direct"}],"m":[{"n":"currentInitiator","s":"currentInitiator(): Agent | undefined","z":"读当前异步驱动链的发起者 agent。不在发起者边界内、或处于显式清除的边界内时返回 undefined——适合日志和追踪这种「有就有」的场景。","c":1},{"n":"requireInitiator","s":"requireInitiator(): Agent","z":"读发起者，没有边界就抛。给内部私有辅助函数用：它必须跑在某个 agent 的上下文里才合法。","c":1},{"n":"withInitiator","s":"withInitiator<T>(agent, operation: () => T): T","z":"用一个指定 agent 作为进程内发起者来跑一段操作，原样返回它的返回值（同步值或 Promise）。","c":1},{"n":"withoutInitiator","s":"withoutInitiator<T>(operation: () => T): T","z":"在一个隐藏了继承发起者的边界里跑操作。用于「这段代码不该知道自己在替谁干活」的场景。","c":1},{"n":"setFactory","s":"setFactory(factory: AgentFactory): () => void","z":"注册 agent 创建工厂（agent-loop 构造时会调它，作用域是 effect）。返回的是 cordis 的精确 effect 清理函数。","c":1},{"n":"create","s":"async create(options): Promise<AgentHandle>","z":"通过已注册的工厂创建并发布一个新 agent。与 register 的区别：register 登记的是已经存在的 agent。","c":1},{"n":"resume","s":"async resume(options): Promise<AgentHandle>","z":"加载一个持久化会话，并在上面恢复 agent。没有注册工厂时直接 reject。","c":1},{"n":"register","s":"register(agent: Agent): ReturnType<Context['effect']>","z":"登记一个来源为 startup 的活 agent。id 已存在或已有同名串行创建时 reject。返回的清理函数必须原样 yield——包一层会让注销变成并发兄弟节点，导致 agent 还在收尾时就宣布 disposed。","c":1},{"n":"enter","s":"enter(agent: Agent, owner: Agent | undefined): () => void","z":"插入一个已构造好但还不公告的 agent。这是有序生命周期用的底层原语，通常与 announce 配对。","c":1},{"n":"announce","s":"async announce(agent, source, signal?): Promise<void>","z":"对先前用 enter 插入的 agent 做公告，触发串行创建监听器；监听器失败会 reject。","c":1},{"n":"get","s":"get(id: SessionId): Agent | undefined","z":"按 id 查一个活着的 agent。","c":1},{"n":"isOwnedBy","s":"isOwnedBy(id: SessionId, owner: Agent): boolean","z":"判断某个活 agent 是不是通过指定父 agent 的作用域创建的。","c":1},{"n":"list","s":"list(): Agent[]","z":"所有活着的 agent，按注册顺序。返回新数组，改它不影响注册表。","c":1},{"n":"roots","s":"roots(): Agent[]","z":"所有顶层 agent（创建时没有归属 agent 上下文的），按注册顺序。","c":1},{"n":"closeInitiators","s":"closeInitiators()","z":"Reject new initiator boundaries while inherited continuations drain.","c":0},{"n":"detachEntered","s":"detachEntered(entry)","z":"Remove one exact entered agent and emit its paired disposal when announced.","c":0},{"n":"disposeInitiators","s":"disposeInitiators()","z":"Wait for returned-Promise boundaries, then invalidate retained references.","c":0},{"n":"emitDisposed","s":"emitDisposed(entry)","z":"Emit the paired disposal edge through the entry's stable carrier.","c":0},{"n":"hasLifecycleAncestor","s":"hasLifecycleAncestor(candidate)","z":"Whether one unloading fiber owns this service's lifecycle.","c":0},{"n":"releaseReentrantInitiatorRuns","s":"releaseReentrantInitiatorRuns()","z":"Exclude the boundary chain that initiated this teardown from its own drain.","c":0},{"n":"requireFactory","s":"requireFactory()","z":"Return the active creation factory.","c":0},{"n":"runWithInitiator","s":"runWithInitiator(agent, operation)","z":"Establish one tracked initiator or clearing boundary.","c":0}]},"approval":{"zh":"审批服务：在真正去问应答者之前先套一层会话策略，并把每一次「问」和「结果」成对写进发起会话的日志。策略变化会通过运行时上下文快照告知模型。","n":5,"ball":"host:L1","pkg":"dsh-user-approval","deps":[{"to":"systemPrompt","c":"direct"}],"by":[{"from":"permissionPresets","c":"direct"},{"from":"sandbox","c":"direct"}],"m":[{"n":"setPolicy","s":"setPolicy(agent, policy): void","z":"切换某个活 agent 的审批策略，并把这次变更排进它的下一轮。会话初始化走的是另一条路，不经过这里。","c":1},{"n":"request","s":"async request(req): Promise<ApprovalOutcome>","z":"让组合起来的应答者裁决一条只读的同进程请求。返回封闭结果，其中 allowed-once 是唯一的「批准」。","c":1},{"n":"overrideOf","s":"overrideOf(session): ApprovalPolicy | undefined","z":"读会话自己的策略覆盖，不套用配置默认值；没有覆盖就返回 undefined。","c":1},{"n":"decide","s":"decide(req, session): normalized closed outcome.","z":"Dispatch the waterfall, contained and raced against the request signal.","c":0},{"n":"effectivePolicy","s":"effectivePolicy(session): policy every ask for this session resolves under right now.","z":"The session's effective policy: its own `approval/policy` fold, else the configured default (the schema already defaulted an omitted policy to `'ask'`; the `??` only narr…","c":0}]},"attachments":{"zh":"不可变的二进制附件服务。实现方必须在发布引用之前先校验字节内容——引子先发出去再验，等于让人拿到坏数据。","n":15,"ball":"host:L0","pkg":"dsh-attachment","deps":[],"by":[{"from":"fileUpload","c":"ambiguous"},{"from":"fileUploads","c":"ambiguous"},{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"connection","c":"direct"}],"m":[{"n":"imageLimits","s":"abstract readonly imageLimits: ImageAttachmentLimits","z":"部署解析出来的图片策略，权威校验和快速路径校验都用它。","c":1},{"n":"validateImage","s":"abstract validateImage(input)","z":"只校验一张图，不持久化。批量调用方必须先把每个成员都校验过，再开始保存任何一个——避免存了一半才发现第三张坏了。","c":1},{"n":"saveImages","s":"async saveImages(inputs)","z":"校验并持久提交一批有序图片；全部成功才返回同序的引用。","c":1},{"n":"admitPromptContent","s":"async admitPromptContent(content)","z":"准入一次宿主提示词，把里面上传的图片替换成持久引用；文本和已持久化的文件引用原样通过。","c":1},{"n":"admitEncodedFile","s":"admitEncodedFile(input)","z":"解码并持久提交一个规范 base64 文件上传，返回内容寻址的引用。","c":1},{"n":"isAttachmentError","s":"isAttachmentError(error)","z":"按稳定错误码判断一个错误是不是附件能力抛出来的。","c":1},{"n":"saveImage","s":"abstract saveImage(input)","z":"在所属会话事件追加之前，校验并持久提交一张图。返回的引用描述的是内容，不是位置。","c":1},{"n":"readImage","s":"abstract readImage(ref, signal?)","z":"读一张图，并验证字节仍与记录的引用一致——内容寻址的校验。","c":1},{"n":"imageHostPath","s":"imageHostPath(ref)","z":"在 harness 宿主文件系统里定位这个规范化对象；后端不是宿主文件支撑的，返回 undefined。","c":1},{"n":"saveFile","s":"saveFile(input)","z":"在所属会话事件追加之前，逐字节持久提交一个文件。文件不带准入限制。","c":1},{"n":"saveFileStream","s":"saveFileStream(input)","z":"从有界分块里逐字节持久提交一个文件。提供方必须施加背压，不能把整块收在内存里。","c":1},{"n":"readFileStream","s":"async *readFileStream(ref, signal?)","z":"把存储的文件按有界分块读出来并校验；完整性失败会让整个迭代 reject。","c":1},{"n":"fileHostPath","s":"fileHostPath(ref)","z":"在宿主文件系统里定位这个原样存储的文件对象。","c":1},{"n":"readImageRequest","s":"readImageRequest(ref, target, signal?)","z":"从存储的规范化图片生成或读取一个确定性的模型请求版本，附上覆盖所有变换输入的缓存与上传身份。","c":1},{"n":"validateImageBatch","s":"validateImageBatch(inputs): durable references in the exact input order.","z":"Validate one ordered image batch before committing any member.","c":0}]},"authorization":{"zh":"获取凭据的各种流程的注册处。同一个 key 同一时刻只允许一次尝试——这是并发控制的落点，避免两个标签页同时授权互相覆盖。","n":9,"ball":"host:L1","pkg":"dsh-authorization","deps":[{"to":"credentials","c":"direct"}],"by":[],"m":[{"n":"registerFlow","s":"registerFlow(flow): () => void","z":"提供一个获取某凭据的途径。一个 key 只允许一个流程——两个插件抢同一个 key 会互相覆盖写入。","c":1},{"n":"list","s":"list(): readonly AuthorizationEntry[]","z":"按注册顺序列出所有流程，供界面展示「有哪些可以授权」。","c":1},{"n":"describe","s":"describe(key)","z":"查某个 key 注册的流程；没有流程认领它时返回 undefined。","c":1},{"n":"cancel","s":"cancel(key)","z":"撤掉某个 key 上正在进行的尝试。它和请求自己的取消信号是两回事——那个管的是这一次请求，这个管的是整个授权流程。","c":1},{"n":"begin","s":"async begin(request): Promise<AuthorizationOutcome>","z":"跑一次授权尝试，并报告它是怎么结束的：流程记录在本次尝试中提交且被观察到就是 authorized，人拒绝或调用方撤回就是 cancelled。同一个 key 同一时刻只能有一次尝试。","c":1},{"n":"attempt","s":"attempt(flow, method, signal, interaction)","z":"Run the flow, then hold it to its half of the commit contract.","c":0},{"n":"entry","s":"entry(flow)","z":"The public view of one registered flow.","c":0},{"n":"settle","s":"settle(key, settlement)","z":"Fan `authorization/settled` out with contained listener failures: every listener runs, and a sync throw or async rejection is logged without changing the finished attempt…","c":0},{"n":"warnSettledListenerFailure","s":"warnSettledListenerFailure(key, error)","z":"Contained-listener diagnostic shared by the sync and async failure paths.","c":0}]},"chatFileMentions":{"zh":"已完成轮次末尾那张「这次改了哪些文件」的卡片，加上交付文件卡片，以及把收尾正文里被点名的文件转成可点链接（点了在右侧栏打开）。列表来源是真实记录的改动，不是从正文里猜的。","n":5,"ball":"client:L9","pkg":"dsh-client-ui-deliverables","deps":[],"by":[],"m":[{"n":"dispose","s":"dispose()","z":"Cancel outstanding requests and wait until no request can publish state.","c":0},{"n":"loadHost","s":"loadHost(): after metadata or a retryable error is published.","z":"Read the serving desktop metadata, coalescing concurrent reads; a later call retries failure.","c":0},{"n":"open","s":"open(sessionId, seq, index, action=…, application): null after a successful handoff, or the failure to announce ","z":"Open a declared file once while a request for the same coordinates is pending.","c":0},{"n":"openChanged","s":"openChanged(sessionId, seq, index, action=…, application): null after a successful handoff, or the failure to announce ","z":"Open one recorded changed file in the Host's default application.","c":0},{"n":"resetHost","s":"resetHost()","z":"Invalidate desktop metadata on connection replacement; mounted cards request the new Host.","c":0}]},"clientModules":{"zh":"Web 插件表服务：扫描 dsh.client 声明、拼装连线、提供 bundle 路由和索引注入行。构造时同步跑一次激活扫描——已加载的插件里只要有声明写错或 bundle 缺失，会当场抛。","n":14,"ball":"host:L1","pkg":"dsh-client-modules","deps":[{"to":"loader","c":"direct"},{"to":"webServer","c":"direct"}],"by":[],"m":[{"n":"graph","s":"graph(): WebBootGraph","z":"当前组合出来的入口图，作为 window.__DSH_BOOT__ 提供；两次变更之间是同一个稳定对象。","c":1},{"n":"clientPath","s":"clientPath(id): string | undefined","z":"某个入口客户端 bundle 的绝对路径；未知 id 返回 undefined。","c":1},{"n":"fetchBundle","s":"async fetchBundle(request)","z":"不用 Web 服务器也能提供带版本号的 bundle 或 source map；未知 URL 返回 404。","c":1},{"n":"artifactBaseline","s":"artifactBaseline(id)","z":"读某个入口当前字节时的文件系统基线。HMR 拿它跟活文件比，判断要不要重建。","c":1},{"n":"rebuilt","s":"rebuilt(id): string | undefined","z":"发布一次完成的 bundle 世代。这是 HMR 监视线程唯一的登记入口。","c":1},{"n":"onRebuilt","s":"onRebuilt(listener): () => void","z":"订阅 bundle 重建；只有产物元数据真的改变了 rev 时才触发。","c":1},{"n":"onGraphChanged","s":"onGraphChanged(listener): () => void","z":"任何重排过图的 flush 之后触发（增删行、或某个重建改了 rev）。这是拉模型：监听器接到通知后自己去读。","c":1},{"n":"captureArtifactBaseline","s":"captureArtifactBaseline(clientPath)","z":"Capture the bundle stats before reading its bytes.","c":0},{"n":"chunkRequest","s":"chunkRequest(requestUrl)","z":"Match an exact current-revision package-local chunk URL without reading its file.","c":0},{"n":"chunkResponse","s":"chunkResponse(requestUrl)","z":"Build a package-local chunk response only when its URL is requested.","c":0},{"n":"initialBundleSnapshot","s":"initialBundleSnapshot(pkgName, clientPath): immutable bytes plus the pre-read filesystem baseline.","z":"Read the activation-time bundle snapshot.","c":0},{"n":"locatePkgJson","s":"locatePkgJson(loaderName, baseUrl): manifest path, or `undefined` when the name resolves to no p","z":"Locate the manifest of the package the Loader mounts for a row.","c":0},{"n":"processOne","s":"processOne(entryName, onError): whether the table changed.","z":"Reconcile one entry name against the live Loader sources.","c":0},{"n":"readSourceMap","s":"readSourceMap(clientPath)","z":"Treat a missing, torn, or malformed development map as an identity section.","c":0}]},"commandUi":{"zh":"Web 的斜杠命令系统。`/` 触发，三类派发：弹窗选择（popupSelect）、客户端动作（action）、交给宿主命令执行（execute）。业务包能注册自己的命令，也能用这两种方式修饰已有命令。","n":19,"ball":"client:L5","pkg":"dsh-client-ui-commands","deps":[{"to":"remote","c":"direct"},{"to":"locale","c":"direct"},{"to":"inputTriggers","c":"direct"},{"to":"sessions","c":"direct"},{"to":"slots","c":"direct"}],"by":[{"from":"conversation","c":"ambiguous"},{"from":"modelDirectories","c":"direct"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"candidates","s":"candidates(session, req)","z":"Menu candidates: host catalog + contribution availability, built-in rows localized, then position filtering; sections for an empty query, the shared name-and-label rankin…","c":0},{"n":"claimOf","s":"claimOf(session, token)","z":"The host leadingInput claim a token names in the hot catalog; popup and action kinds never claim.","c":0},{"n":"consumeVia","s":"consumeVia(id, segment)","z":"Dispatch a consume-token event to one session (menu-pick / bare-enter execute paths).","c":0},{"n":"decorate","s":"decorate(decoration): disposer removing the registration.","z":"Hang a bare-invocation decoration on one host command; effect disposer (rides the caller's fiber).","c":0},{"n":"dismiss","s":"dismiss(name)","z":"Close every open popup for a command whose options have become stale.","c":0},{"n":"dispatch","s":"dispatch(pick)","z":"Decision table, menu column: contribution/decorated-host → popup or action; host input → claim; host bare → detached execute.","c":0},{"n":"execute","s":"execute(session, line, attachments=…)","z":"The command.execute transaction, addressed to the session's agent — pure admission semantics.","c":0},{"n":"invoke","s":"invoke(name, ui, session, segment)","z":"Invoke one contribution or decoration (menu pick / bare enter): open the session's popup, or consume the token and run the action.","c":0},{"n":"leadingClaim","s":"leadingClaim(desc, session, shown)","z":"Build the leadingInput claim.","c":0},{"n":"matchClaim","s":"matchClaim(session, token, signal)","z":"Restore column: the space column's answer once the session's catalog is ready (a warmup failure rejects).","c":0},{"n":"matchEnter","s":"matchEnter(session, line, signal, envelope)","z":"Decision table, enter column.","c":0},{"n":"matchSpace","s":"matchSpace(session, token)","z":"Decision table, space column: hot-key sync check; only host leadingInput claims.","c":0},{"n":"noticeFor","s":"noticeFor(id, level, text)","z":"Route an admission failure to the session's composer notice channel (scope gone = attempt died with it).","c":0},{"n":"notifyExecuted","s":"notifyExecuted(sessionId, name, result)","z":"Publish the local acknowledgment without letting an observer change command admission.","c":0},{"n":"popupFor","s":"popupFor(actx): resident controller.","z":"Resolve the per-session popup controller (lazy; dies with the session scope).","c":0},{"n":"register","s":"register(contribution): disposer removing the registration.","z":"Register one client command contribution; effect disposer (rides the caller's fiber).","c":0},{"n":"runDetached","s":"runDetached(desc, session, line)","z":"Fire-and-forget execute for the internal ('handled') paths.","c":0},{"n":"scopeFor","s":"scopeFor(id)","z":"id → actx interchange (registered exchange point: this service coordinates for projection-only sources).","c":0},{"n":"warnExecutedListenerFailure","s":"warnExecutedListenerFailure(name, error)","z":"Log one contained `command/executed` observer failure.","c":0}]},"commands":{"zh":"人类可输入命令的注册表。在普通上下文里注册的定义是全局的；通过注入命令的 agent 子上下文注册的，只在那个 agent 内遮蔽全局——这就是按 agent 定制斜杠命令的机制。","n":10,"ball":"host:L0","pkg":"dsh-commands","deps":[],"by":[{"from":"fileUpload","c":"ambiguous"},{"from":"fileUploads","c":"ambiguous"},{"from":"sessionFeedback","c":"direct"},{"from":"permissionPresets","c":"direct"},{"from":"planMode","c":"direct"}],"m":[{"n":"register","s":"register(definition: CommandDefinition): () => void","z":"注册一个全局命令，或调用方 agent 作用域内的命令。","c":1},{"n":"registerFileReceiptResolver","s":"registerFileReceiptResolver(resolver): () => void","z":"注册唯一的权威解析器，负责把命令提交里的暂存文件回执解析出来。只允许一个，避免两套解析打架。","c":1},{"n":"list","s":"@Remote list(agent): readonly CommandDescriptor[]","z":"列出某个 agent 实际生效的命令描述符，已处理作用域遮蔽，按名字排序。","c":1},{"n":"find","s":"find(agent, name): CommandDefinition | undefined","z":"解析出一条实际生效的命令定义：作用域遮蔽优先，其次全局。","c":1},{"n":"execute","s":"@Remote async execute(agent, line, submittedAttachments, signal)","z":"解析并执行一条已知命令，不发往模型。语法或名字解析不出来时返回 undefined——这是「不是命令」而不是「命令失败」。","c":1},{"n":"appendLifecycle","s":"appendLifecycle(session, type, data)","z":"Append one log-only lifecycle event directly: no turn is opened for it and no flush is forced — persistence observes the eager `session/event` path and drains at ordinary…","c":0},{"n":"mintCommandId","s":"mintCommandId()","z":"Mint the next pairing id (monotonic; instance-token-prefixed so a resumed log never repeats one).","c":0},{"n":"notifyChange","s":"notifyChange()","z":"Notify every registry observer without making UI refresh load-bearing.","c":0},{"n":"settleThrown","s":"settleThrown(session, command, commandId, error)","z":"Contained `command/done` error append for a thrown handler or admission failure.","c":0},{"n":"view","s":"view(agent)","z":"Resolve global definitions followed by exact scoped shadows.","c":0}]},"compaction":{"zh":"抽象的上下文压缩服务。实现方自己决定何时触发、保留多少、怎么摘要，也可能用另一个测量服务。一次成功的压缩会把选中的那段替换成一个摘要节点，并挡住并发压缩。需要子类实现。","n":3,"ball":"host:L0","pkg":"dsh-compaction","deps":[],"by":[],"m":[{"n":"compactIfNeeded","s":"abstract compactIfNeeded(agent, trigger, signal)","z":"针对一次明确的触发，考虑是否要自动压缩。压力策略看最近一次持久路由请求。不需要压缩时返回 null。","c":1},{"n":"compactNow","s":"abstract compactNow(agent, signal, sourceCommandId?)","z":"显式压缩有用的历史，即使还没到自动压力阈值。没有安全可用的范围时返回 null。","c":1},{"n":"compactRegion","s":"abstract compactRegion(start, end, agent, signal?)","z":"强行把一段界面节点压成一个摘要节点，start 和 end 是闭区间。","c":1}]},"configEditor":{"zh":"把完整的原始配置持久化下来，并让它们走正常的 Loader 路径生效。注意是「完整原始配置」，不是合并后的——这样回滚和审计才有依据。","n":4,"ball":"host:L1","pkg":"dsh-config-editor","deps":[],"by":[],"m":[{"n":"entries","s":"entries(): Entry[]","z":"可寻址的 profile 行；嵌套的 Include 有独立的配置所有权。","c":1},{"n":"configuration","s":"configuration()","z":"读活跃条目的继承值和显式值，与 Loader 条目并排返回。","c":1},{"n":"edit","s":"async edit(entry, change)","z":"校验、持久化并协调一个插件的下一份配置；普通字段仍走常规生命周期规则。","c":1},{"n":"documentPath","s":"documentPath()","z":"The profile patch edited by this service.","c":0}]},"configForms":{"zh":"设置界面的共享表单组件。给外壳、页面、标题栏动作、插件标签页用；它提供控件，不决定长什么样。","n":3,"ball":"client:L2","pkg":"dsh-client-ui-settings","deps":[{"to":"remote","c":"ambiguous"},{"to":"settings","c":"ambiguous"}],"by":[{"from":"pluginRegistryProbe","c":"direct"},{"from":"conversation","c":"ambiguous"},{"from":"cotTranslation","c":"direct"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"describe","s":"describe(): describe face over the shared mirror.","z":"The shared mirror's read/fold face for cross-namespace surfaces (schema introspection, the served-namespace directory).","c":0},{"n":"get","s":"get(entryId): entry's form, owned by this provider.","z":"Get the shared form values and write queue for one Host plugin entry.","c":0},{"n":"whileServed","s":"whileServed(namespaces, register): disposer ending the watch and any live registration.","z":"Keep a registration alive while the Host serves any of some namespaces: `register` runs once one of them is in the describe mirror, and its disposer runs when none is or …","c":0}]},"connection":{"zh":"宿主侧连接能力，供那些与传输方式无关的适配器使用。请求准入、RPC、共享 fetch 都从这里走。","n":20,"ball":"client:L0","pkg":"dsh-client-connection","deps":[{"to":"attachments","c":"direct"},{"to":"credentials","c":"direct"},{"to":"webServer","c":"direct"}],"by":[{"from":"fileUpload","c":"ambiguous"},{"from":"fileUploads","c":"ambiguous"},{"from":"remote","c":"ambiguous"},{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"terminalController","c":"ambiguous"},{"from":"typertGateway","c":"ambiguous"},{"from":"webTerminals","c":"ambiguous"}],"m":[{"n":"rpc","s":"readonly rpc: HostConnectionRpc","z":"通用 RPC 通道注册表。","c":1},{"n":"fetch","s":"readonly fetch: HostConnectionFetch","z":"精确的 Fetch 路由，用于流式响应或浏览器原生响应。","c":1},{"n":"browserPeer","s":"readonly browserPeer: PeerScope","z":"每个已认证浏览器连接共享的那个属主 Peer。","c":1},{"n":"allowsRemoteAuthorities","s":"readonly allowsRemoteAuthorities: boolean","z":"这个部署是否接受回环以外的授权来源：只有当一条校验过的 trustedHosts 条目命中时才为 true。","c":1},{"n":"createSharedFetchHandler","s":"createSharedFetchHandler(channel): ConnectionFetchHandler","z":"把精确 Fetch 路由和共享通道的 RPC 拦截器组合成一个处理器。","c":1},{"n":"requestRejection","s":"requestRejection(request)","z":"把 Connection 的 Host/Origin 检查和浏览器认证套到另一条 Web 路由上；允许通过时返回 undefined。","c":1},{"n":"admit","s":"admit(request): PeerAdmission","z":"按签名过的浏览器凭据或 API 凭据、以及活的 Peer 来准入一次 HTTP 请求；通不过就返回拒绝状态。","c":1},{"n":"createPeer","s":"createPeer(options): PeerScope","z":"创建一个独立的进程内 Peer，随读 ctx.connection 的那个 Context 一起销毁。","c":1},{"n":"admitConnection","s":"admitConnection(request)","z":"为一个 API Peer 认领一条物理 socket；浏览器 socket 共享它的属主 Peer。API 归属重复时返回 409。","c":1},{"n":"authorizeIndex","s":"authorizeIndex(request, response): boolean","z":"认证一次前端 index 请求，自己负责发 token 重定向或 401。","c":1},{"n":"authenticatedUrl","s":"authenticatedUrl(baseUrl): string","z":"给一个普通 Web 应用 URL 加上本次进程的 token，用于首次登录。","c":1},{"n":"callSink","s":"callSink(fn)","z":"Sink exception isolation: a business-layer throw is logged only, never affecting pump or reconnect semantics.","c":0},{"n":"emitState","s":"emitState(state)","z":"Deduplicated state emission (sink isolation applies).","c":0},{"n":"isGenerationActive","s":"isGenerationActive(controller)","z":"Re-read both mutable liveness guards after a potentially reentrant sink.","c":0},{"n":"isRetryInterrupted","s":"isRetryInterrupted(immediate)","z":"Re-read retry inputs after a potentially reentrant state sink.","c":0},{"n":"isRunning","s":"isRunning()","z":"Read through a method: stop() flips the flag across awaits, so narrowing from the loop condition must not stick.","c":0},{"n":"reconnect","s":"reconnect()","z":"Reset the retry sequence and replace the current generation or retry delay immediately.","c":0},{"n":"setNetworkAvailable","s":"setNetworkAvailable(available)","z":"Suspend automatic retries while offline and restart backoff when the network returns.","c":0},{"n":"start","s":"start()","z":"Idempotent: begin the connect/pump/reconnect loop.","c":0},{"n":"stop","s":"stop()","z":"Stop the loop and abort the current generation source.","c":0}]},"conversation":{"zh":"对话服务的本体。同一个包 dsh-client-ui-conversation 提供两个服务，这个负责「对话是什么」，uiConversation 负责「对话怎么显示」。","n":17,"ball":"client:L8","pkg":"dsh-client-ui-conversation","deps":[{"to":"slots","c":"ambiguous"},{"to":"locale","c":"ambiguous"},{"to":"sessions","c":"ambiguous"},{"to":"configForms","c":"ambiguous"},{"to":"fileUpload","c":"ambiguous"},{"to":"uiConversation","c":"ambiguous"},{"to":"uiSession","c":"ambiguous"},{"to":"commandUi","c":"ambiguous"},{"to":"inputTriggers","c":"ambiguous"},{"to":"settings","c":"ambiguous"},{"to":"shortcuts","c":"ambiguous"},{"to":"uiWorkspace","c":"ambiguous"}],"by":[{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"cancel","s":"cancel()","z":"Cancel the scoped session's in-flight turn while preserving Queue (failures land in promptError and reject, as in send).","c":0},{"n":"createDrafts","s":"createDrafts(sessionId, files): ordered draft descriptors.","z":"Create runtime-only draft attachments.","c":0},{"n":"encodeImage","s":"encodeImage(file)","z":"Canonical base64 wire form of one browser image file.","c":0},{"n":"loadOlder","s":"loadOlder()","z":"Pull one older history page for the scoped Session.","c":0},{"n":"pumpFileUploads","s":"pumpFileUploads()","z":"Start queued upload Workers until the configured concurrency is occupied.","c":0},{"n":"rebindDraftFiles","s":"rebindDraftFiles(sessionId, ids)","z":"Stage carried file drafts again for a new Session.","c":0},{"n":"releaseDraftAttachment","s":"releaseDraftAttachment(id)","z":"Release one browser-owned draft attachment, aborting its active upload.","c":0},{"n":"releaseDraftAttachments","s":"releaseDraftAttachments(attachments)","z":"Release a set of browser-owned draft attachments.","c":0},{"n":"resolveDraftAttachments","s":"resolveDraftAttachments(ids): descriptors that remain live, in requested order.","z":"Resolve ordered input-state ids to runtime-owned draft attachments.","c":0},{"n":"retryFileUpload","s":"retryFileUpload(sessionId, id)","z":"Restart one failed file upload.","c":0},{"n":"scopedSession","s":"scopedSession(op)","z":"Resolve the caller scope's session face or throw on root contexts.","c":0},{"n":"scopeId","s":"scopeId(op)","z":"Read the caller's session scope tag via the sessions service; root contexts fail loud.","c":0},{"n":"send","s":"send(text)","z":"Send a prompt into the scoped session.","c":0},{"n":"sendSession","s":"sendSession(session, text, attachmentIds, mode, signal): Host admission outcome; local attachment preparation failure","z":"Submit ordered draft attachments with text through one host admission.","c":0},{"n":"serializeDraftAttachments","s":"serializeDraftAttachments(attachmentIds): wire payloads in id order.","z":"Serialize ordered draft attachments to command-submit wire payloads without sending or releasing them.","c":0},{"n":"settleSubmittedAttachments","s":"settleSubmittedAttachments(sessionId, attachments, retirement)","z":"Settle one submission's draft attachments when its echo retires.","c":0},{"n":"updateQueue","s":"updateQueue(itemId, action)","z":"Apply one operation to a pending queue occurrence.","c":0}]},"cordisInspect":{"zh":"动态 Cordis 包的浏览器半边——让界面能应答「运行这个包」的请求，把代码装进浏览器。请求获批或用户明确操作后才加载，Host 撤销就移除；刷新页面不会恢复。","n":4,"ball":"client:L2","pkg":"dsh-cordis-client-runner","deps":[{"to":"tools","c":"ambiguous"},{"to":"bash","c":"ambiguous"},{"to":"fs","c":"ambiguous"},{"to":"timer","c":"ambiguous"},{"to":"web","c":"ambiguous"}],"by":[],"m":[{"n":"close","s":"close(requestId)","z":"Cancel local work after another page answered or the Tool call ended.","c":0},{"n":"publish","s":"publish()","z":"Publish the current complete manifest, including after reconnect.","c":0},{"n":"query","s":"query(request): after the first local result has been sent back to Host.","z":"Execute and answer one Host-broadcast query.","c":0},{"n":"register","s":"register(registration): idempotent disposer.","z":"Register one Client provider and publish a new complete manifest.","c":0}]},"cotTranslation":{"zh":"可选的推理过程翻译；把与会话绑定的存储交给 translator 处理。","n":2,"ball":"host:L4","pkg":"dsh-experimental-client-ui-cot-translation","deps":[{"to":"remote","c":"direct"},{"to":"slots","c":"direct"},{"to":"translator","c":"direct"},{"to":"configForms","c":"direct"},{"to":"locale","c":"direct"},{"to":"sessionController","c":"direct"},{"to":"settings","c":"direct"},{"to":"typert","c":"direct"}],"by":[],"m":[{"n":"limits","s":"@Remote async limits(signal)","z":"读已接受的翻译偏好和当前每次请求的最大 UTF-16 长度，不发送任何文本。","c":1},{"n":"translate","s":"@Remote async translate(request, signal)","z":"通过读者选中的提供方翻译一段展示用片段。失败时不回传原文和提供方响应。","c":1}]},"credentials":{"zh":"抽象凭据服务，横跨两个 key 空间，回答两个不同的问题：CredentialRef 回答「这个环境变量名背后是什么」（先查托管存储，再退到进程环境这类兜底）；CredentialRecord 回答「这条存储记录本身是什么」。需要子类实现。","n":13,"ball":"host:L0","pkg":"dsh-credentials","deps":[],"by":[{"from":"authorization","c":"direct"},{"from":"connection","c":"direct"}],"m":[{"n":"resolve","s":"abstract resolve(ref)","z":"把一个引用解析成当前值。解析是逐次进行的：消费方每次操作都要重新解析，不能缓存结果当长期凭据。","c":1},{"n":"describe","s":"abstract describe(ref)","z":"给配置界面描述一个引用：有没有配、哪个源提供、能不能写。不暴露值。","c":1},{"n":"set","s":"abstract set(ref, value)","z":"把值持久存进提供方托管的可写源。存下的值优先于环境兜底。","c":1},{"n":"unset","s":"abstract unset(ref)","z":"从可写源里移除一个引用；移除本来就不存在的引用是空操作。","c":1},{"n":"readRecord","s":"abstract readRecord(key)","z":"读一条存储记录，值按属主写入的样子返回；GrantRecord 的载荷不做解释。","c":1},{"n":"describeRecord","s":"abstract describeRecord(key)","z":"给配置界面描述一条记录：在不在、判别式是什么、能不能写。","c":1},{"n":"listRecords","s":"abstract listRecords()","z":"枚举所有存储记录的地址和标签，不含值。引用那一半没法枚举，因为值本身不可枚举——这是两个 key 空间的又一个区别。","c":1},{"n":"modifyRecord","s":"abstract modifyRecord(key, mutate)","z":"对一条记录做串行化的读-改-写，这是唯一的写路径。mutate 看到的记录是它执行那一刻的样子。","c":1},{"n":"deleteRecord","s":"abstract deleteRecord(key)","z":"删一条记录；删本来就不存在的记录是空操作。","c":1},{"n":"fanOut","s":"fanOut(event, subject)","z":"The contained dispatch both notifications run through; see {@link notifyUpdated}.","c":0},{"n":"notifyRecordUpdated","s":"notifyRecordUpdated(key)","z":"Fan `credentials/record-updated` out on exactly the terms {@link notifyUpdated} documents, for the record half of the seam.","c":0},{"n":"notifyUpdated","s":"notifyUpdated(ref)","z":"Fan `credentials/reference-updated` out with contained listener failures: every listener runs, and a sync throw or async rejection is logged without changing the committe…","c":0},{"n":"warnListenerFailure","s":"warnListenerFailure(event, subject, error)","z":"Contained-listener diagnostic shared by the sync and async failure paths.","c":0}]},"credentialsController":{"zh":"宿主服务，给生成的 ctx.remote.credentials 命名空间撑住。凭据接缝本身不管的那些线上义务都由它承担：批量扇出的上限、逐字段的视图投影、引用语法守卫。","n":5,"ball":"host:L0","pkg":"dsh-api-settings-controller","deps":[],"by":[],"m":[{"n":"describe","s":"@Remote async describe(refs)","z":"一次描述多个引用，按名字键控。做成批量是因为设置页一次要描述所有引用。","c":1},{"n":"set","s":"@Remote async set(ref, value)","z":"从配置界面存一个值。值只朝这个方向过线：没有任何读路径把它带回来。","c":1},{"n":"unset","s":"@Remote async unset(ref)","z":"从配置界面移除一个引用。","c":1},{"n":"provider","s":"provider()","z":"Resolve the optional provider or report how to supply it.","c":0},{"n":"write","s":"write(ref, write)","z":"Run one remote write and report every refusal as `credential/rejected` carrying the seam's own message: a provider refusal, such as a stored document that no longer parse…","c":0}]},"deepseekAccount":{"zh":"账号相关操作。只有宿主侧消费者才拿得到请求凭据——这条限制是安全边界，不是实现细节。","n":13,"ball":"host:L2","pkg":"dsh-deepseek-account","deps":[{"to":"agents","c":"direct"}],"by":[{"from":"accountController","c":"direct"},{"from":"productAnalytics","c":"direct"}],"m":[{"n":"getState","s":"abstract getState(): Promise<AccountView>","z":"读存储账号是否存在、以及最近一次登录尝试的状态。快照里不含凭据和 PKCE 密钥。","c":1},{"n":"getProfile","s":"abstract getProfile(client)","z":"查平台资料，和钱包余额互不依赖。登出、或查询期间授权变了，返回 null。","c":1},{"n":"getBalance","s":"abstract getBalance(client)","z":"查平台的充值和赠送钱包余额，与资料数据互不依赖。","c":1},{"n":"getUnnotifiedBonuses","s":"abstract getUnnotifiedBonuses(client)","z":"查平台还没记录为「已展示」的赠送额度。","c":1},{"n":"ackBonusNotified","s":"abstract ackBonusNotified(accountId, orderId, client)","z":"把某一笔已展示的赠送记为已通知，记在它所属的账号上。","c":1},{"n":"startSignIn","s":"abstract startSignIn(client, callbackOrigin, loginSource)","z":"加入一次进行中的尝试，或者开启浏览器授权。返回初始快照，不等浏览器那边批准。","c":1},{"n":"cancelSignIn","s":"abstract cancelSignIn(id)","z":"只取消指定的那次尝试；已经在提交中的会先结算完再返回，不会强行打断。","c":1},{"n":"signOut","s":"abstract signOut(client)","z":"移除本地授权，但保留 API key；提供方会在后台撤销。远程失败也绝不把授权恢复回来。","c":1},{"n":"watch","s":"abstract watch(signal, includeIdentityChanges?)","z":"订阅账号状态快照，第一条给的是完整初始状态。","c":1},{"n":"resolveToken","s":"abstract resolveToken(url)","z":"只对提供方允许的推理源返回凭据；其它源或已登出时返回 undefined。","c":1},{"n":"rejectToken","s":"abstract rejectToken(token)","z":"只有在传进来的 token 仍与已存登录匹配时，才移除这个被推理端拒绝的 token。","c":1},{"n":"getPlatformSession","s":"abstract getPlatformSession()","z":"读配置的平台源凭据，绑定到签发它的环境，并附上配套信息。仅宿主可用。","c":1},{"n":"getDeviceIdentity","s":"abstract getDeviceIdentity()","z":"读现有登录身份，但不创建设备、也不返回凭据。","c":1}]},"deepseekLlmApiExtensions":{"zh":"一个注册表：官方 DeepSeek 请求里那些各自独立归属的顶层字段，在这里登记。目的是让不同插件往同一个请求里加字段而不打架。","n":2,"ball":"host:L0","pkg":"dsh-deepseek-llm-api-extensions","deps":[],"by":[],"m":[{"n":"register","s":"register(field, provider): () => Promise<void>","z":"注册某个顶层请求字段的唯一提供方。注册是 effect 作用域的。","c":1},{"n":"prepare","s":"async prepare(request)","z":"从一份不可变的基请求准备所有当前已注册的字段，返回字段和它们的幂等联合接受事务。","c":1}]},"directoryPicker":{"zh":"抽象的目录选择服务。子类实现 capability() 后作为插件加载，就会注册成 ctx.directoryPicker。一个上下文只能有一个实现，加载第二个会抛——这是 cordis 对重复服务的标准行为。需要子类实现。","n":1,"ball":"host:L0","pkg":"dsh-host-directory-picker","deps":[],"by":[{"from":"directoryPickerController","c":"ambiguous"},{"from":"workspaceController","c":"ambiguous"},{"from":"workspaces","c":"ambiguous"}],"m":[{"n":"capability","s":"abstract capability(): DirectoryPickerCapability","z":"后端的交互能力，是一个可判别类型，消费方按它 switch。","c":1}]},"directoryPickerController":{"zh":"宿主服务，给生成的 ctx.remote.directoryPicker 命名空间撑住线上动词。它导出的接缝本身是抽象的、不会单独成为 Loader 条目，所以这些线上动作放在这里。","n":4,"ball":"host:L3","pkg":"dsh-api-workspace-controller","deps":[{"to":"workspaceRegistry","c":"ambiguous"},{"to":"directoryPicker","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"remoteAccess","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[],"m":[{"n":"pick","s":"@Remote('pick') async pick(signal)","z":"给 Remote 调用方打开宿主的系统选择器；操作员取消则返回 null。","c":1},{"n":"list","s":"@Remote('list') async list(path, signal)","z":"给 Remote 调用方的应用内浏览器列一层目录，附带它的祖先链。","c":1},{"n":"createDirectory","s":"@Remote('createDirectory') async createDirectory(path, name)","z":"给 Remote 调用方的应用内浏览器创建一个子目录，返回绝对路径。","c":1},{"n":"requireCapability","s":"requireCapability(kind, method)","z":"Resolve the capability one wire verb needs, or refuse with the kind this backend serves.","c":0}]},"dynamicCordisRunner":{"zh":"跑动态 Cordis 包的运行时。和 cordisInspect 配对：那个管「看和选」，这个管「真跑」。","n":5,"ball":"client:L2","pkg":"dsh-cordis-client-runner","deps":[{"to":"tools","c":"ambiguous"},{"to":"bash","c":"ambiguous"},{"to":"fs","c":"ambiguous"},{"to":"timer","c":"ambiguous"},{"to":"web","c":"ambiguous"}],"by":[],"m":[{"n":"debounce","s":"debounce(callback, delay): Debounced function with an early disposer.","z":"Return a debounced function whose timer is disposed with the calling Fiber.","c":0},{"n":"schedule","s":"schedule(label, trigger, disposed=…)","z":"Build a delayed wrapper whose pending callback belongs to the calling Fiber.","c":0},{"n":"setInterval","s":"setInterval(callback, delay): Disposer that stops the interval early.","z":"Run a callback repeatedly through {@link interval}.","c":0},{"n":"setTimeout","s":"setTimeout(callback, delay): Disposer that cancels the pending callback early.","z":"Run a callback once through {@link timeout}.","c":0},{"n":"throttle","s":"throttle(callback, delay, noTrailing): Throttled function with an early disposer.","z":"Return a throttled function whose timer is disposed with the calling Fiber.","c":0}]},"feedbackUi":{"zh":"Like/Dislike 按钮和反馈弹窗。点赞点踩都会弹窗，先收集分类和可选说明，再记录评分。评分只写进会话日志，**绝不进入模型上下文**——所以你不会因为点了踩而影响后面的对话。","n":2,"ball":"client:L6","pkg":"dsh-client-ui-message-feedback","deps":[],"by":[],"m":[{"n":"dispose","s":"dispose()","z":"Drop both controllers when the owning fiber unloads.","c":0},{"n":"recordSession","s":"recordSession(entry)","z":"Record one Session-level remark through the sessionFeedback Remote.","c":0}]},"fileReferences":{"zh":"宿主能力：可取消的文件引用发现。方法只有一个 list，取消靠传入的信号而不是另一个方法。","n":1,"ball":"host:L0","pkg":"dsh-file-reference","deps":[],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"}],"m":[{"n":"list","s":"abstract list(agent, query, signal)","z":"为某个 agent 的工作目录列出文件和目录候选，结果只含路径且顺序确定。","c":1}]},"fileUpload":{"zh":"浏览器往某个会话里传文件。支持流式接收（不在页面线程把整个文件读进内存）、进度、取消；传完给一个凭证，后续 prompt 用它引用这个文件。","n":2,"ball":"client:L2","pkg":"dsh-client-file-upload","deps":[{"to":"attachments","c":"ambiguous"},{"to":"agents","c":"ambiguous"},{"to":"commands","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"remote","c":"ambiguous"}],"by":[{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"},{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"}],"m":[{"n":"post","s":"post(request): response status and text body.","z":"Post one body with the carrier selected before Cordis boot.","c":0},{"n":"upload","s":"upload(sessionId, data, name, signal, onProgress): staged receipt and durable file reference, or a business err","z":"Store one file for a Session.","c":0}]},"fileUploads":{"zh":"宿主侧的上传服务，管上传存储和回执。回执按「每个接收 agent 的确切会话」分键——不是按 agent，也不是按用户。","n":6,"ball":"host:L2","pkg":"dsh-client-file-upload","deps":[{"to":"attachments","c":"ambiguous"},{"to":"agents","c":"ambiguous"},{"to":"commands","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"remote","c":"ambiguous"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"}],"m":[{"n":"registerAgentResolver","s":"registerAgentResolver(resolve): () => void","z":"注册一个普通会话解析器，用于原始上传指向冷会话的情况。","c":1},{"n":"upload","s":"@Remote('upload') upload(agent, request, signal)","z":"持久化一次编码上传，并把它暂存在 Typert 选中的那个 agent 接收方下面。","c":1},{"n":"uploadStream","s":"async uploadStream(request)","z":"为一个会话持久化原始分块，不把整个上传聚合到内存里——大文件不会撑爆堆。","c":1},{"n":"resolve","s":"resolve(agent, receiptId)","z":"为接收 agent 的确切会话解析一条暂存回执；未知的、或者属于别人的回执返回 undefined。","c":1},{"n":"bindPrompt","s":"bindPrompt(agent, receiptIds, requestId)","z":"在一条提示词进入 agent 收件箱时绑定这些回执。销毁会恢复此前所有绑定，除非调用方明确声称了它们。","c":1},{"n":"retirePrompt","s":"retirePrompt(agent, requestId)","z":"退役某条被移除的队列项所接受的全部回执。","c":1}]},"fs":{"zh":"抽象文件系统提供方。同一个目标经不同别名访问时必须保持同一身份；读取要么给 UTF-8 文本、要么给类型化错误；目录列举稳定且不带文件内容；写入是原子的。可选守卫提供防过期保护。需要子类实现。","n":16,"ball":"host:L0","pkg":"dsh-fs","deps":[],"by":[{"from":"workspaceFiles","c":"direct"},{"from":"worktrees","c":"direct"},{"from":"workingDirectory","c":"direct"},{"from":"cordisInspect","c":"ambiguous"},{"from":"dynamicCordisRunner","c":"ambiguous"},{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"}],"m":[{"n":"watch","s":"watch(target, changed, signal)","z":"在这个提供方的执行世界里观察一个文件，或一个目录的直接子项。返回的关闭函数是异步的。","c":1},{"n":"resolve","s":"abstract resolve(path, opts?)","z":"把模型或插件给的路径解析成稳定的 FsTarget：同一个文件永远得到同一个 targetKey。可能触发 I/O，远程或沙箱后端不一定能同步完成。","c":1},{"n":"processPath","s":"abstract processPath(target): string","z":"返回这个文件系统执行世界里、子进程能打开的规范绝对路径。它可能和宿主路径完全不同。","c":1},{"n":"processPathFromHostPath","s":"processPathFromHostPath(hostPath): string | undefined","z":"把宿主侧的绝对路径映射成这个文件系统执行世界的路径；两边指的不是同一个文件就返回 undefined。","c":1},{"n":"fileUrl","s":"abstract fileUrl(target): string","z":"返回目标在这个执行世界里的规范 file: URI，URI 编码由后端自己负责。","c":1},{"n":"contains","s":"abstract contains(parent, child): boolean","z":"判断规范包含关系，不暴露也不解析后端的 target key。两个目标必须来自同一个提供方。","c":1},{"n":"stat","s":"abstract stat(target, signal?)","z":"返回目标元数据，永远不含内容；目标不存在时返回 undefined。","c":1},{"n":"lstat","s":"abstract lstat(path, opts?, signal?)","z":"当最后一段是符号链接时不跟随地取元数据。这是有意的，防止越界到链接指向的地方。","c":1},{"n":"readText","s":"abstract readText(target, signal?)","z":"把整个常规文本文件读成一个解码后的字符串。","c":1},{"n":"streamText","s":"abstract streamText(target, signal?)","z":"把整个文本文件按解码后的文本块流出来，语义和 readText 一致，用于大文件。","c":1},{"n":"readBytes","s":"abstract readBytes(target, signal, maxBytes)","z":"把整个文件读成原始字节，不解码也不拒绝二进制内容；上限就是 maxBytes，超了直接抛。","c":1},{"n":"readByteRange","s":"abstract readByteRange(target, range, signal?)","z":"只读一个字节窗口，不解码也不拒绝二进制内容。","c":1},{"n":"listDir","s":"abstract listDir(target, signal?)","z":"按稳定名字序列出一个目录的直接子项，返回解析后的子目标和廉价元数据。","c":1},{"n":"writeText","s":"abstract writeText(target, content, expected?, signal?, sandboxPolicy?)","z":"原子地创建或替换 UTF-8 文本。expected 用来防过期和表达写入意图；不传就是无条件写。","c":1},{"n":"editText","s":"abstract editText(target, edit, expected?, signal?, sandboxPolicy?)","z":"原子地编辑字面文本。传了版本守卫就先校验版本再匹配内容，避免在过期文本上做修改。","c":1},{"n":"sandboxMode","s":"sandboxMode(): configured default mode of a sandboxing backend; `undefined`","z":"The sandbox mode this backend enforces on mutations BY DEFAULT, or `undefined` when it does not confine at all — the capability fact the tool layer reads to advertise the…","c":0}]},"goals":{"zh":"目标服务，唯一数据源就是所属会话的日志。没有独立存储——目标状态是会话日志的一种投影。","n":24,"ball":"host:L2","pkg":"dsh-goal","deps":[{"to":"sessionProjections","c":"direct"},{"to":"agents","c":"direct"}],"by":[],"m":[{"n":"get","s":"@Remote('get') get(agent): GoalView | undefined","z":"读某个活 agent 当前的目标；没有当前目标返回 undefined。","c":1},{"n":"disarm","s":"disarm(agent): GoalView | undefined","z":"撤掉进程内的继续授权，但不改持久目标的阶段和修订——只停自动跑，不动记录。","c":1},{"n":"create","s":"create(agent, request): GoalView","z":"创建并武装一个目标。已完成的目标可以被替换；其它任何阶段都得先清掉或恢复。","c":1},{"n":"edit","s":"@Remote('edit') edit(agent, ref, request): GoalView","z":"改目标的描述和/或轮数上限，但不改阶段。","c":1},{"n":"pause","s":"@Remote('pause') pause(agent, ref): GoalView","z":"暂停一个活跃目标，并撤掉自动继续。","c":1},{"n":"resume","s":"@Remote('resume') resume(agent, ref): GoalView","z":"恢复并重新武装一个停下的目标；轮数预算还有效时，也能给活跃目标重新武装。","c":1},{"n":"complete","s":"@Remote('complete') complete(agent, ref): GoalView","z":"把当前非完成的目标标成完成，并撤掉武装。","c":1},{"n":"block","s":"block(agent, ref, reason): GoalView","z":"把活跃目标标成受阻，并带上持久化的原因。","c":1},{"n":"clear","s":"@Remote('clear') clear(agent, ref): GoalRef","z":"清掉当前目标，但保留墓碑和修订历史——清掉这件事本身要留痕。","c":1},{"n":"remoteExportCreate","s":"@Remote('create') remoteExportCreate(agent, request): CreateGoalResult","z":"远端边界的创建入口，只返回目标的身份，不返回整个视图。","c":1},{"n":"assertLive","s":"assertLive(agent)","z":"Enforce exact live-agent identity rather than trusting a matching id.","c":0},{"n":"commit","s":"commit(agent, runtime, change, activation)","z":"Commit one mutation into the goal log and live event stream.","c":0},{"n":"commitCurrent","s":"commitCurrent(agent, state, runtime, operation, goal, activation)","z":"Commit a mutation that retains the current goal's derived counters/times.","c":0},{"n":"commitSnapshot","s":"commitSnapshot(agent, runtime, operation, goal, roundsStarted, createdAt, updatedAt, activation)","z":"Build and commit one full-snapshot mutation.","c":0},{"n":"expectCurrent","s":"expectCurrent(state, ref)","z":"Reject stale or missing current-state refs.","c":0},{"n":"nextMutationTime","s":"nextMutationTime(state)","z":"Clamp a current goal's next timestamp across backward wall-clock movement.","c":0},{"n":"prepareMutation","s":"prepareMutation(agent)","z":"Resolve the durable and process-local state used by a mutation.","c":0},{"n":"runtimeState","s":"runtimeState(session)","z":"Return the process-local activation state, initially disarmed.","c":0},{"n":"setActivation","s":"setActivation(session, activation)","z":"Publish one process-local activation edge when it actually changes.","c":0},{"n":"state","s":"state(session)","z":"Read the current durable projection maintained by the registry.","c":0},{"n":"transition","s":"transition(agent, ref, operation, allowed, phase, activation)","z":"Shared validated phase transition.","c":0},{"n":"transitionError","s":"transitionError(current, operation, allowed)","z":"Render a stable invalid-transition error.","c":0},{"n":"view","s":"view(state, runtime)","z":"Build a detached current view.","c":0},{"n":"withPhase","s":"withPhase(current, phase)","z":"Build a new revision with one replacement phase.","c":0}]},"hmr":{"zh":"热重载服务，模块配置和事件与 cordis 的约定兼容。","n":21,"ball":"host:L0","pkg":"dsh-hmr","deps":[{"to":"loader","c":"direct"}],"by":[],"m":[{"n":"public","s":"public baseDir: string","z":"解析模块监视线程根目录所用的绝对基目录。","c":1},{"n":"runExclusive","s":"runExclusive(operation)","z":"把调用方自己的变更和所有自动重载路径串行化，避免两边同时改同一棵树。","c":1},{"n":"watchConfig","s":"async watchConfig(filename, refresh)","z":"监视一个配置路径，走的是和模块替换同一个队列，所以配置变更和代码变更不会互相插队。","c":1},{"n":"getOuterStack","s":"getOuterStack: () => string[]","z":"从模块导入的诊断里剔掉 HMR 内部帧，只保留外层调用栈——否则报错栈里全是框架自己的代码。","c":1},{"n":"getLinked","s":"async getLinked(url)","z":"从当前 Node loader 读一个模块的直接依赖 URL；没缓存过的模块返回空数组。","c":1},{"n":"reconcileProfile","s":"async reconcileProfile(requiredIds?)","z":"按 manifest 和补丁文件重组 profile，替换掉那些加载文件落在其之下的运行中插件。返回失活条目诊断、需重启才生效的模块，以及整体重启的原因。","c":1},{"n":"analyzeChanges","s":"analyzeChanges()","z":"Classify changed files into accepted (should reload) and declined (should not).","c":0},{"n":"contained","s":"contained(step, operation, fallback)","z":"Report a failed replacement step and retain the caller’s fallback outcome.","c":0},{"n":"esmHas","s":"esmHas(url, type)","z":"Whether the ES module cache holds a job for a URL; `false` when this thread keeps no ES module cache.","c":0},{"n":"esmJob","s":"esmJob(url)","z":"The cached ES module job for a URL.","c":0},{"n":"esmUrls","s":"esmUrls()","z":"ES module cache keys, empty when this thread keeps no ES module cache.","c":0},{"n":"evict","s":"evict(urls): Restores the removed cache entries.","z":"Remove modules from the ES module and CommonJS caches so the next import evaluates their files again.","c":0},{"n":"evictDropped","s":"evictDropped(dropped, kept)","z":"Evict the loaded modules below the directories of mappings a recomposition dropped and expire their package configuration, so a disabled or removed package that is instal…","c":0},{"n":"hasEsmCache","s":"hasEsmCache()","z":"Whether this thread keeps a Node ES module cache; the packed worker loader keeps none.","c":0},{"n":"loadedUrls","s":"loadedUrls()","z":"ES module cache keys and CommonJS cache filenames as URLs.","c":0},{"n":"mainJob","s":"mainJob()","z":"The module job of the process entry point, when the loader cached it under the entry's real path.","c":0},{"n":"moduleGraph","s":"moduleGraph()","z":"Static import edges between loaded modules, across ES module links and CommonJS `require` children.","c":0},{"n":"planReplacement","s":"planReplacement(stale, roots): pending modules and the replacement of the others.","z":"Plan the replacement of changed modules without changing anything.","c":0},{"n":"pluginsOf","s":"pluginsOf(url): exported plugins.","z":"The plugins a loaded module exports, read from the ES module namespace and the CommonJS exports Node cached for it without evaluating anything.","c":0},{"n":"profileModules","s":"profileModules(roots)","z":"Loaded `file:` modules below the given profile roots.","c":0},{"n":"stopPlanned","s":"stopPlanned(plan)","z":"Carry out a planned replacement: expire its manifests, evict its modules without a backup, and stop its Loader entries, so applying the generation imports the current fil…","c":0}]},"inputTriggers":{"zh":"输入框里打 `/` 或 `@` 弹出的分组候选菜单。支持键盘和鼠标、能下钻候选项；选中后交给消费方（走命令流程或插入引用）。只影响界面呈现，不组装也不发送模型请求。","n":2,"ball":"client:L4","pkg":"dsh-client-ui-input-trigger","deps":[{"to":"locale","c":"direct"},{"to":"sessions","c":"direct"},{"to":"slots","c":"direct"}],"by":[{"from":"commandUi","c":"direct"},{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"registerSource","s":"registerSource(src): disposer (callers wrap registration in ctx.effect). Disposal","z":"Register one trigger source.","c":0},{"n":"sessionOf","s":"sessionOf(actx): resident controller.","z":"Resolve the per-session controller for one session scope (lazy; the scope disposer removes and disposes it).","c":0}]},"inspector":{"zh":"宿主与客户端之间共享的服务门面，后面接的是本 realm 的源码发布器。","n":2,"ball":"client:L5","pkg":"dsh-experimental-inspector","deps":[],"by":[],"m":[{"n":"publish","s":"publish(topic, payload, monotonicMs?)","z":"发一条 JSON 观测，不等 Worker 投递完成——采集不能因为观察者慢而拖住主流程。","c":1},{"n":"cordis","s":"readonly cordis: CordisRuntimeTreeReader","z":"只读的 cordis 拓扑查询，独立于 CDP 会话。你自己的可视化插件大概率要从这里读运行时树。","c":1}]},"jobController":{"zh":"宿主服务，给生成的 ctx.remote.job 命名空间撑住。注意命名空间是 job（单数），服务名是 jobController——客户端看到的名字和宿主侧实现不同名。","n":3,"ball":"host:L1","pkg":"dsh-api-job-controller","deps":[{"to":"jobs","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[],"m":[{"n":"list","s":"@Remote({mode:'stream'}) list(request, signal)","z":"以整集帧的形式流式给出某个会话能看到的作业（自己的加上所有无主的）：打开时一帧，之后有变化再推。","c":1},{"n":"follow","s":"@Remote({mode:'stream'}) follow(request, signal)","z":"从绝对字节偏移流式跟一个作业的保留输出，结算后再推终态投影。","c":1},{"n":"kill","s":"@Remote('kill') kill(request)","z":"替人杀掉一个后台作业。请求里的会话就是围栏内的读取调用方，所以作业必须属于它。","c":1}]},"jobs":{"zh":"抽象的后台作业注册表。子类实现抽象成员后作为插件加载，注册成 ctx.jobs。一个上下文只能有一个实现，加载第二个会抛。需要子类实现。","n":12,"ball":"client:L2","pkg":"dsh-api-job-controller","deps":[{"to":"remote","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[{"from":"jobController","c":"ambiguous"}],"m":[{"n":"events","s":"abstract readonly events: JobEvents","z":"生命周期与输出事件，按订阅分别过滤。","c":1},{"n":"start","s":"abstract start(spec): JobId","z":"启动之前先做访问预检、校验、所有者清理和实现方准入，然后原子地登记；任一步失败都不会留下半启动的作业。","c":1},{"n":"list","s":"abstract list(caller?)","z":"按注册顺序列出调用方自己的和无主的作业。","c":1},{"n":"get","s":"abstract get(id, caller?)","z":"投影一个作业但不移动游标；未知或别人的作业会抛。","c":1},{"n":"read","s":"abstract read(id, caller?)","z":"从模型游标消费环形缓冲，并把游标推到当前总量。结算之后的第一次读会顺带返回结果。","c":1},{"n":"readAt","s":"abstract readAt(id, from, caller?)","z":"读保留的环形输出，但不移动模型游标。用上一次读的 next 续读。","c":1},{"n":"kill","s":"abstract kill(id, caller?, reason?)","z":"请求取消并把作业标成 stopping；返回 requested 或 already-finished。生产方抛错不会被这里吞掉。","c":1},{"n":"wait","s":"abstract wait(id, timeoutMs, caller?, signal?)","z":"等结算或超时，但不取消作业。调用方中止只在作业还活着时 reject，结算之后就不会了。","c":1},{"n":"remove","s":"abstract remove(id, caller?)","z":"把一个已结算作业的记录从可见集合里删掉，并公告 removed。","c":1},{"n":"attachController","s":"abstract attachController(name)","z":"挂一个 effect 作用域的控制器，能读和停作业；它服务的是注册它的那个上下文的会话范围。","c":1},{"n":"acquire","s":"acquire(entries, key, start, cleared)","z":"Share the live entry under `key` or start one, and hand back its release.","c":0},{"n":"releaser","s":"releaser(entries, key, entry, cleared)","z":"Release closures bind the exact entry they were minted for, never the map's current occupant: a later acquire on the same key may have replaced a stopped entry, and decre…","c":0}]},"layout":{"zh":"三栏外壳。左、中、右三栏，右栏是可贴边的面板轨道；同时管面板几何，以及把主题呈现到 document（配色、别名 token、字号、字体、元数据）。刷新后布局状态重置。","n":2,"ball":"client:L6","pkg":"dsh-client-ui-layout","deps":[],"by":[{"from":"uiWorkspace","c":"direct"},{"from":"pluginRegistryProbe","c":"direct"}],"m":[{"n":"apply","s":"apply(snapshot)","z":"Project a snapshot onto the document: set root `color-scheme` and the body palette attribute from `active.colorScheme` (never the id — `system` is resolved upstream), pub…","c":0},{"n":"dispose","s":"dispose()","z":"Retract root color-scheme, the theme-source attribute, the palette attribute, token variables, the font sizes, font lists, and the owned metadata node.","c":0}]},"llm":{"zh":"抽象的 llm 服务：一个适配器注册表，加一套流式模型调用 API。所有流式调用都可以被 llm/stream 瀑布拦截。","n":26,"ball":"host:L2","pkg":"dsh-llm","deps":[{"to":"sessionProjections","c":"direct"},{"to":"agents","c":"direct"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"agentLoop","c":"direct"}],"m":[{"n":"registerAdapter","s":"registerAdapter(providers: string[], adapter: LlmAdapter): AdapterRegistrationHandle","z":"给一组提供方路由注册适配器。任何一个路由已被占用就抛 DUPLICATE_ADAPTER，不会部分成功。返回的句柄支持原子替换。","c":1},{"n":"listProviders","s":"@Remote listProviders(): LlmProviderInfo[]","z":"列出所有挂了适配器的提供方路由，按注册顺序，返回脱离的元数据副本。","c":1},{"n":"registerConfigurableProviders","s":"registerConfigurableProviders(entries: readonly LlmConfigurableProvider[]): DirectoryRegistrationHandle","z":"声明一批「适配器插件可以通过配置激活」的提供方路由。注册是全有或全无，不会只成功一半。","c":1},{"n":"listConfigurableProviders","s":"@Remote listConfigurableProviders(): LlmConfigurableProvider[]","z":"列出所有已声明的可配置提供方，包括还没被激活的休眠条目。","c":1},{"n":"registerModelDiscovery","s":"registerModelDiscovery(settingsNs, discover): () => void","z":"替某个设置命名空间提供一个「去问提供方有哪些模型」的能力。命名空间归插件自己所有，别人不能冒用。","c":1},{"n":"discoverModels","s":"async discoverModels(settingsNs, request, signal?): Promise<LlmDiscoveredModel[]>","z":"去问某个提供方端点它到底提供哪些模型。传进去的是草稿配置，不是已存的真实路由——所以还没保存也能试。","c":1},{"n":"remoteDiscoverModels","s":"@Remote('discoverModels') async remoteDiscoverModels(settingsNs, request, signal)","z":"上一方法的 Remote 版本，给浏览器侧调用。参数一致，多一个必传的取消信号。","c":1},{"n":"providerRetryPolicy","s":"providerRetryPolicy(provider: string): ResolvedRetryPolicy","z":"取某条提供方路由注册时定下的重试策略，默认值此时已经解析好，拿来就能用。","c":1},{"n":"imageRequestPricing","s":"imageRequestPricing(provider: string, model: string): LlmImageRequestPricing | undefined","z":"查某条精确路由在提供方侧的图片计价；提供方没注册就返回 undefined，不抛。","c":1},{"n":"imageRequestTarget","s":"imageRequestTarget(provider: string, model: string, image: ImageAttachmentRef): ImageRequestTarget","z":"给某条已注册的模型路由算出图片该怎么投影：尺寸和字节目标，供适配器的请求序列化器使用。","c":1},{"n":"fileRequestText","s":"fileRequestText(ref: FileAttachmentRef): string","z":"算出某个持久文件在当前执行里，对每个提供方请求贡献的那段确定性文本句柄。确定性是关键：同样的文件必须得到同样的串。","c":1},{"n":"listModels","s":"async listModels(provider: string): Promise<LlmModelInfo[]>","z":"发现某个已注册提供方声明的模型。注意：catalog 里有没有模型，并不限制核心路由能不能走。","c":1},{"n":"resolveModelInfo","s":"async resolveModelInfo(provider, model, signal?): Promise<LlmResolvedModelInfo>","z":"从拥有这条路由的适配器那里解析并校验全部元数据：模型身份、可用上下文、推理能力。结果与适配器脱钩。","c":1},{"n":"resolveCallConfig","s":"async resolveCallConfig(config, signal?): Promise<LlmCallConfig>","z":"按模型的实际能力校验一次对话调用配置，并把适配器配置的默认值补齐。只有确实需要补默认值时才返回新对象。","c":1},{"n":"prepareCall","s":"async prepareCall(config, signal?, configure?): Promise<PreparedLlmCall>","z":"在当前适配器注册下解析一次调用，返回一次性句柄——它把这个注册绑定住，后面的 stream 就按这个注册走。","c":1},{"n":"stream","s":"stream(options: GenerateOptions): AsyncIterable<StreamChunk>","z":"把一次模型调用流式输出成原始分片（token 级增量）。返回的流可能已经被 llm/stream 监听器包过。","c":1},{"n":"adapterStream","s":"adapterStream(options, prepared)","z":"Final adapter boundary.","c":0},{"n":"commitRoutes","s":"commitRoutes(owned, registrations)","z":"Swap this registration's routes for the prepared ones in one synchronous section, so no observer can see the registry between the release and the re-registration.","c":0},{"n":"detachedModalities","s":"detachedModalities(modalities)","z":"Detach typed adapter-owned modality metadata.","c":0},{"n":"emitAdaptersUpdated","s":"emitAdaptersUpdated()","z":"Notify topology observers without letting one broken listener veto the commit.","c":0},{"n":"fileReadPath","s":"fileReadPath(ref)","z":"Resolve the current execution-world read path of one durable file reference through the mounted attachment and filesystem providers.","c":0},{"n":"forAdapter","s":"forAdapter(options, adapter)","z":"Remove replay state whose historical route is owned by another adapter.","c":0},{"n":"normalizeModelInfo","s":"normalizeModelInfo(registration, model, resolved)","z":"Validate and detach one adapter-returned exact model result.","c":0},{"n":"prepareRoutes","s":"prepareRoutes(providers, adapter, owned)","z":"Validate one candidate route set for `adapter`, treating routes this registration already holds as available.","c":0},{"n":"resolveCallWithInfo","s":"resolveCallWithInfo(config, info)","z":"Validate request controls against one already-bound exact model result.","c":0},{"n":"warnAdaptersListenerFailure","s":"warnAdaptersListenerFailure(error)","z":"Contained-listener diagnostic shared by the sync and async failure paths.","c":0}]},"loader":{"zh":"Cordis 的装载器。它持有一棵「条目树」——profile 里每一个 patch 行就是树上的一个节点，由它负责 import 对应的包、按服务就绪情况启动、卸载时反向清理。子类实现 write() 就能给它加上持久化。","n":3,"ball":"host:L0","pkg":"cordis-plugin-loader","deps":[],"by":[{"from":"hmr","c":"direct"},{"from":"pluginManager","c":"direct"},{"from":"pluginPackages","c":"direct"},{"from":"clientModules","c":"direct"},{"from":"pluginInventory","c":"direct"},{"from":"agentPresets","c":"direct"},{"from":"timer","c":"direct"}],"m":[{"n":"exit","s":"exit()","z":"Hook for hosts that can restart the process on full-reload requests.","c":0},{"n":"locate","s":"locate(fiber=…)","z":"Return the loader entry id that owns `fiber`, if any.","c":0},{"n":"unwrapExports","s":"unwrapExports(exports)","z":"Normalize ESM/CJS/default export shapes before applying a plugin.","c":0}]},"locale":{"zh":"Web 界面的多语言。用户选 zh/en 立即生效，选择通过 Host 的 settings 服务持久化到 profile。插件可以注册自己的命名空间字典，界面文案跟着切，不用重载页面。","n":13,"ball":"client:L3","pkg":"dsh-client-locale","deps":[],"by":[{"from":"pluginRegistryProbe","c":"direct"},{"from":"uiWorkspace","c":"direct"},{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"},{"from":"modelDirectories","c":"direct"},{"from":"commandUi","c":"direct"},{"from":"cotTranslation","c":"direct"},{"from":"inputTriggers","c":"direct"},{"from":"shortcuts","c":"direct"}],"m":[{"n":"addLanguage","s":"addLanguage(input): idempotent disposer removing this exact definition.","z":"Add one selectable language to the shared catalog.","c":0},{"n":"adopt","s":"adopt(host)","z":"Adopt the scope's accepted durable selection without writing it back; an absent selection returns to the browser-derived locale.","c":0},{"n":"assertFallbackChain","s":"assertFallbackChain(start)","z":"Fail a new definition whose complete fallback path does not reach English.","c":0},{"n":"fallbackChain","s":"fallbackChain(start)","z":"Resolve a lookup chain, falling directly to English across an unload gap.","c":0},{"n":"getLocale","s":"getLocale(): current snapshot (stable reference until the next change).","z":"Read the current immutable locale snapshot.","c":0},{"n":"getSnapshot","s":"getSnapshot(): current snapshot.","z":"LocaleFace getSnapshot: the current snapshot (carries `revision`; stable reference between changes, uSES-safe).","c":0},{"n":"localeList","s":"localeList()","z":"Snapshot the catalog in registration order.","c":0},{"n":"publish","s":"publish(active, localeChanged, locales=…)","z":"Advance the snapshot revision and notify LocaleFace subscribers (render refresh).","c":0},{"n":"publishCatalog","s":"publishCatalog()","z":"Recompute browser fallback and publish the current catalog.","c":0},{"n":"resolveActive","s":"resolveActive()","z":"Resolve an explicit preference only while its definition is available.","c":0},{"n":"resolveText","s":"resolveText(text): first available translation, including an empty string.","z":"Resolve package text through the active language's declared fallback chain.","c":0},{"n":"setLocale","s":"setLocale(id)","z":"Switch the active locale — the only user preference write entry.","c":0},{"n":"subscribe","s":"subscribe(fn): unsubscribe.","z":"LocaleFace subscribe: notified on every snapshot change (locale switch or dictionary registration — registrations bump the revision so already rendered outlets pick up la…","c":0}]},"mcpResources":{"zh":"按作用域访问资源，外加三个由已配置 MCP 服务器共享的工具。","n":3,"ball":"host:L2","pkg":"dsh-mcp-resources","deps":[{"to":"tools","c":"direct"},{"to":"systemPrompt","c":"direct"}],"by":[],"m":[{"n":"register","s":"register(server, provider): () => void","z":"注册一个服务器，并在该作用域还有提供方时暴露资源工具。","c":1},{"n":"registerTools","s":"registerTools(scope)","z":"Own one scope's tools independently of its configured server plugins.","c":0},{"n":"request","s":"request(server, request, exec)","z":"Resolve the caller-visible server before starting any network operation.","c":0}]},"messageFeedback":{"zh":"会话日志服务。冷操作（不涉及活的会话）永远不会去构造 Session 或 Agent——这条保证让它能安全地在无会话场景下调用。","n":5,"ball":"host:L1","pkg":"dsh-message-feedback","deps":[{"to":"sessions","c":"direct"},{"to":"sessionPersistence","c":"direct"}],"by":[],"m":[{"n":"list","s":"@Remote('list') list(request)","z":"从规范日志读当前反馈；要么给不可变条目，要么明确说持久层没有。","c":1},{"n":"put","s":"@Remote('put') put(request)","z":"校验当前版本后创建或替换反馈。内容完全相同的 no-op 会保留版本号，并且不追加事件。","c":1},{"n":"delete","s":"@Remote('delete') delete(request)","z":"校验版本后删除；本来就不存在时直接成功，不发事件。","c":1},{"n":"enqueue","s":"enqueue(sessionId, operation)","z":"Serialize complete operations and drain their handles before disposal.","c":0},{"n":"withSession","s":"withSession(sessionId, write, operation)","z":"Hold cold write ownership across read/compare/append; use live owners directly.","c":0}]},"modelDirectories":{"zh":"模型选择。`/model` 弹窗和输入框的模型控件共用同一份按提供方分组的目录；选定后从下一次请求生效，正在跑的步骤保留它启动时的模型。","n":1,"ball":"client:L6","pkg":"dsh-client-ui-model-selection","deps":[{"to":"remote","c":"direct"},{"to":"locale","c":"direct"},{"to":"commandUi","c":"direct"},{"to":"sessions","c":"direct"},{"to":"slots","c":"direct"}],"by":[],"m":[{"n":"directoryFor","s":"directoryFor(sessionId): resident directory both entries share.","z":"Resolve the per-session shared directory (lazy; the scope disposer removes and disposes it).","c":0}]},"modules":{"zh":"浏览器端的模块系统。Host 半边扫描已启用的条目、拼出启动图，把每个插件的浏览器代码当 bundle 提供出去；浏览器半边按需惰性加载。设计上有个要点：**插件在被用之前什么都不执行**——加载 bundle 只注册工厂，副作用等到物化才跑。","n":11,"ball":"client:L0","pkg":"dsh-client-modules","deps":[],"by":[{"from":"timer","c":"direct"}],"m":[{"n":"arrive","s":"arrive(row)","z":"Load one graph row so its factory is registered (idempotent per in-flight arrival).","c":0},{"n":"arriveDependency","s":"arriveDependency(consumerId, dependency, open, visited)","z":"Arrive one dependency, naming the consumer it failed for so a cascade reads as a chain, not as 44 unrelated failures.","c":0},{"n":"arriveGraphRow","s":"arriveGraphRow(row, open=…, visited=…)","z":"Register each injected package and unresolved dynamic request before its consumer.","c":0},{"n":"importChunk","s":"importChunk(ownerId, fileName)","z":"Load, register, and materialize one package-local dynamic chunk.","c":0},{"n":"loadShared","s":"loadShared(url)","z":"Run one bundle transport per URL; every row waiting on the same URL shares the in-flight request.","c":0},{"n":"makeRequire","s":"makeRequire(ownerId, edges)","z":"Build the synchronous module-table require and its asynchronous chunk operation.","c":0},{"n":"materialize","s":"materialize(id, ownerId=…)","z":"Materialize a registered factory (synchronous; memoized in loadCache).","c":0},{"n":"prune","s":"prune(roots)","z":"Retain live Loader modules and their transitive requests before evicting unreferenced graph records.","c":0},{"n":"recordingImportError","s":"recordingImportError(id, operation)","z":"Run one graph-row operation, recording its failure for the boot audit and clearing the record on success.","c":0},{"n":"register","s":"register(registration)","z":"Register one bundle factory, rejecting a script that executes twice without invalidation.","c":0},{"n":"updateManifest","s":"updateManifest(manifest, managed)","z":"Refresh descriptors and unowned factory revisions before any entry imports its dependencies.","c":0}]},"officeToPdf":{"zh":"一个提供方生命周期统管所有转换器、排队中的调用和临时文件——所以卸载时能一次清干净，不会留临时文件。","n":4,"ball":"host:L0","pkg":"dsh-office-to-pdf","deps":[],"by":[],"m":[{"n":"generation","s":"readonly generation: OfficeToPdfGeneration","z":"引擎、字体或转换配置被替换时它就变。把它当缓存键的一部分，配置变了旧 PDF 就自动失效。","c":1},{"n":"convert","s":"convert(request, signal?)","z":"转换 Office 字节，不改源文件、也不写会话事件。","c":1},{"n":"render","s":"@Remote async render(scope, path, priority, signal)","z":"用会话的普通文件系统授权读并转换一个 Office 文件，返回完整 PDF 字节和缺失的字体族。","c":1},{"n":"getGeneration","s":"@Remote('generation') getGeneration(signal)","z":"复用客户端已有的 PDF 之前，先读当前渲染世代。","c":1}]},"otel":{"zh":"共享的传输提供方。光挂载它不会建队列、不会建身份、也不会联网——真正发数据要显式创建上报器。","n":2,"ball":"host:L0","pkg":"dsh-otel","deps":[],"by":[{"from":"productTelemetry","c":"direct"}],"m":[{"n":"createEventReporter","s":"createEventReporter(options)","z":"建一条独立的事件通道，按条数批量。注入的消费方必须自己负责排空，否则会积压。","c":1},{"n":"createSessionLogReporter","s":"createSessionLogReporter(options)","z":"建一条独立的、按字节数限界的会话日志通道。授权和脱敏在投递之前完成。","c":1}]},"permissionPresets":{"zh":"管部署配置的权限预设、固定的 Auto 集成钩子，以及它们的写入路径。它需要一个限制性的 ctx.shell 执行器和 ctx.approval；没匹配上的开关值会报成 CUSTOM_PRESET，而不是报错——这是有意的宽容。","n":13,"ball":"host:L3","pkg":"dsh-permission-presets","deps":[{"to":"sessionProjections","c":"direct"},{"to":"approval","c":"direct"},{"to":"sessions","c":"direct"},{"to":"commands","c":"direct"},{"to":"settings","c":"direct"},{"to":"shell","c":"direct"}],"by":[],"m":[{"n":"catalog","s":"@Remote('catalog') catalog()","z":"按贡献顺序读全部当前可选的预设。","c":1},{"n":"registerAuto","s":"registerAuto(admit)","z":"为调用方集成的 effect 生命周期发布那个固定的 Auto 预设。","c":1},{"n":"current","s":"current(session): string","z":"解析匹配当前开关值的预设；没有匹配就返回 custom。共享 bundle 打平时，还匹配的最近一次选择胜出。","c":1},{"n":"resolve","s":"resolve(name): PresetSpec","z":"解析一个可用预设的开关包。","c":1},{"n":"optionOf","s":"optionOf(name): PresetOption","z":"构造给客户端渲染的选项；缺标签就退回用预设键名。","c":1},{"n":"set","s":"set(session, name): void","z":"记录改过的预设，再通过每个开关各自的 setter 更新；选中当前生效的那个预设会走空操作。","c":1},{"n":"apply","s":"apply(session, name, setApproval)","z":"Apply one preset through its durable identity and canonical knob setters.","c":0},{"n":"defaultPreset","s":"defaultPreset(): resolved settings value, or the composition default without","z":"The preset currently selected as the default for future sessions.","c":0},{"n":"derive","s":"derive(state)","z":"Resolve the preset for one folded knob state (the shared mathematics of `current` and the projection unit).","c":0},{"n":"emitCatalogChanged","s":"emitCatalogChanged()","z":"Publish a non-vetoing payload-free catalog invalidation.","c":0},{"n":"names","s":"names(): every switchable preset name.","z":"The advertised preset names: configured entries in declaration order, followed by Auto while its integration is live.","c":0},{"n":"pinInitialPermission","s":"pinInitialPermission(session)","z":"Fill every missing permission fact before a session is published.","c":0},{"n":"specOf","s":"specOf(name)","z":"Resolve one configured or currently live fixed preset without throwing.","c":0}]},"planMode":{"zh":"管已落盘的计划状态：在每步开始时套用并播报选中的状态，负责 plan:policy 段落、/plan 命令，以及那个稳定的退出工具。","n":5,"ball":"host:L2","pkg":"dsh-plan-mode","deps":[{"to":"sessionProjections","c":"direct"},{"to":"systemPrompt","c":"direct"},{"to":"tools","c":"direct"},{"to":"commands","c":"direct"}],"by":[],"m":[{"n":"get","s":"get(agent)","z":"读已落盘的计划状态，以及一个还在等待的选择。","c":1},{"n":"set","s":"set(agent, active)","z":"选择计划模式是否激活。轮次之间会立即追加（那时没有可挂靠的步骤）；返回 committed / queued / cancelled / noop 四种，把「什么时候生效」讲清楚了。","c":1},{"n":"narration","s":"narration(session, target)","z":"Build a user-switch notice when the last logged header described the other mode.","c":0},{"n":"onBoundary","s":"onBoundary(session)","z":"Append one pending selection before the next request assembly.","c":0},{"n":"planState","s":"planState(session)","z":"Read the required plan projection state or fail at the first service access.","c":0}]},"pluginInventory":{"zh":"当前 Loader 插件状态的只读投影。浏览器调 `pluginInventory/list` 能按加载顺序看到每个条目的标识、模块标识、有效启用状态、存活阶段。部署了 agent preset 名册时还会报每个预设的元数据与压平后的组合。**只读快照：不能改插件，也没有变更订阅。**","n":1,"ball":"host:L1","pkg":"dsh-host-plugin-inventory","deps":[{"to":"loader","c":"direct"}],"by":[],"m":[{"n":"list","s":"list(): Current non-group Loader entries in Loader order, with optio","z":"Read the Loader directly on every call.","c":0}]},"pluginManager":{"zh":"管 profile 文件，并按声明的重载生命周期把它们应用出去。插件装的卸的最终都落到它这里。","n":19,"ball":"host:L2","pkg":"dsh-plugin-manager","deps":[{"to":"loader","c":"direct"},{"to":"sandboxPolicy","c":"direct"},{"to":"tools","c":"direct"},{"to":"profileContext","c":"direct"}],"by":[{"from":"pluginMarket","c":"direct"}],"m":[{"n":"listVersionExemptions","s":"@Remote listVersionExemptions()","z":"读这个 profile 里保存的插件版本豁免。读取时被拒绝的记录或文件问题会一并返回，由调用方报告，而不是让整个读取失败。","c":1},{"n":"setVersionExemption","s":"@Remote setVersionExemption(packageVersion, runtimeVersion, enabled, acceptRisk?)","z":"授予或撤销一条精确的插件 / runtime 版本豁免，并重新评估活着的插件。启动期只读的 profile 需要重启才生效。","c":1},{"n":"listPlugins","s":"@Remote async listPlugins()","z":"读当前插件，包括某一行为什么没法通过 profile 补丁改动。","c":1},{"n":"listBundles","s":"@Remote listBundles()","z":"读已安装的、安装提供的、以及离线的官方目录 bundle，外加被选中的非 bundle 名字。","c":1},{"n":"registries","s":"@Remote async registries()","z":"读这个管理器会去问的注册表：配置的首个、它按序的兜底、以及 pnpm 自己配置里认的那个。","c":1},{"n":"inspect","s":"@Remote async inspect(spec, options?, signal?)","z":"装之前先看清一个 spec 到底指向什么包，或者为什么被拒。","c":1},{"n":"setPluginEnabled","s":"@Remote setPluginEnabled(id, enabled)","z":"持久化某个插件条目的启用意图，并在活着的 profile 上应用。","c":1},{"n":"setBundleEnabled","s":"@Remote setBundleEnabled(name, enabled)","z":"选中或移除一个 bundle 层，同时保留已经安装的依赖。","c":1},{"n":"installBundle","s":"@Remote installBundle(spec, options?)","z":"用和 dsh plugin 相同的 pnpm 实现装包。GitHub 仓库会先做一次连接检查。","c":1},{"n":"waitForInstall","s":"@Remote async waitForInstall(requestId)","z":"取回一次进行中安装的结果，但不取消它。返回 null 既不表示成功也不表示取消——已完成的不会被保留。","c":1},{"n":"cancelInstall","s":"@Remote async cancelInstall(requestId)","z":"停掉这个管理器拥有的一次安装，并等到文件恢复。返回 cancelled / too-late / not-running 三种，区分得很细。","c":1},{"n":"removeBundle","s":"@Remote removeBundle(name)","z":"按 dsh plugin 的 pnpm 路径卸载并移除一个 profile 拥有的 bundle 依赖。","c":1},{"n":"declaredRows","s":"declaredRows(name, info)","z":"The rows a bundle's patch inserts and the existing rows it changes; an unreadable patch throws.","c":0},{"n":"publishAndReload","s":"publishAndReload(requiredIds=…): reload's outcome.","z":"Apply a package change: without HMR, publish the runtime resolution when that is safe, then {@link reload}.","c":0},{"n":"readRestoredFiles","s":"readRestoredFiles()","z":"The profile files an installation may rewrite, as they are now; absent files read as undefined.","c":0},{"n":"refreshPackages","s":"refreshPackages()","z":"Publish the profile's runtime resolution without HMR, unless a deselected startup bundle still runs and needs the current table.","c":0},{"n":"reload","s":"reload(requiredIds=…): Warnings about entries that were already inactive, and why t","z":"Apply the saved profile; with HMR it recomposes live, including the runtime resolution.","c":0},{"n":"restoreFiles","s":"restoreFiles(files)","z":"Put the profile files back; pnpm has exited by the time this runs.","c":0},{"n":"runPnpm","s":"runPnpm(args, signal, requestId)","z":"Run one pnpm command in the profile, streaming its output as install-log chunks.","c":0}]},"pluginMarket":{"zh":"拉取、校验、缓存配置好的市场索引；并用当前 profile 的安装事实给条目做标注（这样才能显示「已装/未装」）。","n":7,"ball":"host:L3","pkg":"dsh-plugin-market","deps":[{"to":"pluginManager","c":"direct"},{"to":"tools","c":"direct"}],"by":[],"m":[{"n":"listIndexes","s":"@Remote listIndexes()","z":"列出配置的索引源，不拉取它们；附带最后一次成功读取的标题，失败时带上错误。","c":1},{"n":"setIndexes","s":"@Remote async setIndexes(urls)","z":"通过 Settings 替换索引源，不重挂这个服务。","c":1},{"n":"search","s":"@Remote async search(url, query)","z":"返回配置索引里匹配查询的一页插件。同一个 URL 的并发读共享一次拉取，不会打爆源站。","c":1},{"n":"entry","s":"async entry(url, name)","z":"读配置索引里的一个插件，用和 search 一样的缓存文档。","c":1},{"n":"annotator","s":"annotator()","z":"Annotate plugins with the profile's bundles and exemptions as they are now.","c":0},{"n":"readBody","s":"readBody(response, failed)","z":"Read the whole body, refusing it as soon as it exceeds `maxBytes`.","c":0},{"n":"sources","s":"sources()","z":"The configured sources as written, each with the refusal that makes it unusable.","c":0}]},"pluginNavigation":{"zh":"侧栏那个「插件」入口。管理 profile 已装的组合包：启停、安装、看 pnpm 输出、停掉一次运行、卸载（要二次确认）。注册了配置页的插件在这里编辑。","n":23,"ball":"client:L7","pkg":"dsh-client-ui-plugin-manager","deps":[],"by":[],"m":[{"n":"abortInspect","s":"abortInspect()","z":"Drop the check in flight; its answer is ignored.","c":0},{"n":"appendLog","s":"appendLog(chunk)","z":"Fold a chunk belonging to this installation into its pnpm command.","c":0},{"n":"applied","s":"applied(answer, packageName)","z":"Publish a change's outcome: a refused answer or a change the Host could not apply throws for {@link run} to report; a change that waits for the next start, that a higher …","c":0},{"n":"approveBuildsAndRetry","s":"approveBuildsAndRetry()","z":"Allow the install scripts the failed run left pending and run the same spec again.","c":0},{"n":"cancelInstall","s":"cancelInstall()","z":"Leave the check or the failed screen for the spec at once; a Host-owned run is asked to stop and its state waits for the Host's word, since neither a dropped RPC nor a cl…","c":0},{"n":"dispose","s":"dispose()","z":"Stop publishing and drop every late settlement.","c":0},{"n":"enableInstalled","s":"enableInstalled()","z":"Enable the bundle the finished install added, then close the dialog and mark it in the list.","c":0},{"n":"getSnapshot","s":"getSnapshot(): current sync snapshot (stable reference until the next chang","z":"Read the tab's state.","c":0},{"n":"gone","s":"gone(signal)","z":"Whether a settlement arrives too late to matter: the store is disposed, or the dialog moved on.","c":0},{"n":"inject","s":"inject(configLedger, pluginTabs, resolveText): tab's snapshot sources and its actions.","z":"Build the face the tab's slot registration injects.","c":0},{"n":"installProgress","s":"installProgress(progress)","z":"Follow the Host's cancellation window for this dialog's installation.","c":0},{"n":"load","s":"load(): settlement after this call's freshness is reflected.","z":"Read the bundles and the entries their rows run as.","c":0},{"n":"offerSpecAgain","s":"offerSpecAgain(notice=…)","z":"Release the tracked request and return to editing with its spec retained.","c":0},{"n":"openCatalogInstall","s":"openCatalogInstall(pkg, target, enabled)","z":"Reuse the install dialog with an exact catalog target and an explicit selection outcome.","c":0},{"n":"openDialog","s":"openDialog(): whether a new dialog started.","z":"Open the install dialog: a new one starts from the registry last used here and reads what the Host offers; a hidden installation reopens as it is.","c":0},{"n":"readRegistries","s":"readRegistries(read)","z":"Read the registries the Host offers, for the dialog just opened; a refused read leaves pnpm's own and a typed one.","c":0},{"n":"reconcileInstall","s":"reconcileInstall()","z":"A recovery call shares the Host's active result; absent results are explicitly unknown.","c":0},{"n":"refresh","s":"refresh()","z":"Keep manual refresh feedback until its coalesced reads settle, without clearing cached cards.","c":0},{"n":"run","s":"run(key, subject, action)","z":"Run one action under a busy key, turn its failure into the notice, and re-read the Host afterwards whatever happened.","c":0},{"n":"runInstall","s":"runInstall()","z":"Check the typed spec, then install it.","c":0},{"n":"sendCancellation","s":"sendCancellation(request, cancellation)","z":"A cancellation that overtakes installation is retried after the Host acknowledges that request.","c":0},{"n":"settleRefresh","s":"settleRefresh()","z":"Publish refresh feedback only before disposal.","c":0},{"n":"startInstall","s":"startInstall(subject, approvedBuilds)","z":"Hand the checked spec to the Host and settle the dialog from its answer.","c":0}]},"pluginPackages":{"zh":"一个 profile 进程内共享的包查找表。插件清单、市场页这类消费方都从它查元数据，不用各自去读磁盘。","n":5,"ball":"host:L1","pkg":"dsh-app-boot","deps":[{"to":"loader","c":"direct"}],"by":[],"m":[{"n":"metaOf","s":"metaOf(specifier, parentURL): local display metadata or its diagnostic; undefined for non-","z":"Read display metadata without loading or activating the target plugin.","c":0},{"n":"packageOf","s":"packageOf(specifier, parentURL): parsed package, or undefined when no package owns the reques","z":"Locate the package named by a specifier without requiring a package export.","c":0},{"n":"refresh","s":"refresh()","z":"Publish the latest generation computed by the installed resolution through {@link replace}.","c":0},{"n":"replace","s":"replace(successor)","z":"Publish a complete successor generation for this process and subsequently created Workers.","c":0},{"n":"resolution","s":"resolution()","z":"The published runtime resolution, or `undefined` when Node resolves packages alone.","c":0}]},"pluginRegistryProbe":{"zh":"在宿主侧比较公共注册表的响应快慢；但初始选哪个由客户端决定——测量在服务端，决策在客户端。","n":1,"ball":"host:L0","pkg":"dsh-client-ui-plugin-manager","deps":[{"to":"slots","c":"direct"},{"to":"locale","c":"direct"},{"to":"remote","c":"direct"},{"to":"configForms","c":"direct"},{"to":"layout","c":"direct"}],"by":[],"m":[{"n":"fastest","s":"@Remote async fastest()","z":"通过宿主的 fetch 代理让 npm 和 npmmirror 赛跑 HTTPS ping。并发读者共享同一次探测，结果缓存。","c":1}]},"productAnalytics":{"zh":"需要认证的事件收集入口。被禁用的实例既不检查身份，也不收新事件——禁用了就真的什么都不做，不是收下来再丢弃。","n":4,"ball":"client:L2","pkg":"dsh-client-product-analytics","deps":[{"to":"deepseekAccount","c":"direct"},{"to":"productTelemetry","c":"direct"},{"to":"remote","c":"direct"},{"to":"settings","c":"direct"}],"by":[],"m":[{"n":"enabled","s":"@Remote enabled()","z":"读收集策略：这个宿主当前是否接受桌面端分析。","c":1},{"n":"watchPolicy","s":"@Remote({mode:'stream'}) async *watchPolicy(signal)","z":"流式给出当前策略，配置被改之后也会推新的。","c":1},{"n":"report","s":"@Remote async report(event)","z":"提交选定的桌面字段，附缓存的静态环境和新鲜的身份。本地提交即返回，不等投递或仓库确认。","c":1},{"n":"track","s":"track(name, attributes, timestamp=…)","z":"Send an event without retaining it for reconnect or later enablement.","c":0}]},"productTelemetry":{"zh":"宿主侧的分析发送器。光挂载不会发送任何东西；所属 fiber 卸载时才把它排空——和 productAnalytics（入口）是两回事。","n":1,"ball":"host:L1","pkg":"dsh-host-product-telemetry-otel","deps":[{"to":"otel","c":"direct"}],"by":[{"from":"productAnalytics","c":"direct"}],"m":[{"n":"emit","s":"emit(record): void","z":"入队一条产品事件，不等网络投递。队列接收和关闭完成是两件事。","c":1}]},"profileContext":{"zh":"当前 profile 的事实。排期和修改都不归它，归调用方——它只读数，不决策。","n":4,"ball":"host:L0","pkg":"dsh","deps":[],"by":[{"from":"pluginManager","c":"direct"}],"m":[{"n":"packageManager","s":"readonly packageManager?: ProfilePnpmInvocation","z":"打包应用提供自己的内置 runtime，而不是 PATH 里的可执行文件。","c":1},{"n":"startedBundles","s":"readonly startedBundles: readonly string[]","z":"启动这个进程时用的 bundle 包，是任何持久化编辑之前的状态。","c":1},{"n":"overlays","s":"readonly overlays: readonly PatchOptions[]","z":"解析后的命令行 overlay，应用在 profile 补丁和 home 补丁之上。","c":1},{"n":"telemetryDisabledEnv","s":"readonly telemetryDisabledEnv: string | undefined","z":"启动时的 DSH_TELEMETRY_DISABLED 值；任何非空值都算退出。","c":1}]},"ptcRuntime":{"zh":"注册一份 ptcRuntime 实现。程序错误、预算超限、中止、底层失败都会解析进 PtcRunResult；只有「把服务定义用错了」才会 reject——这是契约边界，不是错误处理风格。","n":9,"ball":"host:L0","pkg":"dsh-ptc-runtime","deps":[],"by":[],"m":[{"n":"language","s":"abstract readonly language: string","z":"run 期望 program 用什么语言写，小写标识符。仅信息性质，不做门控。","c":1},{"n":"isolation","s":"abstract readonly isolation: string","z":"执行基座的小写标识符。仅信息性质、不做门控——它是给部署方看的描述符，不是约束开关。","c":1},{"n":"release","s":"release(owner)","z":"释放某个所有者保留的环境，并等它的执行资源全部归还。","c":1},{"n":"resolve","s":"abstract resolve(request)","z":"执行前解析支持的选项和提供方默认值，产出完整目录、截止时间和支持的权限。","c":1},{"n":"run","s":"abstract run(spec)","z":"执行解析后的输入；程序结果作为结果字段 resolve，不靠抛异常表达失败。","c":1},{"n":"executionInstructions","s":"executionInstructions()","z":"Provider-owned program usage guidance for consumers to present alongside the source language.","c":0},{"n":"programFormat","s":"programFormat()","z":"Source evaluation form, independent of whether the provider retains state for an owner.","c":0},{"n":"sandboxMode","s":"sandboxMode()","z":"Deployment file-policy mode, or undefined for a provider without confinement support.","c":0},{"n":"timeout","s":"timeout()","z":"Configured numeric elapsed-time defaults and cap, or undefined when per-call overrides are unsupported.","c":0}]},"remote":{"zh":"浏览器调 Host 的类型化入口。`ctx.remote.<namespace>.<方法>()` 走 Typert RPC，分派、参数校验、取消、断线重连都由它管。它和 Host 侧的 typertGateway 用同一份生成的 InvocationDescriptor，两边对得上才调得通。","n":3,"ball":"client:L1","pkg":"dsh-api-gateway","deps":[{"to":"remoteAccess","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"typert","c":"ambiguous"},{"to":"webServer","c":"ambiguous"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"cotTranslation","c":"direct"},{"from":"timer","c":"direct"},{"from":"modelDirectories","c":"direct"},{"from":"pluginRegistryProbe","c":"direct"},{"from":"commandUi","c":"direct"},{"from":"remoteAccess","c":"direct"},{"from":"configForms","c":"ambiguous"},{"from":"productAnalytics","c":"direct"},{"from":"settingsSchema","c":"ambiguous"},{"from":"uiSession","c":"direct"},{"from":"directoryPickerController","c":"ambiguous"},{"from":"fileUpload","c":"ambiguous"},{"from":"fileUploads","c":"ambiguous"},{"from":"jobController","c":"ambiguous"},{"from":"jobs","c":"ambiguous"},{"from":"terminalController","c":"ambiguous"},{"from":"uiWorkspace","c":"direct"},{"from":"webTerminals","c":"ambiguous"},{"from":"workspaceController","c":"ambiguous"},{"from":"workspaceFiles","c":"direct"},{"from":"workspaces","c":"ambiguous"}],"m":[{"n":"installNamespace","s":"installNamespace(name, descriptors): disposer unmounting the group and the namespace once empty.","z":"Mount one namespace's descriptor group with no visibility gap: a fresh namespace installs its whole group synchronously inside its fiber's apply, so a plugin parked on th…","c":0},{"n":"invokeStream","s":"invokeStream(descriptor, projection, token, callerCtx, values, boundIdentity)","z":"Open the logical stream now and hand back its handle; `send()` before the first read queues behind the `open` frame.","c":0},{"n":"openRemoteStream","s":"openRemoteStream(endpoint, payload, signal, uplink, noConnection=…)","z":"Open one Remote stream and normalize a worker-local carrier's structural failures.","c":0}]},"remoteAccess":{"zh":"访问策略注册表 + 网关的准入决策 + 列表过滤 + 每个对端的访问快照。凡是挂了网关的组合，都会一并挂上它。","n":6,"ball":"client:L1","pkg":"dsh-api-remote-access","deps":[{"to":"remote","c":"direct"},{"to":"slots","c":"direct"},{"to":"webServer","c":"direct"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"remote","c":"ambiguous"},{"from":"typertGateway","c":"ambiguous"},{"from":"uiSession","c":"direct"},{"from":"uiWorkspace","c":"direct"},{"from":"directoryPickerController","c":"ambiguous"},{"from":"workspaceController","c":"ambiguous"},{"from":"workspaces","c":"ambiguous"}],"m":[{"n":"registerPolicy","s":"registerPolicy(kind, policy): () => void","z":"在调用方 fiber 里注册某一类非属主 principal 的策略；已打开的访问快照会在重新生成时用到它。","c":1},{"n":"invalidate","s":"invalidate(principal?): void","z":"报告某个 principal 的绑定或条件答案可能变了。业务包在状态变化时调它，触发快照重算。","c":1},{"n":"decide","s":"decide(request): RemoteAccessDecision","z":"只有网关能调：对一次请求做准入决策。属主一律放行。拒绝时给出具体原因；策略本身抛错则报 policy-failed，同一个策略在下次 invalidate 前只记一次日志。","c":1},{"n":"allows","s":"allows(resource): boolean","z":"在 Remote 方法内部过滤条目。属主、以及在 Remote 调用之外，一律 true。","c":1},{"n":"snapshotFor","s":"snapshotFor(principal): RemoteAccessBaseline","z":"页面打开时的基线快照：属主给属主基线，其他人给当前授权。","c":1},{"n":"follow","s":"@Remote({mode:'stream'}) async *follow(signal)","z":"流式推送调用方的访问快照：先一个基线，之后每次 invalidate 补 upsert / remove 帧。","c":1}]},"resources":{"zh":"把 URL 地址变成实时数据的机制。组件只知道 `dsh-resource://<type>/…` 这样的地址，由注册过的提供方去解析，组件通过 useResource 钩子拿到当前值和后续更新。适合「数据在别的包里，我这只知道地址」的场景。","n":3,"ball":"client:L1","pkg":"dsh-client-resources","deps":[],"by":[{"from":"workspaceFiles","c":"direct"}],"m":[{"n":"attach","s":"attach(record)","z":"The provider arrived: a held record opens its stream, an idle one turns `loading`.","c":0},{"n":"consume","s":"consume(record, provider, signal)","z":"Failures arrive as frames; a throw inside the stream is left to surface.","c":0},{"n":"detach","s":"detach(record)","z":"The provider left: the stream ends and the record reports `none`.","c":0}]},"sandbox":{"zh":"抽象的进程沙箱服务。confine 要么返回真正生效的 argv，要么在包装或执行阶段直接失败；静默放行等于没有沙箱，是被明令禁止的。需要子类实现。","n":1,"ball":"host:L0","pkg":"dsh-sandbox","deps":[{"to":"approval","c":"direct"}],"by":[{"from":"worktrees","c":"direct"}],"m":[{"n":"confine","s":"abstract confine(argv, policy, signal?)","z":"把 argv 包成「在本机按 policy 受限执行」的样子，调用方拿着返回的 argv 去 spawn。同时给出这个后端实际达到了多少约束——不是声称，是实际。","c":1}]},"sandboxPolicy":{"zh":"沙箱策略服务：管部署默认模式、兜底工作区根目录、以及当前请求时的策略段落。工具层每次执行都要调 resolve，这样会话的模式日志和不可变策略才不会打架。","n":4,"ball":"host:L1","pkg":"dsh-sandbox-policy","deps":[{"to":"sessionProjections","c":"direct"},{"to":"systemPrompt","c":"direct"}],"by":[{"from":"pluginManager","c":"direct"},{"from":"worktrees","c":"direct"},{"from":"terminalController","c":"ambiguous"},{"from":"webTerminals","c":"ambiguous"},{"from":"workspaceFiles","c":"direct"}],"m":[{"n":"defaultMode","s":"readonly defaultMode: SandboxMode","z":"部署默认模式，也就是会话覆盖之下的一层兜底。","c":1},{"n":"workspaceRoot","s":"readonly workspaceRoot: string","z":"没有会话 cwd 时，workspace-write 模式使用的兜底绝对根目录。","c":1},{"n":"resolve","s":"resolve(request?): SandboxExecutionPolicy","z":"为一次能力调用解析出完整策略。已批准的显式模式优先于会话最后一次沙箱设置。","c":1},{"n":"overrideOf","s":"overrideOf(session): SandboxMode | undefined","z":"读会话自己的模式覆盖，不套用部署默认值。","c":1}]},"schedule":{"zh":"共享的调度管理服务。读、删、改时间都不会激活会话——只有一次投递真正提交时才会，靠的是 ctx.sessions.flush()。这条保证让管理操作不会意外唤醒一堆 agent。","n":9,"ball":"host:L4","pkg":"dsh-schedule","deps":[{"to":"sessions","c":"direct"},{"to":"agents","c":"direct"},{"to":"sessionController","c":"direct"},{"to":"storageDomain","c":"direct"},{"to":"sessionPersistence","c":"direct"}],"by":[],"m":[{"n":"create","s":"async create(sessionId, request, signal?)","z":"创建一条绑定到调用方所选会话的提醒，但不激活那个会话。","c":1},{"n":"list","s":"@Remote('list') async list(request)","z":"读所选会话的活跃任务，不恢复它的 agent。","c":1},{"n":"catalog","s":"@Remote('catalog') async catalog()","z":"读所有活跃和不活跃的宿主提醒及其原始会话绑定；已删除的提醒没有行。","c":1},{"n":"history","s":"@Remote('history') async history(request)","z":"读已保存的收件箱投递，既不激活也不读原会话。","c":1},{"n":"delete","s":"@Remote('delete') async delete(request, signal?)","z":"删掉所选会话的一条任务，队列里已排的消息保留。","c":1},{"n":"update","s":"@Remote('update') async update(request, signal?)","z":"在原始会话绑定内改一条活跃任务的名字、指令和时间，不激活会话。存储或生命周期失败会 reject；写入开始之后再取消不会回滚。","c":1},{"n":"emitChanged","s":"emitChanged()","z":"Dispatch one post-commit `schedule/changed` notification, containing synchronous listener failures: every call site emits only after its durable task write landed, so a t…","c":0},{"n":"reminderTargetRefusal","s":"reminderTargetRefusal(sessionId): stable refusal for a delegated child's Session, or undefined","z":"Refuse a Session no delivery can reach because a delegated child owns it.","c":0},{"n":"stopSessionTasks","s":"stopSessionTasks(sessionId)","z":"Remove every active task stored for one Session, inside the queue the tools use.","c":0}]},"sessionController":{"zh":"宿主服务，给生成的 ctx.remote.session 命名空间撑住。方法最多（22 个），几乎所有会话级操作都从这里出去。","n":22,"ball":"host:L3","pkg":"dsh-api-session-controller","deps":[{"to":"agents","c":"ambiguous"},{"to":"sessions","c":"ambiguous"},{"to":"sessionProjections","c":"ambiguous"},{"to":"sessionQuery","c":"ambiguous"},{"to":"llm","c":"ambiguous"},{"to":"agentDefaultModel","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"fileUploads","c":"ambiguous"},{"to":"remoteAccess","c":"ambiguous"},{"to":"attachments","c":"ambiguous"},{"to":"workspaceRegistry","c":"ambiguous"},{"to":"fileReferences","c":"ambiguous"},{"to":"workingDirectory","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"fileUpload","c":"ambiguous"},{"to":"fs","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[{"from":"schedule","c":"direct"},{"from":"cotTranslation","c":"direct"}],"m":[{"n":"resolveAgent","s":"resolveAgent(sessionId: SessionId): Promise<ApiSessionAgentResult>","z":"给另一个宿主 API 域解析或恢复一个普通会话，返回活的 agent，或一个稳定的会话域失败。","c":1},{"n":"inspect","s":"inspect(sessionId, signal?): Promise<SessionInspection>","z":"检视一个已挂载或已持久化的会话，但不激活它的 agent。想看一眼状态又不想惊动它，就用这个。","c":1},{"n":"list","s":"@Remote('list') async list(_request, signal): Promise<SessionListValue>","z":"读出所有可见的会话行，按活跃度排序，不恢复任何 agent。","c":1},{"n":"search","s":"@Remote('search') async search(request, signal): Promise<SessionSearchValue>","z":"搜可见的会话内容，不恢复 agent。非属主只会拿到会话准入允许返回的那些命中。","c":1},{"n":"create","s":"@Remote('create') create(request): Promise<SessionCreateValue>","z":"为新对话创建一个普通会话；如果有具名的空会话还处在可复用状态，就直接复用它。","c":1},{"n":"selectModel","s":"@Remote('selectModel') selectModel(request): Promise<SessionSelectModelValue>","z":"在显式恢复会话之后，为它选一个会话级模型；默认值在后台保存，不等它写完就返回。","c":1},{"n":"initializeDefaultModel","s":"@Remote async initializeDefaultModel(): Promise<void>","z":"登录之后、且没有配置任何提供方 API key 时，选中第一个可用的账号模型；已有默认值则保留不动。","c":1},{"n":"modelCatalog","s":"@Remote('modelCatalog') modelCatalog(): Promise<ModelCatalog>","z":"描述当前所有可路由的模型，按提供方分组，附上部署默认值和各提供方各自的失败信息。","c":1},{"n":"canOpenWorkspacePath","s":"@Remote canOpenWorkspacePath(): boolean","z":"报告这个部署能不能把会话的工作区路径交给本机桌面程序打开。","c":1},{"n":"workspaceDesktop","s":"workspaceDesktop(): { name, available, fileManager }","z":"描述承载服务的那个桌面：主机名、是否可用、以及平台对应的文件管理器行为（finder / explorer / directory / null）。","c":1},{"n":"openWorkspacePath","s":"@Remote('openWorkspacePath') async openWorkspacePath(request, signal)","z":"先通过组合好的文件系统校验路径，再在宿主桌面上把它打开。","c":1},{"n":"workspacePathApplications","s":"@Remote('workspacePathApplications') async workspacePathApplications(request, signal)","z":"查服务端桌面当前的文件处理器（应用名、图标、默认选择），不激活 agent；桌面打开不可用时返回空数组。","c":1},{"n":"rename","s":"@Remote('rename') rename(request): Promise<SessionRenameValue>","z":"显式恢复会话之后给它改名，返回被接受的标题和持久事件序号。","c":1},{"n":"fork","s":"@Remote('fork') async fork(request): Promise<SessionForkValue>","z":"把一个可冷读的精确事件前缀 fork 成新会话。不传边界就取最近一个已完成的边界。","c":1},{"n":"prompt","s":"@Remote('prompt') async prompt(request, signal)","z":"显式恢复会话之后，准入一条提示词。返回的是 agent 已接受，不是已完成。","c":1},{"n":"attachment","s":"@Remote('attachment') attachment(request)","z":"读一张图片，前提是它被证明能从被寻址的会话日志里到达——不是随便给个 id 就能取。","c":1},{"n":"updateQueue","s":"@Remote('updateQueue') updateQueue(request)","z":"修改一条仍在排队的队列项；如果 agent 已经冷了，先把它恢复起来再改。","c":1},{"n":"cancel","s":"@Remote('cancel') cancel(request): SessionCancelValue","z":"取消一个活 agent 的当前轮次，但不丢弃它待处理的收件箱——停了还能接着做。","c":1},{"n":"page","s":"@Remote({name:'page'}) page(request, signal): Promise<SessionPage>","z":"读一页冷安全的、按消息对齐的会话历史。分页边界永远落在整条消息上，不会半截。","c":1},{"n":"follow","s":"@Remote({mode:'stream'}) follow(request, signal)","z":"从开场或恢复游标开始跟随一条会话日志：先给完整快照，再给无缝的持久事件帧，可选无游标的助手流帧。","c":1},{"n":"projections","s":"@Remote('projections') async projections(request, signal)","z":"读精确的投影；只有在需要迁移时才返回缓存提示，没有就返回 null。","c":1},{"n":"control","s":"@Remote({mode:'stream'}) async *control(signal)","z":"流出一份完整的活控制基线，随后是持续的替换帧。这是 UI 实时联动的通道。","c":1}]},"sessionFeedback":{"zh":"宿主侧的 Remote，产品界面通过它记录一条会话级备注。注意是会话级，不是单条消息级——那个是 messageFeedback。","n":1,"ball":"host:L1","pkg":"dsh-command-feedback","deps":[{"to":"commands","c":"direct"},{"to":"sessions","c":"direct"}],"by":[],"m":[{"n":"record","s":"@Remote('record') record(request)","z":"在一条活会话上记一条备注；没有活会话带这个 id 时返回 session-not-found。","c":1}]},"sessionFileReferences":{"zh":"宿主侧 Remote 适配器，包在组合好的文件引用提供方外面——它自己不做发现，只把能力翻译成线上接口。","n":1,"ball":"host:L3","pkg":"dsh-api-session-controller","deps":[{"to":"agents","c":"ambiguous"},{"to":"sessions","c":"ambiguous"},{"to":"sessionProjections","c":"ambiguous"},{"to":"sessionQuery","c":"ambiguous"},{"to":"llm","c":"ambiguous"},{"to":"agentDefaultModel","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"fileUploads","c":"ambiguous"},{"to":"remoteAccess","c":"ambiguous"},{"to":"attachments","c":"ambiguous"},{"to":"workspaceRegistry","c":"ambiguous"},{"to":"fileReferences","c":"ambiguous"},{"to":"workingDirectory","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"fileUpload","c":"ambiguous"},{"to":"fs","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[],"m":[{"n":"list","s":"@Remote list(agent, query, signal)","z":"为某个 agent 的工作目录列出文件和目录候选，来自组合好的提供方，结果只含路径。","c":1}]},"sessionLogDownload":{"zh":"把会话历史导出成 ZIP。会话本身、它的子会话、附件都打进去，存哪由浏览器选。入口有两个：会话 header 的更多菜单，和 `/export` 命令。","n":3,"ball":"client:L7","pkg":"dsh-session-log-export","deps":[],"by":[],"m":[{"n":"dismiss","s":"dismiss(sessionId)","z":"Close one Session's dialog without cancelling an in-flight browser download.","c":0},{"n":"dispose","s":"dispose(): after every active operation settles.","z":"Abort active fetches and reach quiescence.","c":0},{"n":"download","s":"download(sessionId): after the browser save starts, an error state is published, ","z":"Download one Session tree; concurrent gestures for the same Session share one operation.","c":0}]},"sessionPersistence":{"zh":"持久化的只追加会话存储，按「每会话一个句柄」访问。所有后端共享同一套语义：事件从 seq 0 连续、永不重写；物理尾部若是撕裂的，绝不返回给读取方。","n":6,"ball":"host:L0","pkg":"dsh-session-persistence","deps":[],"by":[{"from":"messageFeedback","c":"direct"},{"from":"workspaceRegistry","c":"direct"},{"from":"agentLoop","c":"direct"},{"from":"agentTeams","c":"direct"},{"from":"schedule","c":"direct"},{"from":"sessionQuery","c":"direct"}],"m":[{"n":"identity","s":"readonly identity: symbol = Symbol('sessionPersistence')","z":"进程内的实例身份符号：穿过 Context 代理后仍然稳定，服务一旦被替换就会变。用它判断「还是不是同一个实例」。","c":1},{"n":"create","s":"abstract create(header, options?): Promise<SessionHandle>","z":"建一个新存储会话，并拿到它的写所有权；关闭句柄才释放所有权。","c":1},{"n":"open","s":"abstract open(id, access, options?): Promise<SessionHandle>","z":"打开一个已存在的存储会话。read 模式不拿所有权，别的句柄甚至别的进程正持有时也能读。","c":1},{"n":"flush","s":"abstract flush(): Promise<void>","z":"把本实例名下所有活跃写句柄放进同一道持久化屏障里一起刷，全部落定才 resolve。","c":1},{"n":"stat","s":"abstract stat(id, options?): Promise<SessionPersistenceSnapshot | undefined>","z":"观察一个存储会话，不读它的事件日志、也不拿所有权；不存在时返回 undefined。","c":1},{"n":"list","s":"abstract list(options?): Promise<readonly SessionPersistenceSnapshot[]>","z":"列出本进程可见的所有存储会话，不承诺顺序。","c":1}]},"sessionProjectionCache":{"zh":"持久化的投影缓存服务。初始化时打开 session_projcache 域，按节流写回（数量或间隔触发，参数在配置里）给活着的会话打检查点，另有三个强制点：会话创建、轮次结束、卸载。","n":10,"ball":"host:L2","pkg":"dsh-session-projection-cache","deps":[{"to":"sessionProjections","c":"direct"},{"to":"sessions","c":"direct"},{"to":"storageDomain","c":"direct"}],"by":[],"m":[{"n":"cachedSnapshot","s":"cachedSnapshot(meta, keys?)","z":"零 I/O 的列举读：直接从存储行里取整值，只取版本匹配的键。","c":1},{"n":"cachedPredecessorTitle","s":"cachedPredecessorTitle(meta)","z":"只读前驱检查点的标题，当作零 I/O 的列举提示。","c":1},{"n":"hydratePrepared","s":"hydratePrepared(session, events)","z":"给一个已经准备好的会话装配投影单元，不再多读一次持久层。","c":1},{"n":"write","s":"async write(session)","z":"立刻给一条活会话做持久检查点。所有强制打点最终都走这里。","c":1},{"n":"coldSnapshot","s":"coldSnapshot(meta, inheritedEventCount, events)","z":"从完整日志冷读一条会话的投影；每个单元用身份校验过的缓存做种子。","c":1},{"n":"flushSoft","s":"flushSoft(session, trigger)","z":"One fail-soft durable checkpoint.","c":0},{"n":"markClean","s":"markClean(session)","z":"Reset one session's dirty bookkeeping (its checkpoint is being written).","c":0},{"n":"put","s":"put(id, identity, rows)","z":"Replace one session's stored record with its log identity and a detached snapshot of `rows`.","c":0},{"n":"recordFor","s":"recordFor(id, expected): identity-matching record, or `undefined` (absent or unrelate","z":"The stored record for one session, accepted only when its bound log identity matches `expected`.","c":0},{"n":"viewRecord","s":"viewRecord(record, keys)","z":"View selected wire rows as one block bound to the lowest served watermark: the seq every served value has folded through at least.","c":0}]},"sessionProjections":{"zh":"投影单元表及其驱动。服务只订阅一次 session/event；每条已提交事件都会过一遍所有已注册单元的 apply（急切驱动）。只有状态引用变了才重算并通知。","n":16,"ball":"host:L0","pkg":"dsh-session-projection","deps":[],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"sessionTitle","c":"direct"},{"from":"goals","c":"direct"},{"from":"planMode","c":"direct"},{"from":"sessionProjectionCache","c":"direct"},{"from":"tokenMeter","c":"direct"},{"from":"permissionPresets","c":"direct"},{"from":"workingDirectory","c":"direct"},{"from":"agentLoop","c":"direct"},{"from":"agentPresets","c":"direct"},{"from":"agentTeams","c":"direct"},{"from":"llm","c":"direct"},{"from":"sandboxPolicy","c":"direct"},{"from":"subagentModelSelection","c":"direct"},{"from":"subagents","c":"direct"},{"from":"userQuestions","c":"direct"}],"m":[{"n":"register","s":"register(definition): () => void","z":"注册某个域的一个投影单元。注册是挂在调用方 fiber 上的 effect，fiber 销毁就自动注销。","c":1},{"n":"onChanged","s":"onChanged(listener): () => void","z":"订阅变更流。订阅同样是调用方 fiber 上的 effect，随 fiber 一起消失。","c":1},{"n":"stateOf","s":"stateOf(session, key)","z":"在把会话游标处所有已注册单元都物化之后，读其中一个单元的当前宿主状态。","c":1},{"n":"snapshot","s":"snapshot(session, keys?): ProjectionSnapshot","z":"对一条会话的所有已注册客户端可见单元做一次一致的切面，从水位缓存里读。","c":1},{"n":"cachedSnapshot","s":"cachedSnapshot(session, keys?): ProjectionSnapshot | undefined","z":"只读已经物化好的客户端可见单元，不折叠历史。值可能落后于活跃会话——这是用一致性换速度的那一档。","c":1},{"n":"checkpoint","s":"checkpoint(session): ProjectionCheckpoint","z":"为一条会话的所有已持久化单元生成状态级检查点，每个注册键一行。","c":1},{"n":"restoreFloor","s":"restoreFloor(checkpoint): SessionLogOffset | undefined","z":"算出一旦基于这个检查点做恢复，尾部读取该从哪个 seq 开始——比最低可用水位再低一个事件。","c":1},{"n":"viewCheckpoint","s":"viewCheckpoint(checkpoint, keys?): Partial<SessionProjectionMap>","z":"只看检查点里的行，完全不读日志；只返回版本号对得上的那些单元。","c":1},{"n":"restore","s":"restore(checkpoint, events, baseSeq, header, inheritedEventCount)","z":"冷读：在存储日志的尾巴上折叠所有已持久化单元，每条都用它的检查点行做种子。返回切面和刷新后的检查点。","c":1},{"n":"hydrate","s":"hydrate(session, checkpoint, events, baseSeq)","z":"恢复一个精确切面，并把状态装到给定的已准备会话上；后续发布会复用这些状态。","c":1},{"n":"advanceCell","s":"advanceCell(def, cell, session, throughSeq)","z":"Advance one existing cell through a contiguous Session prefix.","c":0},{"n":"buildCell","s":"buildCell(def, header, inheritedEventCount, events)","z":"Fold one unit from init over `events`, producing a cell watermarked at the last folded event.","c":0},{"n":"cellFor","s":"cellFor(registration, session)","z":"Read (or lazily build, folding the full in-memory log) one unit's cell.","c":0},{"n":"drive","s":"drive(session, event)","z":"Eager drive: pass one committed event through every unit; notify on changed raw view references.","c":0},{"n":"materializeCells","s":"materializeCells(session)","z":"Materialize every registered unit cell at the Session's current cursor.","c":0},{"n":"viewCell","s":"viewCell(registration, cell)","z":"Return one schema-validated wire value.","c":0}]},"sessionQuery":{"zh":"统一的会话查询服务，优先读活的、没有再读冷存储。精确读取、过滤、追踪是与后端无关的具体行为；后端只负责全文观察、对账、排序、游标世代和查询执行。","n":15,"ball":"host:L1","pkg":"dsh-session-query","deps":[{"to":"sessions","c":"direct"},{"to":"sessionPersistence","c":"direct"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"sessionReferenceResolver","c":"direct"}],"m":[{"n":"observeSession","s":"observeSession(sessionId, options?)","z":"观察一条精确的活会话或已准备会话，不做持久化列表的预检——省掉一次全量列举。","c":1},{"n":"searchSessions","s":"abstract searchSessions(request, exec?)","z":"在「活的优先」逻辑语料里搜索，按会话分组，每组按它最强的那条命中排序。","c":1},{"n":"searchEvents","s":"abstract searchEvents(request, exec?)","z":"在一条逻辑会话内部搜事件，结果统一来自同一个索引世代，不会串版本。","c":1},{"n":"listSessions","s":"listSessions(signal?)","z":"用活的优先的记录列出完整逻辑语料，最新在前，返回的是克隆。","c":1},{"n":"readSession","s":"async readSession(sessionId)","z":"读一条完整的逻辑会话日志并做回放校验，但不把它变成活的。","c":1},{"n":"filterSessions","s":"async filterSessions(filters, signal?)","z":"用与提供方无关的谓词过滤完整逻辑语料，结果按最新在前。","c":1},{"n":"readTitle","s":"async readTitle(sessionId, signal?)","z":"从一条活的优先逻辑会话里折叠出最新标题；日志里没有标题事件就返回 undefined。","c":1},{"n":"readTitleSnapshot","s":"async readTitleSnapshot(sessionId, signal?)","z":"折叠最新标题，同时把它的来源头信息一起返回，方便判断这个标题是哪来的。","c":1},{"n":"readTitleSnapshots","s":"async readTitleSnapshots(sessionIds, signal?)","z":"在一次可取消的语料观察里折叠多条会话的标题，每个 id 一个成功或失败结果，保留首次出现顺序。","c":1},{"n":"listEvents","s":"async listEvents(sessionId)","z":"列出一条逻辑会话的轻量原始日志事件记录，按 seq 升序。","c":1},{"n":"filterEvents","s":"async filterEvents(sessionId, filters)","z":"用与提供方无关的过滤器扫描第一方语义事件文档。","c":1},{"n":"readSurface","s":"async readSurface(sessionId)","z":"读一条会话当前完整的模型界面，连同原始日志捕获里包含的最后一个序号。","c":1},{"n":"traceSession","s":"async traceSession(sessionId, signal?)","z":"从一次语料观察里追踪已知的祖先与后代；中途解析不到父级就停在那一层，不假装知道。","c":1},{"n":"traceEvent","s":"async traceEvent(request, signal?)","z":"追踪一条事件的直接位置替换链，以及它引用的源事件。","c":1},{"n":"readEvent","s":"async readEvent(request, signal?)","z":"读一条完整事件，外加一段有边界的原始日志上下文。","c":1}]},"sessionReferenceResolver":{"zh":"精确读取的消费者，负责准备不可变的跨会话消息上下文——引用别的会话内容时，靠它取到那份只读快照。","n":5,"ball":"host:L2","pkg":"dsh-session-reference","deps":[{"to":"sessionQuery","c":"direct"}],"by":[],"m":[{"n":"listCandidates","s":"async listCandidates(agent, query?, limit?, signal?)","z":"列出引用候选，按工作目录亲和度排序。发现是按键盘速率跑的，所以标题计算必须便宜。","c":1},{"n":"remoteExportCandidates","s":"@Remote('candidates') async remoteExportCandidates(agent, query, signal)","z":"listCandidates 的 Remote 面，配置的候选上限生效，每个候选都带规范的提及标签。","c":1},{"n":"prepare","s":"async prepare(agent, content, references, signal?)","z":"为一条已接受的直接消息快照所有引用，返回一份聚合后的持久上下文。","c":1},{"n":"prepareDirectMessages","s":"prepareDirectMessages(agent, messages, signal): direct messages followed by their session-reference context ","z":"Replace canonical mentions in direct user messages and place each prepared snapshot immediately after the message that cited it.","c":0},{"n":"projectedLabels","s":"projectedLabels(items): each item with its title-backed mention label and subagent-l","z":"The mention label and display title each listed Session's projections can answer without reading its log.","c":0}]},"sessionSkillCatalog":{"zh":"宿主服务，给 ctx.remote.skills 撑住，而且不激活冷 agent——只是查目录，不该为此拉起一个 agent。","n":2,"ball":"host:L3","pkg":"dsh-api-session-controller","deps":[{"to":"agents","c":"ambiguous"},{"to":"sessions","c":"ambiguous"},{"to":"sessionProjections","c":"ambiguous"},{"to":"sessionQuery","c":"ambiguous"},{"to":"llm","c":"ambiguous"},{"to":"agentDefaultModel","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"fileUploads","c":"ambiguous"},{"to":"remoteAccess","c":"ambiguous"},{"to":"attachments","c":"ambiguous"},{"to":"workspaceRegistry","c":"ambiguous"},{"to":"fileReferences","c":"ambiguous"},{"to":"workingDirectory","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"fileUpload","c":"ambiguous"},{"to":"fs","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[],"m":[{"n":"list","s":"@Remote async list(request, signal)","z":"列出某个会话组合里用户可调用的技能元数据，不加载技能正文。","c":1},{"n":"scopeFor","s":"scopeFor(agentPreset)","z":"Resolve a live or standing preset scope without creating an Agent.","c":0}]},"sessionTelemetry":{"zh":"后端契约的可加载形态：一个上下文只能有一个实现（注册在 telemetry 键下，重复会抛，这是 cordis 的标准行为）。","n":4,"ball":"host:L0","pkg":"dsh-session-telemetry","deps":[{"to":"sessions","c":"direct"}],"by":[],"m":[{"n":"sharing","s":"abstract readonly sharing: SessionTelemetrySharingStatus","z":"部署选择的共享模式，与 SDK 投递无关。","c":1},{"n":"emit","s":"abstract emit(record): void","z":"发一条遥测记录。契约定义在 SessionTelemetrySink 上，这里只是服务面。","c":1},{"n":"flush","s":"flush?(): void","z":"可选方法，刷一次缓冲。","c":1},{"n":"shutdown","s":"abstract shutdown(): Promise<void>","z":"等后端的管道彻底静默之后才 resolve。","c":1}]},"sessionTitle":{"zh":"基于日志的标题折叠，外加异步兜底生成——标题优先从日志算，算不出来再异步生成一个。","n":23,"ball":"host:L1","pkg":"dsh-session-title","deps":[{"to":"sessions","c":"direct"},{"to":"sessionProjections","c":"direct"}],"by":[],"m":[{"n":"get","s":"get(session): SessionTitleSnapshot | undefined","z":"从活会话或重放会话里读最新折叠出来的标题；还没有够格输入时返回 undefined。","c":1},{"n":"rename","s":"rename(session, title): SessionTitleSnapshot","z":"接受用户显式给的标题，追加一条来源为 user 的 session/title 事件，这个标题从此钉住，不再被自动生成覆盖。","c":1},{"n":"refresh","s":"async refresh(session, signal?)","z":"显式重试已注册的提供方；没注册提供方就物化内置兜底标题。","c":1},{"n":"register","s":"register(provider): () => Promise<void>","z":"注册唯一的可选标题提供方。销毁会中止它挂起和进行中的工作，之后可以注册替代者。","c":1},{"n":"activate","s":"activate(pending, state, upstream)","z":"Create and publish an active provider call from one fixed revision.","c":0},{"n":"appendFallback","s":"appendFallback(session, first)","z":"Derive and append the deterministic fallback title over whatever stands (the refresh unpin path: overwriting a pinned user title is the point).","c":0},{"n":"assertCurrent","s":"assertCurrent(session, work)","z":"Fail a completion whose provider, revision, session, or signal is stale.","c":0},{"n":"assertServiceActive","s":"assertServiceActive()","z":"Reject work once the owning plugin fiber has begun unloading.","c":0},{"n":"defer","s":"defer(task)","z":"Queue detached service work and retain it through service disposal.","c":0},{"n":"drain","s":"drain(active)","z":"Await every current and settling promise in one lifecycle registry.","c":0},{"n":"ensureFallback","s":"ensureFallback(session)","z":"Create the first deterministic fallback if the session still lacks a title.","c":0},{"n":"onMainRequest","s":"onMainRequest(options)","z":"Start unchanged-route work from the marked loop request after its header fold is current.","c":0},{"n":"onRequestHeader","s":"onRequestHeader(session, event)","z":"Start pending automatic work only after its exact main-request route is logged.","c":0},{"n":"onUserMessage","s":"onUserMessage(session, event)","z":"Schedule fallback creation and any provider cadence for one eligible event.","c":0},{"n":"runProvider","s":"runProvider(session, work, route)","z":"Execute and accept one current provider revision.","c":0},{"n":"serviceActive","s":"serviceActive()","z":"Whether the owning plugin fiber can still start or commit title work.","c":0},{"n":"startPending","s":"startPending(session, state, pending, route)","z":"Consume one pending revision and schedule its non-blocking provider call.","c":0},{"n":"startProvider","s":"startProvider(session, work, route)","z":"Start one tracked provider call after publishing its active revision.","c":0},{"n":"stateFor","s":"stateFor(session)","z":"Return mutable work state for one session.","c":0},{"n":"supersede","s":"supersede(state, reason)","z":"Abort older active work and reserve the next session-local revision.","c":0},{"n":"track","s":"track(run, registration)","z":"Retain one promise until settlement for service and optional provider teardown.","c":0},{"n":"validateProvider","s":"validateProvider(provider)","z":"Reject malformed provider registrations before publishing an effect.","c":0},{"n":"validateResult","s":"validateResult(result, messages)","z":"Validate and normalize provider output against the supplied message snapshot.","c":0}]},"sessions":{"zh":"内存里的会话存储。持久化故意不在这里做——agent 生命周期会给每个已发布会话的写句柄挂一个日志写入器。所以脱离该生命周期发布的会话，是写不到盘上的。","n":28,"ball":"client:L3","pkg":"dsh-api-session-controller","deps":[{"to":"typert","c":"direct"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"sessionTitle","c":"direct"},{"from":"agentTeams","c":"direct"},{"from":"messageFeedback","c":"direct"},{"from":"schedule","c":"direct"},{"from":"sessionQuery","c":"direct"},{"from":"conversation","c":"ambiguous"},{"from":"permissionPresets","c":"direct"},{"from":"sessionFeedback","c":"direct"},{"from":"sessionProjectionCache","c":"direct"},{"from":"uiConversation","c":"ambiguous"},{"from":"uiSession","c":"direct"},{"from":"sessionTelemetry","c":"direct"},{"from":"agentLoop","c":"direct"},{"from":"commandUi","c":"direct"},{"from":"inputTriggers","c":"direct"},{"from":"modelDirectories","c":"direct"},{"from":"uiWorkspace","c":"direct"},{"from":"workspaceFiles","c":"direct"}],"m":[{"n":"registerMessageProjection","s":"registerMessageProjection(projection: SessionMessageProjection): () => Promise<void>","z":"注册一个事件解释器，覆盖实时创建、恢复和 fork 三种场景。销毁这个贡献后，会话就不再产出对应的投影。","c":1},{"n":"create","s":"create(id?, options?): Session","z":"创建一个归调用方 fiber 所有的会话，创建完就已经进 store 且公告过。fiber 销毁时会停止事件通知并移除会话。","c":1},{"n":"prepare","s":"prepare(id?, options?): Session","z":"构造一个会话但**不**放进 store。用于先校验 id 与 cwd、把对象准备好，之后再决定进不进。","c":1},{"n":"enter","s":"enter(session: Session): () => void","z":"把准备好的会话放进 store：装上模块私有的追加发布钩子，并加入活跃表。返回 detach 清理函数。","c":1},{"n":"announce","s":"announce(session: Session): void","z":"对一个已进入的会话发 session/created，且只发一次。与 enter 分开是为了让「进入」和「公告」可以分别控制。","c":1},{"n":"flush","s":"async flush(session: Session): Promise<boolean>","z":"对指定会话派发会被等待的 session/flush 持久化检查点。返回是否至少有一个持久化监听器参与。","c":1},{"n":"get","s":"get(id: SessionId): Session | undefined","z":"按 id 查活着的会话。","c":1},{"n":"list","s":"list(): Session[]","z":"所有活会话，按创建顺序。返回新数组。","c":1},{"n":"fork","s":"fork(source, boundary?, childSessionId?): Session","z":"从活会话的某个精确前缀创建子会话。boundary 是包含端点的源事件 seq。","c":1},{"n":"binding","s":"binding(id): live binding, or undefined without a retained generation.","z":"Borrow an already-retained binding without extending its lifetime.","c":0},{"n":"dropScope","s":"dropScope(record, disposeFiber, sessionDisposal)","z":"Await the already-withdrawn Session and scoped cleanup to quiescence.","c":0},{"n":"handleConnected","s":"handleConnected()","z":"Rebuild the Session baseline and every opened window after connection.","c":0},{"n":"handleControlFrame","s":"handleControlFrame(frame)","z":"Apply one Session Controller live-control frame.","c":0},{"n":"handleSessionActivity","s":"handleSessionActivity(...args)","z":"Apply one remotely forwarded list-activity change.","c":0},{"n":"handleSessionAdded","s":"handleSessionAdded(summary)","z":"Apply one remotely forwarded Session-list addition.","c":0},{"n":"handleSessionError","s":"handleSessionError(...args)","z":"Apply one remotely forwarded Agent failure.","c":0},{"n":"handleSessionRemoved","s":"handleSessionRemoved(sessionId)","z":"Apply one remotely forwarded Session removal.","c":0},{"n":"handleSessionStatus","s":"handleSessionStatus(...args)","z":"Apply one remotely forwarded running-state change.","c":0},{"n":"materializeScope","s":"materializeScope(id)","z":"Materialize one scope after its caller establishes that the id may be addressed.","c":0},{"n":"projectList","s":"projectList()","z":"Project the manager's list snapshot into the store (title derivation is display-only).","c":0},{"n":"refresh","s":"refresh(): completion of the current or newly started baseline pull.","z":"Refresh the real Session baseline, reusing an in-flight pull.","c":0},{"n":"refreshProjections","s":"refreshProjections(sessionId)","z":"Read projections without starting migration; retry failed or migration-deferred reads.","c":0},{"n":"retainAgentScope","s":"retainAgentScope(id): a Gateway-source reference owned by the invocation.","z":"Retain a validated Gateway identity synchronously, without history or catalog I/O.","c":0},{"n":"scope","s":"scope(id): scoped Context, or undefined without a retained generation.","z":"Borrow an already-retained Agent-scoped Context.","c":0},{"n":"scopeOf","s":"scopeOf(ctx): session id, or undefined on root contexts.","z":"Read the Agent scope tag off a context.","c":0},{"n":"search","s":"search(query, signal): bounded results or a business/transport error.","z":"Search the Host's visible message-content index.","c":0},{"n":"sessionOf","s":"sessionOf(ctx): matching live Session, or undefined for an untagged or ended","z":"Resolve the business Session behind an Agent-scoped context — the one hop every scoped consumer (event listeners, per-session controllers) takes from ctx-space into objec…","c":0},{"n":"subagentAddress","s":"subagentAddress(id): A retained, catalog-derived, or unknown-mode listed address,","z":"Resolve an already discovered direct-parent address without opening it.","c":0}]},"settings":{"zh":"把项目的配置 schema 投影成表单，并管可选的实例级 UI 策略——schema 是唯一真相，表单是它的一个视图。","n":9,"ball":"host:L2","pkg":"dsh-settings","deps":[],"by":[{"from":"agentPresets","c":"direct"},{"from":"configForms","c":"ambiguous"},{"from":"conversation","c":"ambiguous"},{"from":"cotTranslation","c":"direct"},{"from":"permissionPresets","c":"direct"},{"from":"productAnalytics","c":"direct"},{"from":"settingsSchema","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"configure","s":"configure(presentation, owner?)","z":"注册调用方插件实例的页面策略，但不改它的 Config——展示设置和运行配置是两件事。","c":1},{"n":"prepareDocument","s":"prepareDocument(): Promise<string>","z":"定位 profile 补丁文件，供原生编辑用。","c":1},{"n":"describe","s":"describe(options?): SettingsDescriptor[]","z":"读活跃插件的 schema 和它们的实时值。","c":1},{"n":"update","s":"async update(ns, patch, expectedRevision?)","z":"把可编辑字段合并进某个条目的配置。","c":1},{"n":"replace","s":"async replace(ns, section, expectedRevision?)","z":"先把所有实时字段重置，再设置给的那些字段；普通配置保留不动。","c":1},{"n":"mutate","s":"async mutate(ns, ops, expectedRevision?)","z":"按路径操作符改字段，不必重述被脱敏的秘密；对数组索引做 unset 会删掉那个元素。","c":1},{"n":"documentPath","s":"documentPath()","z":"Current profile patch shown by the native configuration editor.","c":0},{"n":"importLegacyDocument","s":"importLegacyDocument()","z":"Move the sections of the removed `settings.yaml` into the active profile once the Loader has settled every entry.","c":0},{"n":"writable","s":"writable()","z":"Whether the active profile accepts form edits.","c":0}]},"settingsController":{"zh":"宿主服务，给生成的 ctx.remote.settings 命名空间撑住。所有远程读都带 redactSecrets: true，标记为 secret 的字段根本上不了响应。","n":6,"ball":"host:L0","pkg":"dsh-api-settings-controller","deps":[],"by":[],"m":[{"n":"describe","s":"@Remote describe()","z":"为配置页描述每个命名空间：脱敏后的分层值、提供方可写性、本地文档是否存在，加上序列化后的 schema。","c":1},{"n":"update","s":"@Remote update(ns, patch, expectedRevision)","z":"把补丁合并进一个命名空间存储的用户区段。","c":1},{"n":"replace","s":"@Remote replace(ns, section, expectedRevision)","z":"整体替换一个命名空间的用户区段。","c":1},{"n":"mutate","s":"@Remote async mutate(ns, ops, expectedRevision)","z":"按路径修改一个命名空间的用户区段；解析基准是存储里的区段，不是合并后的视图。","c":1},{"n":"openSettingsDocument","s":"@Remote async openSettingsDocument(signal)","z":"把提供方拥有的设置文档物化出来，用本机文本编辑器打开。","c":1},{"n":"provider","s":"provider()","z":"Resolve the optional provider or report how to supply it.","c":0}]},"settingsSchema":{"zh":"设置的 schema 服务。功能包声明自己的偏好项归哪份 schema 管，读写时自动校验，还能一次原子更新多个字段、避免并发静默覆盖。它自己不渲染任何界面。","n":7,"ball":"client:L2","pkg":"dsh-client-ui-settings","deps":[{"to":"remote","c":"ambiguous"},{"to":"settings","c":"ambiguous"}],"by":[],"m":[{"n":"deletePath","s":"deletePath(root, path): copied root without the key, or `root` when the path is abse","z":"Immutably remove a nested key, preserving an unchanged missing root.","c":0},{"n":"getPath","s":"getPath(value, path): resolved value, or `undefined` when the path is absent.","z":"Read a nested value by a string-key or array-index path.","c":0},{"n":"hasPath","s":"hasPath(value, path): whether the path exists.","z":"Report whether the final path key exists independently of its value.","c":0},{"n":"nodeAtPath","s":"nodeAtPath(root, path): resolved node, or `undefined` when the path is absent.","z":"Resolve an object, dict, or array schema node at a settings path.","c":0},{"n":"rehydrate","s":"rehydrate(serialized): live schema node.","z":"Rehydrate one serialized `schema.toJSON()` envelope.","c":0},{"n":"setPath","s":"setPath(root, path, value): copied root containing the replacement.","z":"Immutably set a nested value, materializing missing containers.","c":0},{"n":"validate","s":"validate(schema, draft): validation failure text, or `undefined` when valid.","z":"Validate a settings draft.","c":0}]},"shell":{"zh":"抽象的 bash 执行服务。子类实现抽象方法后作为插件加载，注册成 ctx.shell；一个上下文只能有一个实现。需要子类实现。","n":3,"ball":"host:L0","pkg":"dsh-shell","deps":[],"by":[{"from":"permissionPresets","c":"direct"}],"m":[{"n":"resolve","s":"abstract resolve(request)","z":"在执行前把实现方自己的默认值和上限套到请求上，产出一份完整 spec。","c":1},{"n":"execute","s":"abstract execute(spec)","z":"在解析出的截止时间内准备并启动命令。准备阶段就超时的话，返回一个已结算、无输出的句柄。","c":1},{"n":"sandboxMode","s":"sandboxMode(): configured default sandbox mode, when supported.","z":"The sandbox mode this executor applies by default, or `undefined` when it does not sandbox commands.","c":0}]},"shellEnv":{"zh":"受信任的、按次执行的 DSH_* 环境变量注册表。每次模型调 shell 都会重建命名空间：先把环境里已有的 DSH_* 全部丢掉，再注入注册表的当前快照。","n":3,"ball":"host:L0","pkg":"dsh-shell-env","deps":[],"by":[],"m":[{"n":"register","s":"register(contributor): () => void","z":"注册一个环境贡献者。名字和键唯一，内置键保留；注册是确定性的。","c":1},{"n":"collect","s":"collect(execution)","z":"为一次 shell 工具执行构造受信任的 DSH_* 快照，返回不可变的环境覆盖层。","c":1},{"n":"list","s":"list()","z":"枚举插件贡献的变量，不执行它们的解析器——看一眼清单不该有副作用。","c":1}]},"shortcuts":{"zh":"键盘快捷键。桌面端和 Web 按输入设备选不同默认键位，自定义的在同设备重载后保留。命令随所属插件卸载而消失，但保存的覆盖还在，重装能接着用。","n":1,"ball":"client:L4","pkg":"dsh-client-shortcuts","deps":[{"to":"locale","c":"direct"}],"by":[{"from":"uiWorkspace","c":"direct"},{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"edit","s":"edit(...args): classified save outcome and accepted snapshot.","z":"Persist one reviewed operation while retaining accepted bindings on failure.","c":0}]},"sidebarRight":{"zh":"右侧栏的导航控制器。每个会话一个停靠面，两种呈现形态（贴边 / 展开），展开按钮放在会话 header 上。同时告诉每个已开 tab：它是怎么被导航过来的、能活多久。","n":10,"ball":"client:L7","pkg":"dsh-client-ui-sidebar-right","deps":[],"by":[],"m":[{"n":"active","s":"active()","z":"Every kind's registration in force, in registration order.","c":0},{"n":"candidates","s":"candidates(address): ranked types; empty when nothing recognizes the address.","z":"Every type that would open an address, best first.","c":0},{"n":"claim","s":"claim(address, kind): claiming type and the record to open.","z":"Decide which type opens an address, and as what.","c":0},{"n":"enter","s":"enter(kind, entry)","z":"Add a registration to its kind's slot, the higher band in force; `coexists` has already admitted it.","c":0},{"n":"entries","s":"entries(): reference-stable entries.","z":"Registered types in registration order.","c":0},{"n":"get","s":"get(kind): type, or `undefined` when nothing registered it.","z":"The type in force for a kind.","c":0},{"n":"guide","s":"guide(): reference-stable entries.","z":"Every type in force's guide entries, in `order`, each naming the kind it opens.","c":0},{"n":"leave","s":"leave(kind, slot, entry)","z":"Remove a registration from its kind's slot: a shadowed builtin resumes, and an emptied kind is freed.","c":0},{"n":"register","s":"register(definition): idempotent disposer.","z":"Register one tab type for the caller's lifetime.","c":0},{"n":"subscribe","s":"subscribe(listener): unsubscribe callback.","z":"Observe low-frequency registry changes.","c":0}]},"sidebarRightTabs":{"zh":"右侧栏的 tab 类型注册表。插件注册一种 tab（文档预览、终端、文件树…），右侧栏就认得它、能开它。","n":10,"ball":"client:L7","pkg":"dsh-client-ui-sidebar-right","deps":[],"by":[],"m":[{"n":"active","s":"active()","z":"Every kind's registration in force, in registration order.","c":0},{"n":"candidates","s":"candidates(address): ranked types; empty when nothing recognizes the address.","z":"Every type that would open an address, best first.","c":0},{"n":"claim","s":"claim(address, kind): claiming type and the record to open.","z":"Decide which type opens an address, and as what.","c":0},{"n":"enter","s":"enter(kind, entry)","z":"Add a registration to its kind's slot, the higher band in force; `coexists` has already admitted it.","c":0},{"n":"entries","s":"entries(): reference-stable entries.","z":"Registered types in registration order.","c":0},{"n":"get","s":"get(kind): type, or `undefined` when nothing registered it.","z":"The type in force for a kind.","c":0},{"n":"guide","s":"guide(): reference-stable entries.","z":"Every type in force's guide entries, in `order`, each naming the kind it opens.","c":0},{"n":"leave","s":"leave(kind, slot, entry)","z":"Remove a registration from its kind's slot: a shadowed builtin resumes, and an emptied kind is freed.","c":0},{"n":"register","s":"register(definition): idempotent disposer.","z":"Register one tab type for the caller's lifetime.","c":0},{"n":"subscribe","s":"subscribe(listener): unsubscribe callback.","z":"Observe low-frequency registry changes.","c":0}]},"skills":{"zh":"分层的技能提供方注册表，形态和 tools 注册表一致（宿主层 + 每作用域层）。注册会落到调用方所在作用域那一层：宿主和仓库插件进全局层，agent 作用域内的进它自己那层。","n":7,"ball":"host:L0","pkg":"dsh-skill","deps":[],"by":[],"m":[{"n":"registerProvider","s":"registerProvider(create): () => void","z":"在插件 apply 期间同步注册一个同进程的借用型提供方，落进调用方上下文的层。返回的清理函数要原样 yield，才能保持卸载顺序。","c":1},{"n":"register","s":"register(skill: SkillRegistration): () => void","z":"把一个借用的只读运行时技能注册进调用方上下文的层。项目条目优先于运行时条目。","c":1},{"n":"list","s":"async list(options?): Promise<SkillSummary[]>","z":"列出一个工作区的技能摘要，不涉及调用方式。模型调用还是用户调用，由消费方自己在这之后套策略。","c":1},{"n":"snapshot","s":"async snapshot(options?): Promise<SkillCatalogSnapshot>","z":"观察当前目录的一份一致快照，外加「发现是否已在稳定修订内完成」的状态。","c":1},{"n":"get","s":"async get(name, options?): Promise<SkillDefinition | undefined>","z":"加载并校验胜出的那个候选，把它不透明的发现定位符带回给提供方。","c":1},{"n":"invalidateEntry","s":"invalidateEntry(entry)","z":"Invalidate after a stale definition load, only while the exact registration that produced the entry is still live.","c":0},{"n":"notifyChange","s":"notifyChange()","z":"Notify catalog observers without making their refresh work load-bearing.","c":0}]},"slots":{"zh":"槽位系统的运行时。定义一个界面位置、往里注册内容、按顺序渲染。插件往 slot 里塞东西，外壳不用知道塞了什么——这是 UI 能松耦合扩展的关键。","n":22,"ball":"client:L0","pkg":"dsh-client-ui-renderer","deps":[],"by":[{"from":"timer","c":"direct"},{"from":"uiWorkspace","c":"direct"},{"from":"pluginRegistryProbe","c":"direct"},{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"},{"from":"cotTranslation","c":"direct"},{"from":"uiSession","c":"direct"},{"from":"remoteAccess","c":"direct"},{"from":"commandUi","c":"direct"},{"from":"inputTriggers","c":"direct"},{"from":"modelDirectories","c":"direct"}],"m":[{"n":"_acquire","s":"_acquire(handle, scope)","z":"Bind (or re-reference) a handle on the axis; cross-scope conflicts already threw in the core.","c":0},{"n":"_register","s":"_register(options, component)","z":"Delegating registration path: factory minting + registrant stamp + core write + instance-axis bookkeeping.","c":0},{"n":"_release","s":"_release(handle)","z":"Drop one reference; the last holder's unload drops the record (instances go with it — engine stores need no explicit dispose).","c":0},{"n":"bindStoreScope","s":"bindStoreScope(binding)","z":"Bind scoped Store instances to one Context generation.","c":0},{"n":"entries","s":"entries(key): registered entries.","z":"Snapshot entries for a key (render-erased view; stable reference between mutations).","c":0},{"n":"entriesOfSlot","s":"entriesOfSlot(key): winning entry per occupied cell.","z":"Shadowing winners per cell for a key: the first live (non-abdicated) entry of each cell in priority order — what outlets render; chain keys pass through unchanged (electi…","c":0},{"n":"getVersion","s":"getVersion(key): current version.","z":"Version counter for uSES pairing.","c":0},{"n":"hostFace","s":"hostFace()","z":"Build the domain-neutral host face once; installed adapters remain live through getters.","c":0},{"n":"inject","s":"inject(key, callback): idempotent disposer for the wait and active effect.","z":"Install an effect for each declaration lifetime of a slot.","c":0},{"n":"install","s":"install(renderer)","z":"Install the shell's renderer (ui-renderer's createSlotRenderer product).","c":0},{"n":"installLocale","s":"installLocale(face)","z":"Install the locale face backing the `t` standard seat (the locale plugin's product; same boot-once discipline as the renderer install).","c":0},{"n":"installScope","s":"installScope(scope, adapter)","z":"Install the owner adapter for one strict scope.","c":0},{"n":"onEntryError","s":"onEntryError(fn): unsubscribe.","z":"Observe ordinary entry and Factory occurrence crashes through one supervision channel.","c":0},{"n":"provideRoot","s":"provideRoot(contribution): disposer owned by the caller's Cordis fiber.","z":"Contribute domain-owned root data.","c":0},{"n":"publishScopeRevision","s":"publishScopeRevision()","z":"Publish one installed-scope roster transition after the map is authoritative.","c":0},{"n":"rebuildRootBinding","s":"rebuildRootBinding()","z":"Validate and atomically publish the current root contribution roster.","c":0},{"n":"releaseStoreScope","s":"releaseStoreScope(key)","z":"Drop every materialized non-root Store instance for one ended Context generation.","c":0},{"n":"renderSlot","s":"renderSlot(key, owner): rendered root tree.","z":"The single ctx-level render entry: the shell renders 'root'; every other key renders inside components through the props renderSlot face.","c":0},{"n":"resolveStore","s":"resolveStore(handle, scopeBinding)","z":"Resolve (create or reuse) the store instance for a registered handle under a scope key.","c":0},{"n":"snapshot","s":"snapshot(root): selected composition trees.","z":"Export the current JSON-safe Slot and Factory declaration trees for read-only inspection.","c":0},{"n":"spec","s":"spec(key): spec or undefined.","z":"Look up a declared spec (register-declared or the built-in 'root').","c":0},{"n":"subscribe","s":"subscribe(key, fn): unsubscribe.","z":"Subscribe to a key's registration changes (microtask-batched).","c":0}]},"speechController":{"zh":"语音调用的宿主 Remote 控制面。语音调用永远不会激活 agent，也不会提交给它——这是刻意的隔离。","n":6,"ball":"host:L1","pkg":"dsh-experimental-api-speech-to-text","deps":[{"to":"speechToText","c":"direct"},{"to":"typert","c":"direct"}],"by":[],"m":[{"n":"catalog","s":"@Remote catalog()","z":"读提供方选项、解析出的默认值和录音限制，不准备识别器。","c":1},{"n":"follow","s":"@Remote({mode:'stream'}) async *follow(signal)","z":"跟随提供方的就绪状态，与 Session 和准备的生命周期无关。","c":1},{"n":"configure","s":"@Remote configure(patch)","z":"持久化用户的识别偏好。","c":1},{"n":"prepare","s":"@Remote prepare(providerId, options?)","z":"启动或加入一个宿主拥有的准备任务。","c":1},{"n":"cancelPreparation","s":"@Remote cancelPreparation(providerId)","z":"显式取消资源准备。","c":1},{"n":"transcribe","s":"@Remote async transcribe(request, signal)","z":"按显式选定的提供方校验并转写一段录音，返回最终转写，不加会话事件。","c":1}]},"speechToText":{"zh":"一个宿主组合里所有转写消费者共享的注册表。","n":9,"ball":"host:L0","pkg":"dsh-experimental-speech-to-text","deps":[],"by":[{"from":"speechController","c":"direct"}],"m":[{"n":"register","s":"register(provider)","z":"注册一个识别器；id 重复会失败，且不会替换原有的。","c":1},{"n":"listProviders","s":"listProviders()","z":"按注册顺序读当前识别器名册。","c":1},{"n":"follow","s":"async *follow(caller)","z":"观察完整的就绪快照；读得慢的读者会把中间进度合并掉，只看到最新状态。","c":1},{"n":"snapshot","s":"snapshot()","z":"一次读数同时给出提供方就绪状态和当前用户偏好。","c":1},{"n":"configure","s":"async configure(patch)","z":"把改动的选择字段持久化进这个插件的 profile 条目；结果语言必须被接受。","c":1},{"n":"prepare","s":"prepare(id, options?)","z":"启动或加入提供方拥有的准备。","c":1},{"n":"cancelPreparation","s":"async cancelPreparation(id)","z":"显式取消提供方准备，不把它绑在浏览器连接上。","c":1},{"n":"resolve","s":"resolve(request)","z":"套用组合默认值并锁定选中的提供方。缺提供方或不支持的语言直接失败。","c":1},{"n":"transcribe","s":"async transcribe(spec, signal)","z":"只执行已解析出来的那个提供方，没有任何回退会把音频送到别处。","c":1}]},"spillStore":{"zh":"抽象的外溢存储服务：内容太大装不下时，溢出到别处存，只留一个定位符。子类实现 saveText 后作为插件加载，注册成 ctx.spillStore。需要子类实现。","n":1,"ball":"host:L0","pkg":"dsh-spill","deps":[],"by":[],"m":[{"n":"saveText","s":"abstract saveText(input)","z":"把 input.content 持久化成一个会话级的外溢产物；存储失败会 reject。","c":1}]},"storage":{"zh":"存储枢纽服务。后端注册在 backend 下；数据形态挂在各自的 StorageForms 键上，通过 ctx.storage.<form> 访问。这是「后端可换、形态可挂」的两层结构。","n":4,"ball":"host:L0","pkg":"dsh-storage","deps":[],"by":[],"m":[{"n":"backend","s":"readonly backend: BackendRegistry","z":"具名后端表，多个后端可以同时挂着互不干扰。","c":1},{"n":"mount","s":"mount(form, facility): () => void","z":"往枢纽上挂一个数据形态设施。挂载是 effect，返回的清理函数会卸载它。","c":1},{"n":"form","s":"form(form): StorageForms[K]","z":"解析出一个已挂载的数据形态。","c":1},{"n":"domain","s":"domain()","z":"Domain data form; present once the domain layer plugin is loaded.","c":0}]},"storageDomain":{"zh":"挂载好的领域设施。在路由过的后端之上打开声明的域；一个设施实例拥有已打开域的表，并强制同名域只能打开一次。","n":3,"ball":"host:L1","pkg":"dsh-storage-domain","deps":[],"by":[{"from":"schedule","c":"direct"},{"from":"workspaceRegistry","c":"direct"},{"from":"sessionProjectionCache","c":"direct"}],"m":[{"n":"open","s":"async open(spec): Promise<Domain<S>>","z":"打开一个声明的域。任何一步失败都会让整次调用失败，比如名字已经被打开（already-open）。","c":1},{"n":"get","s":"get(name): DomainImpl | undefined","z":"按名字查已打开的域，不带类型。这是诊断用的表面；带类型的消费方应该持有 open 返回的句柄。","c":1},{"n":"closeAll","s":"async closeAll(): Promise<void>","z":"关掉这个设施上所有还开着的域。给那些从没调过 Domain.close 的消费方兜底。","c":1}]},"subagentModelSelection":{"zh":"单例设置的所有者。给某个会话组装委派工具时读它，决定子 agent 用哪个模型——选择在这里，使用在组装时。","n":1,"ball":"host:L3","pkg":"dsh-tool-subagent","deps":[{"to":"subagents","c":"direct"},{"to":"sessionProjections","c":"direct"},{"to":"tools","c":"direct"},{"to":"systemPrompt","c":"direct"}],"by":[],"m":[{"n":"current","s":"current(): SubagentModelSelectionSettings","z":"读一份脱离的选择偏好，供下一次符合条件的会话组合使用：启用状态和确切允许的路由。","c":1}]},"subagents":{"zh":"有名字的提供方注册表，带受管激活、持久化发现和本地子任务通信。","n":20,"ball":"host:L2","pkg":"dsh-subagent","deps":[{"to":"agents","c":"direct"},{"to":"workingDirectory","c":"direct"},{"to":"sessionProjections","c":"direct"}],"by":[{"from":"agentTeams","c":"direct"},{"from":"subagentModelSelection","c":"direct"}],"m":[{"n":"resolveMaxDepth","s":"resolveMaxDepth(configured?): number | undefined","z":"按当前用户设置解析委派工具的深度策略。提供方自己管深度时返回 undefined。","c":1},{"n":"startActivation","s":"startActivation(spec): Promise<SubagentActivation>","z":"启动一个本地或外部子任务。只有本地子任务才会带回消息 id。","c":1},{"n":"waitForChildren","s":"async waitForChildren(parent): Promise<boolean>","z":"等待正在推进的后代收束，但不取消它们。那些收件箱还等着后续唤醒的空闲后代会继续留着。","c":1},{"n":"sendMessage","s":"async sendMessage(sender, targetId, content, options)","z":"把一条模型写的消息送给发送者的直接父级或直接可继续子级——只能上下各一级，不能跨级。","c":1},{"n":"interrupt","s":"interrupt(targetSessionId, authority)","z":"打断一个活子任务的当前执行。调用方必须是人父级地址，或一个精确的活祖先 agent。","c":1},{"n":"drainDescendants","s":"async drainDescendants(parents)","z":"关闭这些父级之下的子任务准入，同步停掉它们可见的后代，再等每个后代释放执行句柄。","c":1},{"n":"drainChildren","s":"async drainChildren(parent, childIds)","z":"释放指定父级名下选中的常驻直接子任务，同父的其它子任务不受影响。","c":1},{"n":"listChildren","s":"listChildren(parentSessionId, signal?)","z":"读父级的持久直接子任务目录，不加载也不恢复 agent。","c":1},{"n":"listDescendants","s":"listDescendants(rootSessionId, signal?)","z":"递归列出可达的父级目录，保持稳定的先序，每个目录内部保留自己的事件顺序。","c":1},{"n":"prompt","s":"@Remote('prompt') async prompt(request, signal)","z":"把浏览器写的一条消息，通过那个精确的活直接父级投递给可继续子任务。","c":1},{"n":"interruptByParent","s":"@Remote('interruptByParent') interruptByParent(childSessionId, parentSessionId, mode)","z":"interrupt 的 Remote 面，按持久父地址调用。返回的是「取消信号已被接受」，不是「目标已静默」——这两件事不能混。","c":1},{"n":"registerProvider","s":"registerProvider(provider): () => void","z":"按名字注册一个提供方。注册是 effect 作用域的、对 HMR 安全；移除提供方会挡住新的启动。","c":1},{"n":"getProvider","s":"getProvider(name): SubagentProvider | undefined","z":"按名字查提供方，不存在返回 undefined。","c":1},{"n":"list","s":"list(): string[]","z":"按插入顺序列出已注册的提供方名字。","c":1},{"n":"assertCapabilities","s":"assertCapabilities(provider, request)","z":"Reject the first requested capability that the provider lacks.","c":0},{"n":"deliverSubagentPrompt","s":"deliverSubagentPrompt(parent, childId, content, source, signal, delivery): accepted message's inbox id.","z":"Deliver one host-protocol message to a direct continuable child.","c":0},{"n":"expectProvider","s":"expectProvider(name)","z":"Look up a provider for dispatch or fail loud.","c":0},{"n":"observeActivation","s":"observeActivation(provider, childId, parent)","z":"Build the lifecycle observer for one continuable Activation's residency epoch, so the manager publishes its edges without owning event dispatch.","c":0},{"n":"prepareContinuable","s":"prepareContinuable(name, request)","z":"Resolve one provider's detached continuable-creation contribution.","c":0},{"n":"requireManager","s":"requireManager()","z":"Resolve the subagent manager or fail loud.","c":0}]},"subprocess":{"zh":"抽象子进程服务。子类实现 spawn 后作为插件加载，注册成 ctx.subprocess。需要子类实现。","n":4,"ball":"host:L0","pkg":"dsh-subprocess","deps":[],"by":[{"from":"worktrees","c":"direct"},{"from":"terminalController","c":"ambiguous"},{"from":"webTerminals","c":"ambiguous"}],"m":[{"n":"resolveExecutable","s":"abstract resolveExecutable(command, env?, signal?)","z":"在这个提供方的执行世界里解析一个可执行文件。绝对路径会校验存在性，裸名字会去查 PATH。","c":1},{"n":"terminalEnvironment","s":"abstract terminalEnvironment(signal?)","z":"查执行环境里的 shell 选择事实：平台和首选 shell。可执行文件查找与分配是分开的操作。","c":1},{"n":"spawn","s":"abstract spawn(spec)","z":"按完整给出的 spec 启动一个受管子进程。这个接缝不提供任何默认值，默认值由上层 shell 那一层负责。","c":1},{"n":"spawnTerminal","s":"abstract spawnTerminal(spec)","z":"分配一个真终端并启动一个自有进程会话。这是唯一的非管道进程原语。","c":1}]},"systemPrompt":{"zh":"每步模型调用之前那些提示词输入的注册表。它只收集和排序，真正的组装动作由 system-prompt/assemble 瀑布完成。","n":9,"ball":"host:L0","pkg":"dsh-system-prompt","deps":[],"by":[{"from":"tools","c":"direct"},{"from":"planMode","c":"direct"},{"from":"agentLoop","c":"direct"},{"from":"workingDirectory","c":"direct"},{"from":"approval","c":"direct"},{"from":"mcpResources","c":"direct"},{"from":"sandboxPolicy","c":"direct"},{"from":"subagentModelSelection","c":"direct"}],"m":[{"n":"section","s":"section(section: PromptSection): () => void","z":"在调用方作用域注册一个有顺序的提示词段落。作用域段落会遮蔽同名全局段落。","c":1},{"n":"getSectionOrder","s":"getSectionOrder(name): number","z":"取某个仓库段落被集中安排的位置（数值排序）。顺序由中心统一管，插件不能自己插队。","c":1},{"n":"getContextOrder","s":"getContextOrder(name): number","z":"取某个运行时上下文的排序位置。","c":1},{"n":"context","s":"context(context: PromptContext): () => void","z":"在调用方作用域注册有顺序的动态上下文。作用域条目遮蔽同名全局条目。","c":1},{"n":"suppressRuntimeContext","s":"suppressRuntimeContext(): () => void","z":"在调用方作用域压制那些可选的动态运行时上下文贡献，但不动段落本身。","c":1},{"n":"tools","s":"tools(provider): () => void","z":"注册一个工具 schema 提供方。全局的和匹配作用域的提供方都会参与组装。","c":1},{"n":"variable","s":"variable(name, provider): () => void","z":"注册一个提示词变量。作用域值遮蔽全局值；非法或重复的会抛。","c":1},{"n":"refreshContext","s":"refreshContext(assembly, context?): PromptAssembly","z":"用当前运行时上下文提供方的文本，刷新已接受的组装结果，供请求准入使用。","c":1},{"n":"assemble","s":"async assemble(context?): Promise<PromptAssembly>","z":"组装全局与作用域提供方、把工具参数拆出去、套上规范排序，再跑一遍组装瀑布。最终强制保留已注册的完整段落。","c":1}]},"terminalController":{"zh":"对临时的、会话拥有的终端进程做带类型的 Remote 控制。","n":8,"ball":"host:L2","pkg":"dsh-api-terminal-controller","deps":[{"to":"connection","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"sandboxPolicy","c":"ambiguous"},{"to":"subprocess","c":"ambiguous"},{"to":"typert","c":"ambiguous"},{"to":"workingDirectory","c":"ambiguous"}],"by":[],"m":[{"n":"environment","s":"@Remote environment(agent, signal)","z":"读会话当前目录和终端限制，不做文件系统校验也不查 shell。保留的终端仍用自己的进程目录。","c":1},{"n":"shells","s":"@Remote shells(agent, signal)","z":"在会话的执行环境里发现已安装的 shell，配置的或系统默认的排第一。","c":1},{"n":"list","s":"@Remote list(sessionId)","z":"列出这个宿主生命周期内保留的终端，不解析也不激活 agent。","c":1},{"n":"create","s":"@Remote async create(agent, request, signal)","z":"为调用方生成的身份分配一个用户 shell，只分配一次；不受 agent 沙箱和审批限制——因为它服务的是人，不是模型。","c":1},{"n":"retain","s":"@Remote({mode:'stream'}) retain(sessionId, id, signal)","z":"在一段时间内保持一个已存在的终端，不激活它的 agent，也不接管输入。","c":1},{"n":"attach","s":"@Remote({mode:'stream'}) attach(agent, id, signal)","z":"把终端输入输出接到一条物理 Remote 流上，返回屏幕恢复、输出、可写状态与提供方确认。","c":1},{"n":"rename","s":"@Remote rename(agent, id, title)","z":"重命名终端，不动它的 shell。","c":1},{"n":"close","s":"@Remote async close(agent, id)","z":"对后续创建关闭这个身份并杀掉它的进程范围；重复关闭也成功。清理失败会保留终端以便重试。","c":1}]},"terminals":{"zh":"进程内的终端注册表：可替换的 PTY 后端，加上按精确 agent 归属的会话。","n":9,"ball":"host:L0","pkg":"dsh-terminal","deps":[],"by":[],"m":[{"n":"registerBackend","s":"registerBackend(backend): () => void","z":"为这个 effect 作用域注册一种终端后端。","c":1},{"n":"listBackends","s":"listBackends(): string[]","z":"按注册顺序列出后端类型名。","c":1},{"n":"spawn","s":"async spawn(owner, request, signal?)","z":"后端准备成功之后，创建并发布一个归属某个 owner 的终端会话。","c":1},{"n":"hasOwnerActivity","s":"hasOwnerActivity(owner): boolean","z":"判断某个 owner 是否存在已发布或未发布的会话；从 spawn 到 close 全程为 true，中间没有发布空窗。","c":1},{"n":"startSend","s":"startSend(owner, id, request)","z":"发起一次独占的交互式发送，返回活的操作句柄，可用于前台等待或登记成任务。","c":1},{"n":"read","s":"read(owner, id, request?)","z":"从一个自有会话读一页有界回滚内容，带分页元数据。","c":1},{"n":"signal","s":"signal(owner, id, signal)","z":"通过自有后端会话投递一个被允许的信号，返回前台进程组的身份。","c":1},{"n":"kill","s":"async kill(owner, id, reason?)","z":"关闭一个自有会话，等后端清理静默之后才移除它。已经关过的返回 false，不会重复动手。","c":1},{"n":"list","s":"list(owner)","z":"只列某个 owner 的会话快照，按发布顺序。","c":1}]},"theme":{"zh":"主题、字号、字体。用户选 light / dark / system，每个浏览器各自存。插件按 prefers-color-scheme 解析 system 并发布不可变的 ThemeSnapshot，由 layout 应用到 document；还提供 `--dsw-*` token 样式表和同步引导，让配色在外壳加载前就生效。第三方主题可以注册别名 token 覆盖。","n":11,"ball":"client:L5","pkg":"dsh-client-ui-theme","deps":[],"by":[],"m":[{"n":"adjustFontSizes","s":"adjustFontSizes(delta)","z":"Step all font sizes within their own ranges and save changed fields in one mutation.","c":0},{"n":"adopt","s":"adopt()","z":"Adopt the scope's accepted durable preference without writing it back.","c":0},{"n":"composeActive","s":"composeActive(active)","z":"Fold the override layers into the active definition: seq order, later layers win per-token, each value picked for the active color scheme (the presenter consumes the comp…","c":0},{"n":"exportInspectTokens","s":"exportInspectTokens(): stable JSON-safe token descriptions, including registered an","z":"Export the current token directory without reading DOM or computed styles.","c":0},{"n":"getTheme","s":"getTheme(): current snapshot (stable reference until the next change).","z":"Read the current immutable theme snapshot.","c":0},{"n":"overrideTokens","s":"overrideTokens(source, tokens): disposer removing exactly the layer this call created; a no-","z":"Stack a token override layer on top of the active theme — the token-level analogue of slot shading: the base theme stays untouched, layers compose in seq order with later…","c":0},{"n":"register","s":"register(definition): disposer. Disposing the theme backing the active preference","z":"Register a theme.","c":0},{"n":"setFontFamily","s":"setFontFamily(role, value)","z":"Change one role's font list — the only font-family write entry.","c":0},{"n":"setFontSize","s":"setFontSize(role, px)","z":"Change one role's font size.","c":0},{"n":"setTheme","s":"setTheme(id)","z":"Switch the theme preference — the only user preference write entry.","c":0},{"n":"write","s":"write(operation)","z":"Queue one settings write, then adopt the durable section once no own write remains.","c":0}]},"timer":{"zh":"可随着上下文销毁的定时器助手，被混入 ctx 上（ctx.setTimeout / setInterval / throttle / debounce）。用的还是系统的定时器，只是注册时顺手登记了清理。","n":6,"ball":"host:L1","pkg":"cordis-plugin-timer","deps":[{"to":"slots","c":"direct"},{"to":"remote","c":"direct"},{"to":"loader","c":"direct"},{"to":"modules","c":"direct"}],"by":[{"from":"cordisInspect","c":"ambiguous"},{"from":"dynamicCordisRunner","c":"ambiguous"}],"m":[{"n":"timeout","s":"timeout(callback, delay): () => void","z":"跑一次回调，返回它的清理函数。","c":1},{"n":"interval","s":"interval(callback, delay): () => void","z":"重复跑回调，返回它的清理函数。","c":1},{"n":"throttle","s":"throttle(callback, delay, noTrailing?)","z":"返回一个节流函数，它的定时器随当前 fiber 一起销毁。","c":1},{"n":"debounce","s":"debounce(callback, delay)","z":"返回一个防抖函数，它的定时器随当前 fiber 一起销毁。","c":1},{"n":"setInterval","s":"setInterval(callback, delay)","z":"@deprecated use `ctx.interval()` instead","c":0},{"n":"setTimeout","s":"setTimeout(callback, delay)","z":"@deprecated use `ctx.timeout()` instead","c":0}]},"tokenMeter":{"zh":"一个服务级的估算器，加上按会话隔离的折叠；回放由它负责——历史 token 数不能重算，只能回放。","n":7,"ball":"host:L1","pkg":"dsh-token-meter","deps":[{"to":"sessionProjections","c":"direct"}],"by":[{"from":"toolResultPruner","c":"direct"}],"m":[{"n":"measure","s":"measure(session, requestHeader?)","z":"通过持久尾部测量当前请求压力和界面大小，返回脱离的、深度不可变的度量。","c":1},{"n":"estimateMessage","s":"estimateMessage(message): number","z":"按固定的服务级启发式估算一条模型可见消息的 token 数（内容加角色框定）。","c":1},{"n":"_estimateProviderAssistant","s":"_estimateProviderAssistant(event)","z":"Reassemble provider output from the message's exact embedded stream.","c":0},{"n":"_fileRequestText","s":"_fileRequestText()","z":"Resolve request-time file projection when an LLM service is mounted.","c":0},{"n":"_foldEvent","s":"_foldEvent(state, event)","z":"Run every fallible step — surface plan and anchor validation — before mutating replay state, so a malformed event remains unread on every retry instead of half-applying.","c":0},{"n":"_routeImagePricing","s":"_routeImagePricing(header)","z":"Resolve the routed model's image pricing, when the llm service and route declare one.","c":0},{"n":"_sync","s":"_sync(session)","z":"Catch one session's fold up to the current durable tail.","c":0}]},"toolResultPruner":{"zh":"对当前工具结果界面节点做确定性的头/中/尾裁剪。确定性是关键：同样的输入必须裁出同样的结果，否则回放对不上。","n":4,"ball":"host:L2","pkg":"dsh-compaction-tool-result-pruner","deps":[{"to":"tokenMeter","c":"direct"}],"by":[],"m":[{"n":"config","s":"readonly config: ResolvedConfig","z":"已解析且不可变的字符预算。","c":1},{"n":"measureContent","s":"measureContent(blocks): number","z":"按 Unicode 码点测量文本内容；非文本块算 0。","c":1},{"n":"pruneContent","s":"pruneContent(blocks)","z":"替换超预算文本的中间部分，同时保留富内容块的顺序；切片按码点而不是 UTF-16 单元。没超预算返回 null。","c":1},{"n":"pruneSession","s":"pruneSession(session)","z":"对一次稳定的当前界面快照里的所有超预算工具结果做裁剪，返回落地的替换和总共省下的码点数。","c":1}]},"tools":{"zh":"工具注册表和执行管线。作用域注册会遮蔽全局；只有一个可见性解析器，同时供给展示、查找和分发三处——三处用同一个解析器，才不会出现「看得到却调不了」。","n":36,"ball":"host:L1","pkg":"dsh-tools","deps":[{"to":"systemPrompt","c":"direct"}],"by":[{"from":"cordisInspect","c":"ambiguous"},{"from":"dynamicCordisRunner","c":"ambiguous"},{"from":"mcpResources","c":"direct"},{"from":"agentLoop","c":"direct"},{"from":"planMode","c":"direct"},{"from":"pluginManager","c":"direct"},{"from":"pluginMarket","c":"direct"},{"from":"subagentModelSelection","c":"direct"}],"m":[{"n":"presentAs","s":"presentAs(mode: ToolPresentationMode): () => void","z":"把调用方作用域里的工具按指定模式展示，而不是部署默认模式。链上最近的作用域说了算。返回的清理函数能精确还原成部署默认。","c":1},{"n":"register","s":"register(definition: ToolDefinition): () => void","z":"在全局或调用方 agent 作用域里注册一个工具。作用域内的遮蔽全局；同一层里重名、以及用了保留名，都会抛。返回的清理函数精确注销这一个工具。","c":1},{"n":"restrict","s":"restrict(filter: ToolRestriction): () => void","z":"对调用方 agent 作用域限制全局工具。空过滤器、未知名字、作用域本地名、保留名都算非法。返回清理函数解除这次限制。","c":1},{"n":"guard","s":"guard(guard: ToolGuard): () => void","z":"在可扩展的 tools/pre-execute 瀑布之后，再挂一道单调守卫——它只能收紧、不能放宽。普通上下文里注册的守卫全局生效。","c":1},{"n":"get","s":"get(name: string, scope?: ScopeKey): ToolDefinition | undefined","z":"按某个作用域的视角查一个工具。作用域内遮蔽全局；被限制掉的全局工具在这里读出来是「不存在」。展示、查找、分发三处共用这一个解析器。","c":1},{"n":"schemas","s":"schemas(scope?: ScopeKey): ToolSchema[]","z":"把可见的工具定义投影成模型能看到的那几个白名单字段（不含执行与展示细节），每条都是深拷贝，改它不影响原定义。","c":1},{"n":"executionMode","s":"executionMode(exec: ToolExecutionInput): ToolExecutionMode","z":"判定一次待执行调用该并行还是串行。只有精确定义为 true 才算并行；不确定的一律按失败关闭处理，不猜。","c":1},{"n":"execute","s":"async execute(exec: ToolExecutionInput): Promise<ToolExecutionResult>","z":"完整执行一次工具调用：事前策略 → 守卫 → 环绕分发 → 事后策略 → 由定义方定稿内容 → 返回。这是整条工具链的主干道。","c":1},{"n":"applyFinalContent","s":"applyFinalContent(exec, result)","z":"Apply the snapshotted tool-owned content transform without exposing other result fields.","c":0},{"n":"callerCancelled","s":"callerCancelled(exec)","z":"Whether the original caller signal is currently aborted.","c":0},{"n":"cancellationResult","s":"cancellationResult(exec, prior)","z":"Canonical cancellation outcome selected by whether the tool body started.","c":0},{"n":"collapses","s":"collapses(name, scope, nested)","z":"Whether the `ptc` mode collapse denies a model-direct call: only the reserved `run_code` transport may be named.","c":0},{"n":"collapseSection","s":"collapseSection(): section registration.","z":"The prompt statement of the `ptc` executor collapse, registered wherever {@link sdkSection} is and rendering empty outside an effective `ptc`.","c":0},{"n":"createSuccessResult","s":"createSuccessResult(exec, tool, candidate)","z":"Snapshot, validate, render, and optionally project one successful body value.","c":0},{"n":"dispatchScheduledExecution","s":"dispatchScheduledExecution(exec): whether the result still needs post-execute.","z":"Run around-dispatch and the tool body.","c":0},{"n":"dispatchToolBody","s":"dispatchToolBody(exec)","z":"Dispatch the registered body with the original caller signal fused back into any around-wrapper replacement.","c":0},{"n":"finalizeScheduledExecution","s":"finalizeScheduledExecution(exec, result): materialized final result.","z":"Run ordered post-execute, then apply definition-owned content finalization, materialize, and notify the final outcome.","c":0},{"n":"finishScheduledExecution","s":"finishScheduledExecution(exec, result): materialized final result.","z":"Materialize the candidate, apply definition-owned content finalization, then materialize and notify the authoritative result.","c":0},{"n":"guardReason","s":"guardReason(exec)","z":"First monotonic denial from the global then the scope chain's guard layers, farthest first.","c":0},{"n":"markCanonical","s":"markCanonical(exec, result)","z":"Mark one registry-normalized result as canonical only for its owning dispatch.","c":0},{"n":"materializeFinalResult","s":"materializeFinalResult(result)","z":"Materialize the authoritative commit outcome once, immediately before `tools/result`.","c":0},{"n":"modeFor","s":"modeFor(scope): resolved presentation mode.","z":"The presentation one scope's agent sees: its own declaration, else the deployment default.","c":0},{"n":"normalizeDispatchResult","s":"normalizeDispatchResult(exec, result)","z":"Normalize an around-dispatch wrapper's authored result through the owning output contract.","c":0},{"n":"notifyResult","s":"notifyResult(exec, result)","z":"Notify observers without exposing a mutation or error channel into the outcome.","c":0},{"n":"postExecute","s":"postExecute(exec, result)","z":"Run the `tools/post-execute` waterfall over a dispatched `result` and apply its {@link PostToolDecision}: `accept` keeps the call successful (replacing `content` when giv…","c":0},{"n":"prepareScheduledExecution","s":"prepareScheduledExecution(input): prepared execution plus the next scheduler stage.","z":"Run the ordered pre-execute and monotonic guard stages for the scheduler.","c":0},{"n":"requirePtcRuntime","s":"requirePtcRuntime(mode)","z":"Resolve the PTC runtime or throw the actionable misconfiguration error.","c":0},{"n":"requirePtcTransport","s":"requirePtcTransport(): shared transport definition.","z":"The reserved `run_code` transport, built on first need.","c":0},{"n":"resolveExecution","s":"resolveExecution(name, scope, nested): definition that may run, or undefined when the call must be ","z":"Resolve the definition that MAY EXECUTE for a call, applying the mode collapse at the operation boundary that owns it.","c":0},{"n":"schemaOf","s":"schemaOf(definition, detachParameters)","z":"Project one definition onto the model-facing schema fields.","c":0},{"n":"sdkSchemas","s":"sdkSchemas(scope)","z":"Project visible callable tools onto the generated PTC mode SDK contract.","c":0},{"n":"sdkSection","s":"sdkSection(): section registration.","z":"The generated-SDK prompt section, registered globally by a PTC mode deployment and per scope by {@link presentAs}.","c":0},{"n":"serviceAsk","s":"serviceAsk(exec, ask)","z":"Resolve an `ask` decision to allow/deny through the approval seam.","c":0},{"n":"shapeDispatchLog","s":"shapeDispatchLog(dispatch)","z":"Run the `tools/ptc-dispatch-log` waterfall over one settled sub-dispatch and return the content the bridge should log on `tool/ptc-dispatch`.","c":0},{"n":"view","s":"view(scope): complete derived view for that scope.","z":"Resolve every registry fact one scope needs in one layer traversal.","c":0},{"n":"wireSchemas","s":"wireSchemas(scope)","z":"Build one scope's wire schemas and names for prompt-order validation.","c":0}]},"translator":{"zh":"一个宿主服务，带显式路由、取消和静默卸载——卸载时要等到没有在途请求才算完。","n":4,"ball":"host:L0","pkg":"dsh-experimental-translator","deps":[],"by":[{"from":"cotTranslation","c":"direct"}],"m":[{"n":"availableProviders","s":"async availableProviders(signal?)","z":"检查可用的原生翻译路由，不做推理；已保存的翻译结果在路由不可用时仍然可读。","c":1},{"n":"resolve","s":"resolve(request): TranslationSpec","z":"不发送任何文本，只解析提供方和源语言的默认值。超过 maxTextChars 会抛 TRANSLATION_TEXT_LIMIT。","c":1},{"n":"translate","s":"async translate(spec, signal?)","z":"翻译一份已解析的规格，文本只发给选中的那个提供方。给会话时会先持久保留再返回；未缓存的会话必须活着，否则在派发前就以 TRANSLATION_SESSION_INACTIVE 拒绝。","c":1},{"n":"maxTextChars","s":"maxTextChars()","z":"Maximum UTF-16 code units accepted by one provider request.","c":0}]},"typert":{"zh":"生成 schema、包反射、调用与 Remote 依赖提供方的注册表。","n":12,"ball":"client:L0","pkg":"dsh-typert-registry","deps":[],"by":[{"from":"agents","c":"direct"},{"from":"cotTranslation","c":"direct"},{"from":"directoryPickerController","c":"ambiguous"},{"from":"jobController","c":"ambiguous"},{"from":"jobs","c":"ambiguous"},{"from":"remote","c":"ambiguous"},{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessions","c":"direct"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"speechController","c":"direct"},{"from":"terminalController","c":"ambiguous"},{"from":"typertGateway","c":"ambiguous"},{"from":"webTerminals","c":"ambiguous"},{"from":"workspaceController","c":"ambiguous"},{"from":"workspaceFiles","c":"direct"},{"from":"workspaces","c":"ambiguous"}],"m":[{"n":"register","s":"register(contribution): TypertDisposer","z":"为调用方 fiber 原子地注册一份生成贡献。包面身份重复、schema 冲突都会让整次失败。","c":1},{"n":"get","s":"get(key): TypertSchemaRecord | undefined","z":"按 `<package>#<name>` 查一份 schema；不存在返回 undefined。","c":1},{"n":"resolve","s":"resolve(key): TypertSchemaRecord","z":"解析一份必需 schema；不存在直接抛，不返回 undefined。","c":1},{"n":"list","s":"list(filter?): TypertSchemaRecord[]","z":"按注册顺序枚举现存的 schema。","c":1},{"n":"getPackage","s":"getPackage(packageName, face?)","z":"查某个包面的生成反射；face 默认是 host。","c":1},{"n":"listPackages","s":"listPackages(filter?)","z":"按注册顺序枚举生成的包反射。","c":1},{"n":"toJSONSchema","s":"toJSONSchema(key, params?)","z":"把一份活的 Zod schema 投影成 JSON Schema，不缓存结果——每次给新的文档。","c":1},{"n":"contexts","s":"contexts()","z":"Host and Client Context adapters.","c":0},{"n":"local","s":"local()","z":"Current-environment invocation definitions.","c":0},{"n":"lookups","s":"lookups()","z":"Host object lookup providers.","c":0},{"n":"remotes","s":"remotes()","z":"Consumer-selected Remote definitions.","c":0},{"n":"resources","s":"resources()","z":"Default wire fields of resource kinds.","c":0}]},"typertGateway":{"zh":"拿严格生成的类型定义或保守的 SRC 标记，去对当前的 cordis 服务和 Typert 提供方做解析。「严格」和「保守」是两种精度档位。","n":8,"ball":"host:L2","pkg":"dsh-api-gateway","deps":[{"to":"remoteAccess","c":"ambiguous"},{"to":"connection","c":"ambiguous"},{"to":"typert","c":"ambiguous"},{"to":"webServer","c":"ambiguous"}],"by":[],"m":[{"n":"wireStream","s":"readonly wireStream: TypertGatewayWireStream","z":"WebSocket mux 和本机宿主传输共享的载体适配器——换传输不改上层。","c":1},{"n":"hasLiveClient","s":"hasLiveClient(): boolean","z":"检查是否存在一个活跃的属主客户端事件流；只有这种流才能回答被转发的瀑布。","c":1},{"n":"registerRemoteEvents","s":"registerRemoteEvents(source, host)","z":"注册唯一的、应用选定的转发事件源；销毁会移除它并取消其活跃流。","c":1},{"n":"invoke","s":"async invoke(request)","z":"通过严格生成的反射或 SRC 标记调用一个活的 Remote 方法，返回未解码的业务结果。","c":1},{"n":"stream","s":"async stream(request)","z":"打开一个活的流式 Remote 方法，不假定具体物理载体；返回的迭代器感知取消。","c":1},{"n":"openStream","s":"openStream(request, control)","z":"`control` belongs to the logical stream: a rejected uplink item aborts it with the Remote failure as the reason so the carrier delivers that failure.","c":0},{"n":"prepareInvocation","s":"prepareInvocation(request, control)","z":"`control` fails the logical stream when an uplink item is rejected; unary calls hand over an inert one.","c":0},{"n":"resourceReaders","s":"resourceReaders(descriptor)","z":"The `resources` readers of a method, read from the root Service's class metadata so a Context method's receiver is not resolved before access is decided; `undefined` when…","c":0}]},"uiConversation":{"zh":"和渲染目标无关的对话装配。消费 Session Controller 的事件流，维护逐会话 binding、输入状态、视图注册表。**它不依赖 React**，所以同一套逻辑能喂给不同渲染层；还管每个会话的附件图片 URL 缓存，binding 释放就撤销授权。","n":6,"ball":"client:L8","pkg":"dsh-client-ui-conversation","deps":[{"to":"slots","c":"ambiguous"},{"to":"locale","c":"ambiguous"},{"to":"sessions","c":"ambiguous"},{"to":"configForms","c":"ambiguous"},{"to":"fileUpload","c":"ambiguous"},{"to":"uiSession","c":"ambiguous"},{"to":"commandUi","c":"ambiguous"},{"to":"conversation","c":"ambiguous"},{"to":"inputTriggers","c":"ambiguous"},{"to":"settings","c":"ambiguous"},{"to":"shortcuts","c":"ambiguous"},{"to":"uiWorkspace","c":"ambiguous"}],"by":[{"from":"conversation","c":"ambiguous"}],"m":[{"n":"binding","s":"binding(source): stable Conversation binding.","z":"Resolve the Conversation binding for one Controller binding or Session id.","c":0},{"n":"imageUrl","s":"imageUrl(sessionId, attachment): browser URL valid until the Session binding is released.","z":"Resolve one session-authorized durable image URL, cached per Session so every Conversation target shares one read and one browser URL.","c":0},{"n":"inspectRequestPrompt","s":"inspectRequestPrompt(previous, event, system): canonical prompt snapshot and any model-visible change.","z":"Canonicalize one `request/header` event against the previous prompt state and the `system/message` node in force.","c":0},{"n":"inspectSystemPrompt","s":"inspectSystemPrompt(previous, event): Immutable prompt interpretation at this event.","z":"Interpret a system message or surface replacement for target-owned prompt Definitions.","c":0},{"n":"peekImageUrl","s":"peekImageUrl(sessionId, attachment): current preview or canonical URL, if cached.","z":"Read a cached durable image URL synchronously when one is available.","c":0},{"n":"seedImageUrl","s":"seedImageUrl(sessionId, attachment, url): whether the cache took URL ownership.","z":"Adopt an already-displayable URL for one durable reference (see HistoricalImageCache.seed): the transcript node then renders it without a byte round-trip.","c":0}]},"uiRenderer":{"zh":"把整套浏览器界面挂上去的那一层。所有客户端插件就位后，内核调用 `ctx.uiRenderer.mount(container)`：先 hydrate 无框架的启动页，下一次绘制前切到完整 React 应用。业务插件仍是普通 React 组件，由它把运行时数据绑成 selector 钩子。","n":22,"ball":"client:L0","pkg":"dsh-client-ui-renderer","deps":[],"by":[],"m":[{"n":"_acquire","s":"_acquire(handle, scope)","z":"Bind (or re-reference) a handle on the axis; cross-scope conflicts already threw in the core.","c":0},{"n":"_register","s":"_register(options, component)","z":"Delegating registration path: factory minting + registrant stamp + core write + instance-axis bookkeeping.","c":0},{"n":"_release","s":"_release(handle)","z":"Drop one reference; the last holder's unload drops the record (instances go with it — engine stores need no explicit dispose).","c":0},{"n":"bindStoreScope","s":"bindStoreScope(binding)","z":"Bind scoped Store instances to one Context generation.","c":0},{"n":"entries","s":"entries(key): registered entries.","z":"Snapshot entries for a key (render-erased view; stable reference between mutations).","c":0},{"n":"entriesOfSlot","s":"entriesOfSlot(key): winning entry per occupied cell.","z":"Shadowing winners per cell for a key: the first live (non-abdicated) entry of each cell in priority order — what outlets render; chain keys pass through unchanged (electi…","c":0},{"n":"getVersion","s":"getVersion(key): current version.","z":"Version counter for uSES pairing.","c":0},{"n":"hostFace","s":"hostFace()","z":"Build the domain-neutral host face once; installed adapters remain live through getters.","c":0},{"n":"inject","s":"inject(key, callback): idempotent disposer for the wait and active effect.","z":"Install an effect for each declaration lifetime of a slot.","c":0},{"n":"install","s":"install(renderer)","z":"Install the shell's renderer (ui-renderer's createSlotRenderer product).","c":0},{"n":"installLocale","s":"installLocale(face)","z":"Install the locale face backing the `t` standard seat (the locale plugin's product; same boot-once discipline as the renderer install).","c":0},{"n":"installScope","s":"installScope(scope, adapter)","z":"Install the owner adapter for one strict scope.","c":0},{"n":"onEntryError","s":"onEntryError(fn): unsubscribe.","z":"Observe ordinary entry and Factory occurrence crashes through one supervision channel.","c":0},{"n":"provideRoot","s":"provideRoot(contribution): disposer owned by the caller's Cordis fiber.","z":"Contribute domain-owned root data.","c":0},{"n":"publishScopeRevision","s":"publishScopeRevision()","z":"Publish one installed-scope roster transition after the map is authoritative.","c":0},{"n":"rebuildRootBinding","s":"rebuildRootBinding()","z":"Validate and atomically publish the current root contribution roster.","c":0},{"n":"releaseStoreScope","s":"releaseStoreScope(key)","z":"Drop every materialized non-root Store instance for one ended Context generation.","c":0},{"n":"renderSlot","s":"renderSlot(key, owner): rendered root tree.","z":"The single ctx-level render entry: the shell renders 'root'; every other key renders inside components through the props renderSlot face.","c":0},{"n":"resolveStore","s":"resolveStore(handle, scopeBinding)","z":"Resolve (create or reuse) the store instance for a registered handle under a scope key.","c":0},{"n":"snapshot","s":"snapshot(root): selected composition trees.","z":"Export the current JSON-safe Slot and Factory declaration trees for read-only inspection.","c":0},{"n":"spec","s":"spec(key): spec or undefined.","z":"Look up a declared spec (register-declared or the built-in 'root').","c":0},{"n":"subscribe","s":"subscribe(key, fn): unsubscribe.","z":"Subscribe to a key's registration changes (microtask-batched).","c":0}]},"uiSession":{"zh":"给 Session Controller 的列表、交互状态、逐会话上下文做 React 与 Slot 适配。按 SessionBinding 物化钩子，SessionProvider 能继承外层 binding 或绑一个显式引用。运行状态来自 Host 的列表基线或状态事件，不自己猜。","n":3,"ball":"client:L4","pkg":"dsh-client-ui-session","deps":[{"to":"slots","c":"direct"},{"to":"remoteAccess","c":"direct"},{"to":"remote","c":"direct"},{"to":"sessions","c":"direct"}],"by":[{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"bindingSource","s":"bindingSource(reference): binding source, which falls back to the absent projection wh","z":"Resolve a stable renderer source for an owned Session reference or explicit absence.","c":0},{"n":"provide","s":"provide(descriptor): disposer owned by the caller's Cordis fiber.","z":"Register one Session-scoped standard-source contribution.","c":0},{"n":"registerPendingInteraction","s":"registerPendingInteraction(precedence): a function that publishes one interaction and its teardown d","z":"Register one pending-interaction domain and return its publication function.","c":0}]},"uiWorkspace":{"zh":"工作区浏览器和选择器。会话列表可分组也可扁平；能加、改名、重排、搜索、fork、归档、删除工作区。会话行菜单和悬停按钮是 slot，客户端插件可以往里加东西。没有目录选择器时，「添加工作区」不可用。","n":5,"ball":"client:L7","pkg":"dsh-client-ui-workspace","deps":[{"to":"slots","c":"direct"},{"to":"layout","c":"direct"},{"to":"locale","c":"direct"},{"to":"remoteAccess","c":"direct"},{"to":"shortcuts","c":"direct"},{"to":"remote","c":"direct"},{"to":"sessions","c":"direct"},{"to":"workspaces","c":"direct"}],"by":[{"from":"conversation","c":"ambiguous"},{"from":"uiConversation","c":"ambiguous"}],"m":[{"n":"clearArchivedCurrent","s":"clearArchivedCurrent(): true when an archived current selection was cleared.","z":"@returns true when an archived current selection was cleared.","c":0},{"n":"connectBlank","s":"connectBlank(workspaceId, reuse)","z":"@param reuse - preset for the reused or created blank.","c":0},{"n":"createInWorkspace","s":"createInWorkspace(workspace, options)","z":"Name the first reusable member blank; a requested preset also skips blanks listing another preset.","c":0},{"n":"createNamed","s":"createNamed(request)","z":"Create through the Host.","c":0},{"n":"restoreBlank","s":"restoreBlank(workspaceId, sessionId)","z":"Reopen a saved blank Session under the preset its log recorded, or under the Host default once that preset no longer activates.","c":0}]},"userQuestionPanels":{"zh":"ask_user_question 的界面。输入框旁弹出提问卡片，带倒计时；你聚焦时暂停，点了「慢慢回答」就一直等。关掉卡片只是隐藏面板，工具调用行还能再打开它。Host 重启后问题还在，浏览器刷新后没提交的输入也还在。","n":7,"ball":"client:L9","pkg":"dsh-client-ui-user-questions","deps":[],"by":[],"m":[{"n":"create","s":"create(pending)","z":"Publish one carrier into the composer seat and register the card that owns it.","c":0},{"n":"dispose","s":"dispose()","z":"Hand every live waterfall back at plugin teardown.","c":0},{"n":"ensure","s":"ensure(sessionId, questions, callId)","z":"Return the card of a tool call, creating and publishing it when absent.","c":0},{"n":"keysFor","s":"keysFor(sessionId)","z":"Keys of every card registered for one Session.","c":0},{"n":"reveal","s":"reveal(sessionId, callId): whether a card for that call is still answerable.","z":"Show the panel of one answerable tool call.","c":0},{"n":"review","s":"review(sessionId, callId, record): true; a record always produces a card.","z":"Show one settled tool call's recorded answers as a read-only card.","c":0},{"n":"source","s":"source(key)","z":"Observable state for one card while the registry owns it.","c":0}]},"userQuestions":{"zh":"校验，加上按作用域的应答者瀑布——问题先过校验，再按作用域交给应答者。","n":4,"ball":"host:L1","pkg":"dsh-user-questions","deps":[{"to":"sessionProjections","c":"direct"}],"by":[],"m":[{"n":"answer","s":"@Remote answer(agent, callId, answer): boolean","z":"回答一个等待中的问题。答复会作为用户消息被塞进 agent，来源标着这次调用 id；被接受的答复会排队，直到 agent 准入它。","c":1},{"n":"attachWait","s":"@Remote({mode:'stream'}) async *attachWait(agent, callId, signal)","z":"让一个答题界面挂住一次带时限的等待，流里给剩余毫秒。关掉流就释放它的占用。","c":1},{"n":"askTimed","s":"async askTimed(request, callId, timeoutMs)","z":"前台等待，第一次结算由客户端决定：客户端在时限内没认领，就以 ASK_TIMED_OUT 拒绝。","c":1},{"n":"ask","s":"async ask(request): Promise<AskUserQuestionAnswer>","z":"走作用域应答者瀑布，等用户给出答案。","c":1}]},"web":{"zh":"Web 访问服务。挑选语义在每次执行时解析，与注册顺序无关：配置了 id、且已注册、且 available() 的，就选它。","n":4,"ball":"host:L0","pkg":"dsh-web","deps":[],"by":[{"from":"cordisInspect","c":"ambiguous"},{"from":"dynamicCordisRunner","c":"ambiguous"}],"m":[{"n":"registerSearchProvider","s":"registerSearchProvider(provider): () => void","z":"注册一个搜索提供方。id 在搜索场景下已注册就抛 WEB_DUPLICATE_PROVIDER。","c":1},{"n":"registerFetchProvider","s":"registerFetchProvider(provider): () => void","z":"注册一个抓取提供方。id 在抓取场景下已注册就抛 WEB_DUPLICATE_PROVIDER。","c":1},{"n":"search","s":"async search(request, signal?)","z":"通过选中的提供方跑一次搜索，结果按 maxResults 截断。提供方在调用时刻才解析，不受注册顺序影响。","c":1},{"n":"fetch","s":"async fetch(request, signal?)","z":"通过选中的提供方取一个 URL。非 2xx 响应会以描述性结果 resolve，不抛——HTTP 错误是数据不是异常。","c":1}]},"webApp":{"zh":"这个进程对外服务的 Web GUI，由 web-runtime 那一行提供。只有一个方法，因为它是个描述符而不是控制器。","n":1,"ball":"host:L2","pkg":"dsh-web-app","deps":[],"by":[],"m":[{"n":"getAdvertisedUrl","s":"getAdvertisedUrl(): string","z":"这个 GUI 对外宣称的 URL，DSH_WEB_URL 和启动时打印的那行 URL 都用它。","c":1}]},"webServer":{"zh":"面向浏览器的 HTTP 承载服务。激活时先加载配置好的 TLS 材料，然后立刻监听；材料或监听失败会让初始化 reject，启动流程会报出失败的那个 fiber。路由注册顺序有意义。","n":12,"ball":"host:L0","pkg":"dsh-host-webserver","deps":[],"by":[{"from":"clientModules","c":"direct"},{"from":"connection","c":"direct"},{"from":"remote","c":"ambiguous"},{"from":"remoteAccess","c":"direct"},{"from":"typertGateway","c":"ambiguous"}],"m":[{"n":"getOrigin","s":"getOrigin(): string","z":"本地客户端访问这个监听器的根 URL，比如 http://127.0.0.1:3080。","c":1},{"n":"register","s":"register(route): () => void","z":"注册一条具名路由。同 (kind, path) 重复会抛——路由模式是组合层的契约，不能随便抢。","c":1},{"n":"registerUpgrade","s":"registerUpgrade(route): () => void","z":"注册一条精确路径的 HTTP upgrade 路由。路径重复会抛，因为一个 socket 只能有一种协议。","c":1},{"n":"registerFallback","s":"registerFallback(handler): () => void","z":"占住兜底座位：所有没被具名路由匹配的请求都由它答（生产环境里就是 SPA 的 dist 服务器）。","c":1},{"n":"tapIndex","s":"tapIndex(transform): () => void","z":"注册一个原始 HTML 索引变换，是结构化注入行表达不了的标记的逃生口。","c":1},{"n":"applyIndexTaps","s":"applyIndexTaps(html): string","z":"把 index.html 的 body 按注册顺序过一遍所有 tap。","c":1},{"n":"collectIndexInjections","s":"collectIndexInjections(): IndexInjection[]","z":"收集结构化注入表：发一次 webserver/index-inject，每个订阅方推出自己当前的行。","c":1},{"n":"renderIndex","s":"renderIndex(html): string","z":"渲染一次 index.html：先套结构化注入表，再套原始 tapIndex 变换。","c":1},{"n":"host","s":"host()","z":"The configured bind address (one concrete local interface).","c":0},{"n":"match","s":"match(pathname)","z":"Longest-prefix-wins over the prefix table after an exact-table miss.","c":0},{"n":"port","s":"port()","z":"The listening port (the OS-assigned value when config.port is 0), or `undefined` before `listen` binds.","c":0},{"n":"protocol","s":"protocol()","z":"The protocol the listener speaks: `'https:'` when `tls` is configured.","c":0}]},"webTerminals":{"zh":"Web 侧栏里的用户终端。在会话当前目录起执行环境的默认 shell，断线能重连回原进程，输出不进 agent 的对话上下文。保留终端会一直占着进程和一块有上限的屏幕缓存。","n":7,"ball":"client:L2","pkg":"dsh-api-terminal-controller","deps":[{"to":"connection","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"sandboxPolicy","c":"ambiguous"},{"to":"subprocess","c":"ambiguous"},{"to":"typert","c":"ambiguous"},{"to":"workingDirectory","c":"ambiguous"}],"by":[],"m":[{"n":"close","s":"close(sessionId, key, contentId, terminalId)","z":"Save a close intent and release the tab immediately; cleanup outlives DOM unmount and reload.","c":0},{"n":"launchShells","s":"launchShells(sessionId, signal): installed shells and the currently usable browser preference","z":"Discover available launch choices on demand without allocating a PTY.","c":0},{"n":"recover","s":"recover(sessionId, refresh=…): terminals available for opening as recovered tabs.","z":"Read shared Session discovery without a live view or unfinished close.","c":0},{"n":"retainTabs","s":"retainTabs(tabs)","z":"Reconcile this window's open terminal occurrences, including dormant saved Sessions.","c":0},{"n":"retryClose","s":"retryClose(id)","z":"Retry a saved close request without reopening its tab.","c":0},{"n":"selectShell","s":"selectShell(path)","z":"Remember the guide selection before allocating its terminal tab.","c":0},{"n":"view","s":"view(sessionId, key, contentId, terminalId, shellPath): its observable state and terminal commands.","z":"Return the stable model for one sidebar occurrence.","c":0}]},"workflowEngine":{"zh":"工作流服务定义的契约。非法请求在发布之前就抛；一次活的运行归持有者所有，它的 result 永远不会 reject；销毁时会等脚本和子任务清理完。生命周期监听器的失败会被兜住。","n":2,"ball":"host:L0","pkg":"dsh-workflow","deps":[],"by":[],"m":[{"n":"start","s":"abstract start(request)","z":"解析并执行一个工作流脚本，返回活的运行；脚本落定时它的 result 才 resolve。","c":1},{"n":"emitWorkflowEvent","s":"emitWorkflowEvent(name, ...args)","z":"Emit a lifecycle event while containing and logging each listener failure.","c":0}]},"workingDirectory":{"zh":"每个会话的有效工作目录、以及它对模型可见的变更，都只有这一个所有者。单一所有者是为了避免两个插件各自改目录导致状态分裂。","n":4,"ball":"host:L1","pkg":"dsh-working-directory","deps":[{"to":"fs","c":"direct"},{"to":"sessionProjections","c":"direct"},{"to":"systemPrompt","c":"direct"}],"by":[{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"},{"from":"subagents","c":"direct"},{"from":"worktrees","c":"direct"},{"from":"terminalController","c":"ambiguous"},{"from":"webTerminals","c":"ambiguous"}],"m":[{"n":"defaultDirectory","s":"readonly defaultDirectory: string","z":"对没记录原始目录的会话，用这个绝对路径兜底。","c":1},{"n":"get","s":"get(session): string","z":"读已提交的目录，不做文件系统 I/O。","c":1},{"n":"ensure","s":"ensure(agent, signal?)","z":"校验当前目录，原项目不见了就恢复它。恢复在返回之前就已提交；通知失败只告警，不撤销已提交的状态。","c":1},{"n":"set","s":"set(agent, path, signal?)","z":"改会话的目录，但不改已存在的进程和权限。","c":1}]},"workspaceChanges":{"zh":"提供记录器为活会话保存的摘要和文件比对结果。","n":14,"ball":"host:L1","pkg":"dsh-workspace-changes","deps":[],"by":[],"m":[{"n":"summary","s":"summary(sessionId, seq)","z":"某条 workspace/changes 事件公告过的摘要；会话销毁后、或本宿主从没记录过，返回 undefined。","c":1},{"n":"diff","s":"diff(sessionId, seq, index, signal)","z":"比较一个列出文件在轮次开始和结束时的内容。","c":1},{"n":"capture","s":"capture(path)","z":"Queue the capture of the path a file tool is about to mutate, before the tool runs; only the turn's first mutation of a path captures it.","c":0},{"n":"compared","s":"compared(paths, root, absolute, before, after)","z":"The listing of a captured pair: an oversized side lists the file without counts and refuses its comparison, a binary side likewise, and two text sides carry the counts of…","c":0},{"n":"dispose","s":"dispose(): once the temporary directory is gone.","z":"Abort queued work, forget every record, and remove the temporary directory.","c":0},{"n":"end","s":"end(turn)","z":"Record after `turn/end` unless a record was already attempted after the turn's last tool result.","c":0},{"n":"locate","s":"locate(cwd, signal)","z":"The repository enclosing the working directory, located once; null keeps retrying each turn.","c":0},{"n":"observe","s":"observe(event)","z":"Remember a settled tool result, so a record after `turn/end` covers it.","c":0},{"n":"readSide","s":"readSide(source, signal)","z":"One side's text, null for an absent file, or {@link OVERSIZED} for a snapshot side beyond the byte cap.","c":0},{"n":"scratchDir","s":"scratchDir()","z":"This Session's temporary directory, created on first use.","c":0},{"n":"settled","s":"settled()","z":"Resolves once every queued snapshot, capture, and record has settled.","c":0},{"n":"start","s":"start(turn)","z":"Open a turn with fresh per-turn state and queue its baseline snapshot.","c":0},{"n":"stopping","s":"stopping(turn): after the event is appended or the attempt failed.","z":"Record the turn's changes inside the turn, before `turn/end` commits.","c":0},{"n":"warnUnlessDisposed","s":"warnUnlessDisposed(error)","z":"A failure after disposal is expected cancellation and stays silent.","c":0}]},"workspaceController":{"zh":"宿主服务，给生成的 ctx.remote.workspace 命名空间撑住。11 个方法全是 Remote，没有一个本地逻辑方法。","n":11,"ball":"host:L3","pkg":"dsh-api-workspace-controller","deps":[{"to":"workspaceRegistry","c":"ambiguous"},{"to":"directoryPicker","c":"ambiguous"},{"to":"remote","c":"ambiguous"},{"to":"remoteAccess","c":"ambiguous"},{"to":"typert","c":"ambiguous"}],"by":[],"m":[{"n":"create","s":"@Remote('create') create(request)","z":"在一个已存在的目录上创建或幂等地解析一个工作区，同时告诉你这次是不是真的新建了。","c":1},{"n":"initializeDefault","s":"@Remote('initializeDefault') async initializeDefault(signal)","z":"首次使用时初始化或复用默认工作区。目录名是固定的，所以宿主不会重复问；不创建会话或消息。","c":1},{"n":"rename","s":"@Remote('rename') rename(request)","z":"把一个工作区改成一个唯一的非空标题。","c":1},{"n":"delete","s":"@Remote('delete') delete(request)","z":"删掉一个工作区注册，但保留文件和会话——删的是登记不是数据。","c":1},{"n":"insertBefore","s":"@Remote('insertBefore') insertBefore(request)","z":"在注册表显示顺序里移动一个工作区。","c":1},{"n":"insertSessionBefore","s":"@Remote('insertSessionBefore') insertSessionBefore(request)","z":"在一个工作区内部移动一条已归属的会话。","c":1},{"n":"archiveSession","s":"@Remote('archiveSession') archiveSession(request)","z":"把一个已知会话从工作区分组界面里隐藏。","c":1},{"n":"unarchiveSession","s":"@Remote('unarchiveSession') unarchiveSession(request)","z":"把一条已归档会话恢复到工作区分组界面。","c":1},{"n":"pinSession","s":"@Remote('pinSession') pinSession(request)","z":"把一条已知的未归档会话提到未钉住的会话之前。","c":1},{"n":"unpinSession","s":"@Remote('unpinSession') unpinSession(request)","z":"去掉一条会话的钉住，但不改它已保存的会话顺序。","c":1},{"n":"follow","s":"@Remote({mode:'stream'}) async *follow(signal)","z":"先流一份完整的工作区基线，之后按序推增量。非属主只会收到自己有权限的那些工作区。","c":1}]},"workspaceFiles":{"zh":"在组合好的文件系统之上，提供宿主侧的 Remote 文件读取和工作区目录观测。","n":11,"ball":"host:L2","pkg":"dsh-api-workspace-files","deps":[{"to":"fs","c":"direct"},{"to":"resources","c":"direct"},{"to":"remote","c":"direct"},{"to":"sandboxPolicy","c":"direct"},{"to":"sessions","c":"direct"},{"to":"typert","c":"direct"}],"by":[],"m":[{"n":"read","s":"@Remote async read(scope, path, range, signal)","z":"从文件系统后端可读的 UTF-8 文件里读一页行，返回页内容、读之前那次 stat 的版本、以及是否读到最后一行。","c":1},{"n":"readBytes","s":"@Remote async readBytes(scope, path, options, signal)","z":"读一个完整常规文件或一段字节区间，不做文本解码。","c":1},{"n":"stat","s":"@Remote async stat(scope, path, signal)","z":"报告一个常规文件的身份、版本、字节大小，不给内容。","c":1},{"n":"list","s":"@Remote async list(scope, path, signal)","z":"列出会话工作区内某个目录的直接子项，按后端稳定名字序，受条目上限约束。","c":1},{"n":"changes","s":"@Remote({mode:'stream'}) changes(scope, path, signal)","z":"观察会话文件系统里的一个文件或目录的直接子项。文件用后端的读授权，发现变化以流的形式推。","c":1},{"n":"confine","s":"confine(root, workspaceRoot, path, signal)","z":"Resolve an inspected path and refuse it unless the workspace contains it.","c":0},{"n":"cutPage","s":"cutPage(target, offset, limit, signal, path)","z":"Stream the file as text and cut the page, classifying the backend's non-text refusal.","c":0},{"n":"inspect","s":"inspect(workspaceFileScope, path, signal)","z":"Inspect the requested path itself before resolution follows its final component.","c":0},{"n":"locateFile","s":"locateFile(workspaceFileScope, path, signal)","z":"All gates for a regular file, ending in the one stat that names its version and size.","c":0},{"n":"resolvePage","s":"resolvePage(range)","z":"Apply the page defaults and caps here, so the request never carries them implicitly.","c":0},{"n":"resolveWindow","s":"resolveWindow(range, path)","z":"Apply the byte-window defaults and cap; a window above the cap is refused, not shortened.","c":0}]},"workspaceRegistry":{"zh":"持久化的工作区注册表。启动时等 sessionPersistence，建一个规范的 cwd 头索引，在服务激活之前完成一次性的历史引导。持久化依赖是强制的，不是可选的。","n":17,"ball":"host:L2","pkg":"dsh-workspace","deps":[{"to":"sessionPersistence","c":"direct"},{"to":"storageDomain","c":"direct"}],"by":[{"from":"directoryPickerController","c":"ambiguous"},{"from":"workspaceController","c":"ambiguous"},{"from":"workspaces","c":"ambiguous"},{"from":"sessionController","c":"ambiguous"},{"from":"sessionFileReferences","c":"ambiguous"},{"from":"sessionSkillCatalog","c":"ambiguous"}],"m":[{"n":"create","s":"async create(path, title?)","z":"为一个已存在的目录创建或复用一个工作区。全限定路径会先经 fs.resolve 规范化。","c":1},{"n":"initializeDefault","s":"initializeDefault(resolveDirectory)","z":"只在注册表和会话历史都为空时初始化默认工作区。重复请求不会重复创建。","c":1},{"n":"get","s":"get(id): Workspace | undefined","z":"按 id 查工作区。","c":1},{"n":"list","s":"list(): Workspace[]","z":"同步返回工作区投影，按持久顺序；每个实体的 sessionIds 已经过滤好。","c":1},{"n":"delete","s":"delete(id): Promise<boolean>","z":"删掉一条工作区注册，但保留它指向的目录和所有会话日志。持久顺序会保持连续。","c":1},{"n":"insertBefore","s":"insertBefore(id, beforeId?)","z":"在持久显示顺序里移动一个工作区，语义像 DOM 的 insertBefore；不传锚点就放末尾。","c":1},{"n":"archiveSession","s":"archiveSession(sessionId, options?)","z":"持久地归档一个会话。会话必须存在（活的或在持久层里）；带 stopActivity 时，等所有停止请求都发出才算完。","c":1},{"n":"unarchiveSession","s":"unarchiveSession(sessionId)","z":"持久地取消归档：把它从注册表级的归档集合里移除。","c":1},{"n":"pinSession","s":"pinSession(sessionId)","z":"持久地钉住一个会话，插到注册表级钉住集合的最前面。","c":1},{"n":"unpinSession","s":"unpinSession(sessionId)","z":"持久地取消钉住；这一步不做会话存在性检查。","c":1},{"n":"resolveByPath","s":"async resolveByPath(path)","z":"按规范目录路径解析出工作区，不创建也不修改任何东西。","c":1},{"n":"archivedSessionIds","s":"archivedSessionIds(): archived session ids in archive order.","z":"The registry-global archive set: sessions hidden from every grouping surface.","c":0},{"n":"listStoredHeaders","s":"listStoredHeaders()","z":"Every stored session's header, projected from the persistence snapshot listing.","c":0},{"n":"pinnedSessionIds","s":"pinnedSessionIds(): Session ids in pin order (most recently pinned first).","z":"The registry-global pin set: sessions surfaced ahead of every unpinned session on grouping surfaces.","c":0},{"n":"recoverPendingMutation","s":"recoverPendingMutation()","z":"Complete the one mutation explicitly named by durable state.","c":0},{"n":"sessionKnown","s":"sessionKnown(id)","z":"Whether a session is live, header-indexed, or present in a fresh persistence listing.","c":0},{"n":"stopSessionActivity","s":"stopSessionActivity(sessionId)","z":"Request every provider's stop; a failing provider is logged, never a reason to keep the session visible.","c":0}]},"worktrees":{"zh":"在挂载好的文件系统和沙箱提供方之下，创建保留的 Git 工作树。","n":1,"ball":"host:L2","pkg":"dsh-experimental-worktree","deps":[{"to":"fs","c":"direct"},{"to":"subprocess","c":"direct"},{"to":"workingDirectory","c":"direct"},{"to":"sandbox","c":"direct"},{"to":"sandboxPolicy","c":"direct"}],"by":[],"m":[{"n":"create","s":"async create(agent, request?, signal?)","z":"在一个钉住的本地修订上建新分支并检出，然后进入它。已存在的分支或检出路径会失败。","c":1}]}};
    const SPHERE_NAMES = {"host:L0":{"en":"Foundation","zh":"基础设施","why":"38 个服务：启动参数、凭证、文件读写、命令总线、HMR。整个 host 侧最先起来的一层，别的层都要它。"},"host:L1":{"en":"Kernel","zh":"内核服务","why":"23 个服务：agent 注册、审批、鉴权、沙箱策略、配置编辑、插件清单。管『谁能干什么』。"},"host:L2":{"en":"Capabilities","zh":"能力层","why":"18 个服务：LLM、MCP 资源、目标、计划模式、设置、子 agent、终端。模型和外界的接口都在这一层。"},"host:L3":{"en":"Agent Runtime","zh":"智能体运行时","why":"12 个服务：agentLoop、preset、权限预设、会话控制器、工作区控制器。一轮对话真正跑起来的地方。"},"host:L4":{"en":"Extensions","zh":"扩展插件","why":"只有 2 个：思维链翻译、定时调度。挂在运行时之上的可选增强。"},"client:L0":{"en":"Bridge","zh":"前端基座","why":"5 个服务：connection（WebSocket 两端）、modules、slots（槽位系统）、typert（类型通道）、uiRenderer。其余 8 层都建在它上面。"},"client:L1":{"en":"Transport","zh":"远程通道","why":"3 个服务：remote、remoteAccess、resources。host 和浏览器之间唯一的一组双向依赖就在这层。"},"client:L2":{"en":"Data Access","zh":"数据访问","why":"9 个服务：配置文件表单、设置 schema、工作区、任务、上传、产品统计。界面要拿数据，都从这里走。"},"client:L3":{"en":"Session & Locale","zh":"会话与语言","why":"2 个服务：locale（55 个包依赖它）、sessions。会话状态和界面语言。"},"client:L4":{"en":"Input","zh":"输入交互","why":"3 个服务：输入触发器、快捷键、uiSession。用户敲键盘点鼠标的第一站。"},"client:L5":{"en":"Theme & Tools","zh":"主题与工具","why":"3 个服务：commandUi（命令面板）、inspector（检查器）、theme。界面的皮肤和开发者工具。"},"client:L6":{"en":"Layout","zh":"布局","why":"3 个服务：feedbackUi、layout、modelDirectories。界面怎么分区、消息条怎么摆。"},"client:L7":{"en":"Navigation","zh":"导航","why":"5 个服务：pluginNavigation、sidebarRight、sidebarRightTabs、uiWorkspace、sessionLogDownload。左右栏和面板切换。"},"client:L8":{"en":"Conversation","zh":"对话界面","why":"3 个服务：conversation、uiConversation、documentPreviews。用户实际看到的那一屏。"}};

    const SPHERES = SCENE.spheres ?? [];
    const BONDS = SCENE.bundles ?? [];
    const BY_ID = Object.fromEntries(SPHERES.map((s) => [s.id, s]));

    // ══ 插件链：数据模型 + 持久化 ══════════════════════════
    // 存浏览器 localStorage。目录管理（落 $DSH_HOME/bureau/）要 Host 侧
    // 注册 command 通道，是独立的一刀，这里先保证链条能用。
    const STORE_KEY = 'kb-bureau:plans';

    const emptyPlan = () => ({
      schema: 'dsh-plugin-chain/2',
      name: '未命名配置',
      kernel: { cordis: '4.0.5', dsh: '0.2.1-rc.5' },
      nodes: [],   // { id, svc, method, ball }
      edges: [],   // { from, to, logic: 'a' | 'o' }
      seq: 0,
    });

    const loadStore = () => {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        if (!raw) return { activeId: null, plans: {} };
        const j = JSON.parse(raw);
        if (!j || typeof j !== 'object' || !j.plans) return { activeId: null, plans: {} };
        return { activeId: j.activeId ?? null, plans: j.plans };
      } catch {
        return { activeId: null, plans: {} };
      }
    };

    const saveStore = (s) => {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(s));
        return true;
      } catch (e) {
        console.error('[kb-bureau] 保存失败', e);
        return false;
      }
    };

    /** 有向图加边前查环：加上 from→to 会不会成环 */
    const wouldCycle = (edges, from, to) => {
      if (from === to) return true;
      const adj = new Map();
      for (const e of edges) {
        if (!adj.has(e.from)) adj.set(e.from, []);
        adj.get(e.from).push(e.to);
      }
      const stack = [to];
      const seen = new Set();
      while (stack.length) {
        const cur = stack.pop();
        if (cur === from) return true;
        if (seen.has(cur)) continue;
        seen.add(cur);
        for (const nx of adj.get(cur) ?? []) stack.push(nx);
      }
      return false;
    };

    // ── 布局：拓扑分层，层号 = 最长前置路径（原型 scene.html:1250-1274，原样）──
    const NW = 104, NH = 48, GX = 44, GY = 8;

    function layoutPlan(nodes, edges) {
      const level = new Map(nodes.map((n) => [n.id, 0]));
      const preds = new Map(nodes.map((n) => [n.id, []]));
      for (const e of edges) {
        const list = preds.get(e.to);
        if (list) list.push(e.from);
      }
      // 松弛到稳定（节点数不多，够用）
      for (let it = 0; it < nodes.length + 1; it++) {
        let changed = false;
        for (const n of nodes) {
          const ps = preds.get(n.id) ?? [];
          const lv = ps.length ? Math.max(...ps.map((p) => (level.get(p) ?? 0) + 1)) : 0;
          if (lv > (level.get(n.id) ?? 0)) { level.set(n.id, lv); changed = true; }
        }
        if (!changed) break;
      }
      const cols = [];
      for (const n of nodes) {
        const lv = level.get(n.id) ?? 0;
        (cols[lv] ?? (cols[lv] = [])).push(n);
      }
      return { cols, level };
    }

    /** 拓扑分层：同层 = 可并发（原型 v11 的布局方式） */
    const topoLayers = (nodes, edges) => layoutPlan(nodes, edges).cols;

    /**
     * 前后添加的自检（原型 scene.html:1631-1677，原样）。
     *
     * 光查「直接相邻」不够，光查「上游」也不够：
     *
     *     A ──A──> B ──A──> D
     *      └─A──> C            ← C 既不是 D 的前驱，也不是 D 的上游
     *
     * C 是 D 的「堂兄弟」——同一个祖先（A）的另一条出边。
     * 但用户要的就是「选中 D、前置添加 C → 连回那个 C」。
     *
     * 所以候选集合 = 祖先（或后代）本身 ∪ 它们的其他出边目标（兄弟）。
     * BFS 逐层扩，天然从近到远，命中就返回最近的那个。
     */
    function findUpstreamSame(nodes, edges, nodeId, dir, svc, method) {
      const nodeById = (id) => nodes.find((n) => n.id === id) || null;
      const match = (n) => n && n.svc === svc && (!method || !n.method || n.method === method);
      const preds = (id) => edges.filter((e) => e.to === id).map((e) => e.from);
      const succs = (id) => edges.filter((e) => e.from === id).map((e) => e.to);
      const fwd = dir === 'before' ? preds : succs;   // 找上游还是下游
      const sib = dir === 'before' ? succs : preds;   // 兄弟：反向的那一步

      const seen = new Set([nodeId]);
      let frontier = [nodeId];

      for (let depth = 0; depth < 12 && frontier.length; depth++) {
        const next = [];
        for (const id of frontier) {
          for (const x of fwd(id)) {
            if (seen.has(x)) continue;
            seen.add(x);
            const nx = nodeById(x);
            if (match(nx)) return nx;          // 祖先 / 后代命中
            next.push(x);

            // 兄弟：x 的另一侧邻居（同父的其它分支）
            for (const y of sib(x)) {
              if (y === id || seen.has(y)) continue;
              seen.add(y);
              const ny = nodeById(y);
              if (match(ny)) return ny;
            }
          }
        }
        frontier = next;
      }
      return null;
    }

    // ══ 生成方案（照抄原型 genDraft，scene.html:2101-2282）══
    const slugify = (t) => {
      const ascii = String(t || '').toLowerCase()
        .replace(/[^a-z0-9-]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
      return ascii || 'plugin-chain';
    };

    const methodOf = (svc, name) => {
      const rec = IFACE[svc];
      if (!rec || !name) return null;
      return (rec.m ?? []).find((x) => x.n === name) || null;
    };

    function genDraft(plan) {
      const N = plan.nodes;
      const E = plan.edges;
      const slug = slugify(plan.name);
      const KERNEL = plan.kernel || { cordis: '4.0.5', dsh: '0.2.1-rc.5' };
      const L = [];
      const push = (...xs) => { for (const x of xs) L.push(x); };
      const nm = (id) => N.find((n) => n.id === id) || { svc: '?', method: null };

      push('# 插件方案 · ' + (plan.name || '未命名配置'), '');
      push('> 这份是**方案**，不是代码。它给足事实（服务、方法签名、触发逻辑、官方形态），');
      push('> 然后由你（或 agent）来写实现。图里没有的信息，我不会编。', '');
      push('| 项 | 值 |');
      push('|---|---|');
      push('| 内核 | cordis ' + KERNEL.cordis + ' / dsh ' + KERNEL.dsh + ' |');
      push('| 规模 | ' + N.length + ' 个节点 / ' + E.length + ' 条触发边 |');
      push('| 生成时间 | ' + new Date().toISOString().slice(0, 19).replace('T', ' ') + ' |');
      push('');

      push('## 一、这个插件要做什么', '');
      push('> TODO（一句人话，20 字以内）。比如「监听会话创建，自动起一个定时提醒」。', '');
      push('这一步机器给不了。链条只说明「按什么顺序调什么」，说明不了「为什么」。', '');

      push('## 二、执行逻辑', '');
      push('```mermaid');
      push('graph LR');
      for (const n of N) {
        push('  ' + n.id + '["' + n.svc + (n.method ? '.' + n.method : '') + '"]');
      }
      for (const e of E) {
        push('  ' + e.from + ' -->|' + (e.logic === 'o' ? 'O 可选' : 'A 必要') + '| ' + e.to);
      }
      push('```', '');
      push('两条边不是同一类东西，这一点最容易被理解错：');
      push('');
      push('| 标记 | 它是什么 | 会不会阻塞 |');
      push('|---|---|---|');
      push('| **A 必要** | 触发条件 | 会。全部 A 都完成，目标节点才启动 |');
      push('| **O 可选** | 只是数据来源 | 不会。它先跑完就把结果存着，没跑完也不耽误 |');
      push('');
      push('所以「AO 同时存在」是正常状态，不是矛盾：');
      push('**重要信息走 A（必须等到），不重要但可能要用的走 O（有就带上）。**');
      push('');
      push('合并口径：');
      push('- 有 A 边 → 触发只看 A；O 的节点照常跑，结果缓存，触发时一起交给下游（可能为空）');
      push('- 只有 O 边、没有 A 边 → O 退化成触发，任一完成即启动（否则这个节点永远不会跑）');
      push('');

      push('### 逐条边', '');
      push('| 从 | 到 | 类型 | 落成什么 |');
      push('|---|---|---|---|');
      for (const e of E) {
        push('| `' + nm(e.from).svc + '` | `' + nm(e.to).svc + '` | ' + (e.logic === 'o' ? 'O 可选' : 'A 必要') + ' | ' +
          (e.logic === 'o'
            ? '跑起来就存：`runFrom_' + nm(e.from).svc + '().then(v => cached.' + nm(e.from).svc + ' = v)` —— **不 await**'
            : '必须等到：`const ' + nm(e.from).svc + 'Out = await runFrom_' + nm(e.from).svc + '()`') + ' |');
      }
      push('');

      push('## 三、节点清单', '');
      push('| # | 服务 | 方法 | 签名 | 所属层 | 白话 |');
      push('|---|---|---|---|---|---|');
      N.forEach((n, i) => {
        const m = methodOf(n.svc, n.method);
        const ball = n.ball ? SPHERE_NAMES?.[n.ball] : null;
        push('| ' + (i + 1) + ' | `' + n.svc + '` | ' + (n.method ? '`' + n.method + '`' : '—') +
          ' | ' + (m && m.s ? '`' + String(m.s).replace(/\|/g, '\\|').slice(0, 80) + '`' : '（无签名数据）') +
          ' | ' + (ball ? ball.en + ' ' + ball.zh : (n.ball || '—')) +
          ' | ' + (m && m.z ? String(m.z).replace(/\n/g, ' ').replace(/\|/g, '\\|').slice(0, 60) : '—') + ' |');
      });
      push('');

      push('## 四、触发规则（每个节点怎么被激活）', '');
      push('| 节点 | 何时触发 | 拿得到哪些数据 |');
      push('|---|---|---|');
      for (const n of N) {
        const ins = E.filter((e) => e.to === n.id);
        if (!ins.length) { push('| ' + n.svc + ' | 插件加载即执行（没有入边） | 只有 config |'); continue; }
        const ands = ins.filter((e) => e.logic === 'a').map((e) => nm(e.from).svc);
        const ors = ins.filter((e) => e.logic === 'o').map((e) => nm(e.from).svc);
        const when = ands.length
          ? '全部等到：' + ands.join(' + ')
          : '任一完成：' + ors.join(' / ') + '（没有 A 边，O 退化为触发）';
        const data = [];
        if (ands.length) data.push(ands.join(' + ') + ' 的返回值');
        if (ors.length) data.push(ors.join(' / ') + ' 的结果（可能为空）');
        push('| ' + n.svc + ' | ' + when + ' | ' + (data.join('，') || '—') + ' |');
      }
      push('');
      push('读法：**「何时触发」只看 A 列。O 边不影响启动时间，只决定下游能不能拿到那份数据。**', '');

      const svcSet = [...new Set(N.map((n) => n.svc))];
      push('## 五、要 inject 的服务', '');
      push('```js');
      push('export const inject = ' + JSON.stringify(svcSet) + ';');
      push('```', '');
      push('链条里出现的服务都在这。**少一个，cordis 不会报错，是不加载**——这个坑必须知道。', '');

      push('## 六、官方插件长什么样（照这个写）', '');
      push('以下两段是按 `@deepseek-ai/dsh-tool-fs` 等真实包的结构**精简**的示意，不是原文。', '');
      push('**① 纯函数插件（apply）** —— 大多数插件是这个形态：', '');
      push('```js');
      push("import z from '@deepseek-ai/schemastery';");
      push('');
      push("export const name = 'my-plugin';");
      push('export const inject = ' + JSON.stringify(svcSet) + ';');
      push('export const Config = z.object({');
      push('  // 使用者能调的参数放这里');
      push('});');
      push('');
      push('export function apply(ctx, config) {');
      push('  // 在这里注册工具 / 监听事件 / 挂槽位');
      push('  // 每个注册都要能撤销：ctx.effect(() => () => { /* 清理 */ })');
      push('}');
      push('```', '');
      push('**② 提供服务的插件（Service 子类）** —— 只在你要新增一个 `ctx.xxx` 时用：', '');
      push('```js');
      push("import { Service } from '@deepseek-ai/cordis';");
      push('');
      push('export default class MyService extends Service {');
      push('  static inject = ' + JSON.stringify(svcSet) + ';');
      push('  constructor(ctx) {');
      push("    super(ctx, 'myService');   // 名字就是 ctx.myService");
      push('  }');
      push('  doSomething() { /* ... */ }');
      push('}');
      push('```', '');

      push('## 七、必须由你决定的', '');
      push('这些机器推不出来，写代码前先答：', '');
      push('1. **参数从哪来**：每个节点的入参是配置项、上游返回值、还是外部事件带的？');
      push('2. **返回值怎么传**：A 型汇合时，下游要拿到上游的什么？');
      push('3. **A/O 怎么落成代码**（AO 混用是最常见的，下面是标准写法）：');
      push('   ```js');
      push('   // O：起来就存着，不等');
      push('   let cachedC = undefined;');
      push('   runC().then((v) => { cachedC = v; });');
      push('');
      push('   // A：必须等到');
      push('   const b = await runB();');
      push('');
      push('   // A 满足后才触发 D，C 有就用、没跑完就是 undefined');
      push('   runD(b, cachedC);');
      push('   ```');
      push('');
      push('4. **失败怎么办**：某一步抛错，整条链停还是跳过？');
      push('5. **清理**：注册的监听、开的连接，谁负责关。');
      push('');

      push('## 八、装到哪', '');
      push('```yaml');
      push('- id: ' + slug);
      push("  name: '你的作用域/" + slug + "'");
      push('  config: {}    # 注意：patch 是整行替换，不是合并');
      push('```', '');
      push('包结构：`package.json`（`type: module`）+ `lib/index.js`，依赖锁在 ' + KERNEL.dsh + '。', '');

      push('## 九、这份方案不确定的地方', '');
      push('- 每个服务所属的 npm 包是按依赖图反查的，个别服务有多个实现方，只取了第一个');
      push('- 方法签名来自编译产物，参数名可能被压缩');
      push('- **图里的先后 ≠ cordis 的加载顺序**。真实的加载顺序由 `inject` 决定，');
      push('  跟这张图无关。图描述的是你插件**内部**的调用顺序，不是框架层的东西。');
      push('');

      return L.join('\n');
    }

    // ══ 样式 ═══════════════════════════════════════════════
    const CSS = `
.kb-root{display:flex;flex-direction:column;height:100%;min-height:0;
  background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);
  font-family:-apple-system,"Segoe UI",system-ui,sans-serif}
.kb-top{display:flex;align-items:center;gap:10px;padding:10px 16px;
  border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}
.kb-top .kb-title{font-size:14px;font-weight:500;white-space:nowrap}
.kb-top .kb-sub{font-size:11px;color:var(--dsw-alias-label-secondary);white-space:nowrap}
.kb-q{flex:1;max-width:280px;margin-left:8px}
.kb-q input{width:100%;box-sizing:border-box;padding:5px 9px;font-size:12px;
  border:1px solid var(--dsw-alias-border-l1);border-radius:6px;
  background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);outline:none}
.kb-q input:focus{border-color:var(--dsw-alias-brand-primary)}
.kb-top .kb-close{margin-left:auto;border:1px solid var(--dsw-alias-border-l1);
  background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);
  border-radius:6px;padding:4px 10px;font-size:12px;cursor:pointer;white-space:nowrap}
.kb-top .kb-close:hover{background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary)}
.kb-body{flex:1;min-height:0;display:flex;overflow:hidden}
.kb-stage{flex:1;min-width:0;position:relative}
.kb-stage canvas{display:block;cursor:grab}
.kb-stage canvas.drag{cursor:grabbing}
.kb-crumb{position:absolute;left:12px;top:10px;display:flex;gap:6px;align-items:center;
  font-size:11px;color:var(--dsw-alias-label-secondary);pointer-events:none}
.kb-crumb .sep{opacity:.45}
.kb-crumb b{font-weight:500;color:var(--dsw-alias-label-primary)}
.kb-panel{width:320px;flex:none;border-left:1px solid var(--dsw-alias-border-l1);
  overflow-y:auto;padding:12px 14px;font-size:12px;
  background:var(--dsw-alias-bg-layer-1)}
.kb-panel .kb-h{font-size:11px;color:var(--dsw-alias-label-secondary);
  letter-spacing:.4px;margin:14px 0 6px;text-transform:uppercase}
.kb-panel .kb-h:first-child{margin-top:0}
.kb-panel .kb-row{display:flex;justify-content:space-between;gap:8px;padding:3px 0;
  border-bottom:1px dotted var(--dsw-alias-border-l1)}
.kb-panel .kb-row .n{color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}
.kb-panel .kb-svc{padding:4px 0;border-bottom:1px dotted var(--dsw-alias-border-l1);cursor:pointer}
.kb-panel .kb-svc:hover{background:var(--dsw-alias-interactive-bg-hover)}
.kb-panel .kb-svc .nm{font-family:"Times New Roman","SimSun",serif}
.kb-panel .kb-svc .sg{font-size:10.5px;color:var(--dsw-alias-label-secondary);
  word-break:break-all;margin-top:1px}
.kb-chip{display:inline-block;padding:1px 7px;margin:2px 4px 2px 0;border-radius:4px;
  border:1px solid var(--dsw-alias-border-l1);font-size:11px;cursor:pointer;
  font-family:"Times New Roman","SimSun",serif}
.kb-chip:hover{background:var(--dsw-alias-interactive-bg-hover)}
.kb-muted{color:var(--dsw-alias-label-secondary)}
.kb-foot{flex:none;padding:7px 16px;border-top:1px solid var(--dsw-alias-border-l1);
  font-size:11px;color:var(--dsw-alias-label-secondary)}
/* ── Tab 切换 ── */
.kb-tabs{display:flex;gap:4px;margin-left:10px;flex:none}
.kb-tab{border:1px solid var(--dsw-alias-border-l1);background:transparent;
  color:var(--dsw-alias-label-secondary);border-radius:6px;padding:3px 10px;
  font-size:12px;cursor:pointer}
.kb-tab:hover{background:var(--dsw-alias-interactive-bg-hover)}
.kb-tab.on{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);
  border-color:var(--dsw-alias-border-l2)}
/* ── 链条视图 ── */
.kb-chain{flex:1;min-height:0;overflow:auto;padding:14px 18px}
.kb-chain .kb-emptychain{color:var(--dsw-alias-label-secondary);font-size:12px;
  line-height:1.9;padding:24px 0}
.kb-ctl{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:14px}
.kb-ctl input[type=text]{flex:1;min-width:120px;max-width:240px;box-sizing:border-box;
  padding:5px 9px;font-size:12px;border:1px solid var(--dsw-alias-border-l1);
  border-radius:6px;background:var(--dsw-alias-bg-layer-1);
  color:var(--dsw-alias-label-primary);outline:none}
.kb-btn{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);
  color:var(--dsw-alias-label-primary);border-radius:6px;padding:4px 10px;
  font-size:12px;cursor:pointer;white-space:nowrap}
.kb-btn:hover{background:var(--dsw-alias-interactive-bg-hover)}
.kb-btn.primary{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary)}
.kb-btn:disabled{opacity:.45;cursor:not-allowed}
.kb-layer{display:flex;gap:14px;align-items:flex-start;margin-bottom:8px}
.kb-layertag{flex:none;width:44px;font-size:10px;color:var(--dsw-alias-label-secondary);
  padding-top:12px;text-align:right;font-variant-numeric:tabular-nums}
.kb-cells{display:flex;gap:10px;flex-wrap:wrap;flex:1}
.kb-node{min-width:150px;max-width:230px;border:1px solid var(--dsw-alias-border-l1);
  border-radius:8px;padding:8px 10px;background:var(--dsw-alias-bg-layer-1);cursor:pointer;
  position:relative}
.kb-node:hover{border-color:var(--dsw-alias-border-l2)}
.kb-node.on{border-color:var(--dsw-alias-brand-primary);
  box-shadow:0 0 0 1px var(--dsw-alias-brand-primary) inset}
.kb-node .nm{font-family:"Times New Roman","SimSun",serif;font-size:13px}
.kb-node .sg{font-size:10.5px;color:var(--dsw-alias-label-secondary);margin-top:2px;
  word-break:break-all}
.kb-node .ball{font-size:10px;color:var(--dsw-alias-label-secondary);margin-top:3px}
.kb-node .rm{position:absolute;right:5px;top:4px;font-size:14px;line-height:1;
  color:var(--dsw-alias-label-secondary);padding:2px 4px;border-radius:4px;cursor:pointer}
.kb-node .rm:hover{color:var(--dsw-alias-state-error-primary);
  background:var(--dsw-alias-interactive-bg-hover)}
.kb-edges{margin-top:16px;border-top:1px solid var(--dsw-alias-border-l1);padding-top:12px}
.kb-edge{display:flex;align-items:center;gap:8px;padding:3px 0;font-size:12px}
.kb-edge .lg{border:1px solid var(--dsw-alias-border-l1);border-radius:4px;
  padding:0 6px;font-size:11px;cursor:pointer;font-weight:500}
.kb-edge .lg.a{color:#7fd0e0;border-color:#2f6b78}
.kb-edge .lg.o{color:#e0965a;border-color:#6b4a12}
.kb-edge .rm{cursor:pointer;color:var(--dsw-alias-label-secondary)}
.kb-edge .rm:hover{color:var(--dsw-alias-state-error-primary)}
/* ── 方案弹窗 ── */
.kb-modal{position:absolute;inset:0;background:rgba(6,8,10,.82);z-index:30;
  display:flex;align-items:center;justify-content:center;backdrop-filter:blur(3px)}
.kb-modalbox{width:min(880px,90vw);max-height:84vh;display:flex;flex-direction:column;
  background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);
  border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
.kb-modalhd{display:flex;align-items:center;gap:10px;padding:12px 16px;
  border-bottom:1px solid var(--dsw-alias-border-l1);font-size:13px}
.kb-modalhd .sp{margin-left:auto}
.kb-modalbody{flex:1;overflow:auto;margin:0;padding:16px 18px;
  font-family:ui-monospace,Consolas,"Cascadia Mono",monospace;
  font-size:12px;line-height:1.7;white-space:pre-wrap;word-break:break-word}
.kb-modalfoot{display:flex;gap:8px;justify-content:flex-end;padding:10px 16px;
  border-top:1px solid var(--dsw-alias-border-l1)}
.kb-root{position:relative}
/* ── 左下角：球的视角切换（原型 #dock）── */
.kb-dock{position:absolute;left:12px;bottom:12px;display:flex;gap:10px;
  align-items:flex-start;background:var(--dsw-alias-bg-layer-1);
  border:1px solid var(--dsw-alias-border-l1);border-radius:10px;padding:9px 10px;
  box-shadow:0 8px 24px rgba(0,0,0,.28);max-height:calc(100% - 90px);z-index:5}
.kb-dock .col{display:flex;flex-direction:column;gap:4px;overflow-y:auto;max-height:100%}
.kb-dock .cap{font-size:10px;color:var(--dsw-alias-label-secondary);
  margin-bottom:2px;letter-spacing:.5px;white-space:nowrap}
.kb-sb{display:flex;align-items:center;gap:6px;background:var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l1);border-radius:6px;padding:3px 8px;
  color:var(--dsw-alias-label-secondary);font-size:11px;cursor:pointer;
  white-space:nowrap;text-align:left}
.kb-sb:hover{background:var(--dsw-alias-interactive-bg-hover);
  color:var(--dsw-alias-label-primary)}
.kb-sb .n{font-size:10px;opacity:.6;min-width:9px}
.kb-sb .e{font-family:"Times New Roman","SimSun",serif;font-size:11.5px}
.kb-sb .z{font-size:10.5px;opacity:.62}
.kb-sb.host{border-left:2px solid rgba(196,69,63,.75)}
.kb-sb.client{border-left:2px solid rgba(31,143,120,.75)}
.kb-sb.on{background:var(--dsw-alias-bg-layer-2);
  border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary)}
.kb-reset{background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l1);
  color:var(--dsw-alias-label-primary);border-radius:6px;padding:5px 10px;
  font-size:11px;cursor:pointer;margin-top:5px;width:100%}
.kb-reset:hover{background:var(--dsw-alias-interactive-bg-hover)}
/* ── 右侧面板里的功能切换 ── */
.kb-panelhead{display:flex;gap:4px;margin-bottom:10px;border-bottom:1px solid var(--dsw-alias-border-l1);
  padding-bottom:8px}
.kb-seg{flex:1;border:1px solid var(--dsw-alias-border-l1);background:transparent;
  color:var(--dsw-alias-label-secondary);border-radius:6px;padding:4px 8px;
  font-size:11.5px;cursor:pointer;white-space:nowrap}
.kb-seg:hover{background:var(--dsw-alias-interactive-bg-hover)}
.kb-seg.on{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);
  border-color:var(--dsw-alias-border-l2)}
.kb-panel{width:340px}
`;

    // ══ 四元数 ═════════════════════════════════════════════
    const qMul = (a, b) => ({
      x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
      y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
      z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
      w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
    });
    const qNorm = (q) => {
      const l = Math.hypot(q.x, q.y, q.z, q.w) || 1;
      return { x: q.x / l, y: q.y / l, z: q.z / l, w: q.w / l };
    };
    const qAxis = (ax, ay, az, ang) => {
      const s = Math.sin(ang / 2);
      return { x: ax * s, y: ay * s, z: az * s, w: Math.cos(ang / 2) };
    };
    const qConj = (q) => ({ x: -q.x, y: -q.y, z: -q.z, w: q.w });
    const qRot = (q, v) => {
      const p = qMul(qMul(q, { x: v[0], y: v[1], z: v[2], w: 0 }), qConj(q));
      return [p.x, p.y, p.z];
    };

    /** 球面插值（照抄原型 scene.html:350-366） */
    const qSlerp = (a, b, t) => {
      let d = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
      let bb = b;
      if (d < 0) { bb = { x: -b.x, y: -b.y, z: -b.z, w: -b.w }; d = -d; }
      if (d > 0.9995) {
        return qNorm({
          x: a.x + (bb.x - a.x) * t, y: a.y + (bb.y - a.y) * t,
          z: a.z + (bb.z - a.z) * t, w: a.w + (bb.w - a.w) * t,
        });
      }
      const th = Math.acos(d);
      const sn = Math.sin(th);
      const w1 = Math.sin((1 - t) * th) / sn;
      const w2 = Math.sin(t * th) / sn;
      return qNorm({
        x: a.x * w1 + bb.x * w2, y: a.y * w1 + bb.y * w2,
        z: a.z * w1 + bb.z * w2, w: a.w * w1 + bb.w * w2,
      });
    };

    /** ease-in-out（原型 scene.html:384）：加减速 */
    const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const quatFromEuler = (yaw, pitch) =>
      qNorm(qMul(qAxis(0, 1, 0, yaw), qAxis(1, 0, 0, pitch)));

    // ══ 球心 / 世界范围（只算一次）══════════════════════════
    const BOUNDS = (() => {
      const xs = SPHERES.flatMap((s) => [s.x - s.radius, s.x + s.radius]);
      const ys = SPHERES.flatMap((s) => [s.y - s.radius, s.y + s.radius]);
      return {
        minX: Math.min(...xs), maxX: Math.max(...xs),
        minY: Math.min(...ys), maxY: Math.max(...ys),
      };
    })();
    const CX = (BOUNDS.minX + BOUNDS.maxX) / 2;
    const CY = (BOUNDS.minY + BOUNDS.maxY) / 2;
    const SPANX = Math.max(BOUNDS.maxX - BOUNDS.minX, 1);
    const SPANY = Math.max(BOUNDS.maxY - BOUNDS.minY, 1);

    const PLANE_HEX = { host: '196,69,63', client: '31,143,120' };

    // 服务名缩写：驼峰取首字母 + 末段
    const abbrev = (n) => {
      if (!n) return '';
      const parts = n.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/[\s_\-]+/).filter(Boolean);
      if (parts.length === 1) return parts[0].slice(0, 6);
      return parts.slice(0, 2).map((p) => p.slice(0, 4)).join('');
    };

    // ══ 主面板 ══════════════════════════════════════════════
    function BureauPanel() {
      const cvRef = React.useRef(null);
      const wrapRef = React.useRef(null);
      // ── 三个状态分开（照原型 STATE.focus / STATE.selected / PLAN.sel）──
      const [focus, setFocus] = React.useState(null);     // ① 聚焦哪个球
      const [selected, setSelected] = React.useState(null); // ② 选中哪个服务（右侧详情 + 依赖）
      const [chainSel, setChainSel] = React.useState(null); // ③ 链条里选中哪个节点
      const [query, setQuery] = React.useState('');
      const [size, setSize] = React.useState({ w: 0, h: 0 });
      const camRef = React.useRef({ q: quatFromEuler(1.3963, 0), zoom: 1 });
      const dragRef = React.useRef({ on: false, x: 0, y: 0, moved: 0 });
      const hoverRef = React.useRef(null);        // { sphere, node }
      const hoverSphereRef = React.useRef(null);  // 球 id
      // 补间：一次切换 700ms，ease-in-out（原型 scene.html:382-438）
      const twRef = React.useRef({ on: false, t0: 0, dur: 700, from: null, to: null });
      const [tick, setTick] = React.useState(0);
      const redraw = React.useCallback(() => setTick((n) => n + 1), []);

      // ── 视图切换 + 插件链状态 ────────────────────────────
      const [view, setView] = React.useState('3d');

      const [store, setStore] = React.useState(() => {
        const s0 = loadStore();
        if (s0.activeId && s0.plans[s0.activeId]) return s0;
        // 第一次进来：建一个空配置
        const id = 'plan-' + Date.now();
        const p = emptyPlan();
        return { activeId: id, plans: { [id]: p } };
      });

      const plan = store.activeId ? store.plans[store.activeId] : emptyPlan();

        /** 改 plan 并写回 localStorage */
      const persist = (nextPlan) => {
        const s1 = {
          ...store,
          plans: { ...store.plans, [store.activeId]: nextPlan },
        };
        setStore(s1);
        saveStore(s1);
      };

      // ChainView 拿到的 setPlan 是「改 + 落盘」的合成器。
      // 之前漏了这一行，面板一渲染插件链就 ReferenceError，整块白。
      const setPlan = persist;


      // 首次挂载时若还没落盘，落一次
      React.useEffect(() => {
        saveStore(store);
      }, []);   // eslint-disable-line react-hooks/exhaustive-deps

      const close = () => {
        const layout = ctx.get('layout');
        if (layout && typeof layout.selectPanel === 'function') layout.selectPanel(null);
      };

      // ── 尺寸观察 ────────────────────────────────────────
      React.useEffect(() => {
        const el = wrapRef.current;
        if (!el) return undefined;
        const read = () => setSize({ w: el.clientWidth, h: el.clientHeight });
        read();
        if (typeof ResizeObserver === 'undefined') {
          window.addEventListener('resize', read);
          return () => window.removeEventListener('resize', read);
        }
        const ro = new ResizeObserver(read);
        ro.observe(el);
        return () => ro.disconnect();
      }, []);

      // 当前相机中心：补间进行中用补间值，否则用目标
      const [orbit, setOrbit] = React.useState(null);

      const center = React.useMemo(() => {
        if (orbit) return orbit;
        const s = focus ? BY_ID[focus] : null;
        return s ? { x: s.x, y: s.y, z: s.z } : { x: CX, y: CY, z: 0 };
      }, [focus, orbit]);

      const zoomBase = React.useMemo(() => {
        if (!size.w || !size.h) return 1;
        const s = focus ? BY_ID[focus] : null;
        const spanX = s ? s.radius * 2.6 : SPANX;
        const spanY = s ? s.radius * 2.6 : SPANY;
        return Math.min(size.w / spanX, size.h / spanY) * (s ? 0.9 : 0.86);
      }, [size, focus]);

      /** 飞过去（原型 viewFor + tweenTo） */
      const flyTo = (ballId) => {
        const tw = twRef.current;
        const s = ballId ? BY_ID[ballId] : null;
        const to = s
          ? { x: s.x, y: s.y, z: s.z }
          : { x: CX, y: CY, z: 0 };
        tw.from = { ...center };
        tw.to = to;
        tw.dur = 700;
        tw.t0 = (typeof performance !== 'undefined' ? performance.now() : Date.now());
        tw.on = true;
        setOrbit({ ...center });
      };

      // 补间循环
      //
      // 依赖里**不能**放 tick：每次 setOrbit 都会触发重绘 → tick+1 → 这个 effect
      // 重新执行 → 又起一条 raf 循环。上一轮的循环里 tw.on 还是 true，
      // 于是两条、四条、八条……帧数指数增长，机器直接卡死。
      // 只依赖 focus：切球时才起一次。
      React.useEffect(() => {
        const tw = twRef.current;
        if (!tw.on) return undefined;
        let raf = 0;
        let stopped = false;
        const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
        const step = () => {
          if (stopped) return;
          const t = Math.min(1, (now() - tw.t0) / tw.dur);
          const e = easeInOut(t);
          const f = tw.from, g2 = tw.to;
          setOrbit({
            x: f.x + (g2.x - f.x) * e,
            y: f.y + (g2.y - f.y) * e,
            z: f.z + (g2.z - f.z) * e,
          });
          if (t >= 1) {
            tw.on = false;
            setOrbit(null);   // 归位后交回 focus 推导
            return;
          }
          raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => { stopped = true; cancelAnimationFrame(raf); };
      }, [focus]);

      // ── 画一帧 ──────────────────────────────────────────
      React.useEffect(() => {
        const cv = cvRef.current;
        if (!cv) return;
        const { w, hgt } = { w: size.w, hgt: size.h };
        if (w < 4 || hgt < 4) return;
        const dpr = window.devicePixelRatio || 1;
        if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(hgt * dpr)) {
          cv.width = Math.round(w * dpr);
          cv.height = Math.round(hgt * dpr);
        }
        const g = cv.getContext('2d');
        if (!g) return;

        try {
          drawFrame(g, w, hgt, dpr);
        } catch (err) {
          // 画错了也不能让整个面板黑掉：在画布上写出来，方便下一个人一眼看到
          console.error('[kb-bureau] draw failed', err);
          try {
            g.setTransform(dpr, 0, 0, dpr, 0, 0);
            g.clearRect(0, 0, w, hgt);
            g.font = '13px -apple-system,"Segoe UI",sans-serif';
            g.fillStyle = 'rgba(255,120,120,0.95)';
            g.textAlign = 'left';
            g.textBaseline = 'top';
            g.fillText('绘制出错：' + (err && err.message ? err.message : String(err)), 16, 16);
            if (err && err.stack) {
              g.fillStyle = 'rgba(200,200,200,0.7)';
              g.font = '11px ui-monospace,Consolas,monospace';
              String(err.stack).split('\n').slice(0, 4).forEach((ln, i) => {
                g.fillText(ln.slice(0, 120), 16, 40 + i * 16);
              });
            }
          } catch { /* 连错误都画不出来就算了 */ }
        }

        function drawFrame(g, w, hgt, dpr) {
          g.setTransform(dpr, 0, 0, dpr, 0, 0);
          g.clearRect(0, 0, w, hgt);

        const cam = camRef.current;
        const scale = zoomBase * cam.zoom;

        // ── 真透视：焦距 900，与原型 scene.html:446-454 一致 ──
        const FOCAL = 900;
        const project = (p) => {
          const r = qRot(cam.q, [p[0] - center.x, p[1] - center.y, p[2] - center.z]);
          const f = 1 / (1 + r[2] / FOCAL);
          return { x: w / 2 + r[0] * scale * f, y: hgt / 2 - r[1] * scale * f, z: r[2], f };
        };

        // 背景细网格（原型 scene.html:487-490）
        g.strokeStyle = 'rgba(255,255,255,0.026)';
        g.lineWidth = 1;
        for (let x = 0; x < w; x += 44) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, hgt); g.stroke(); }
        for (let y = 0; y < hgt; y += 44) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }

        const pos = {};
        for (const s of SPHERES) pos[s.id] = project([s.x, s.y, s.z]);

        // ── ① 键线：曲线（原型 scene.html:496-521）────────
        // 跨面 = 琥珀色，同面 = 石板灰；弯度跨面大、同面小
        for (const b of BONDS) {
          const pa = pos[b.from], pb = pos[b.to];
          if (!pa || !pb) continue;

          let alpha, width;
          if (focus) {
            const touch = b.from === focus || b.to === focus;
            if (!touch) continue;
            alpha = b.planeCross ? 0.46 : 0.28;
            width = Math.min(7, 1 + Math.log2((b.count ?? 1) + 1));
          } else {
            // 宏观。原型是 0.085 / 0.05 —— 折算到深色底上几乎和灰底一个色，
            // 于是「所有线都是灰的」。这里把两类各自拉开：
            //   跨面 = 暖琥珀，同面 = 冷石板，且亮到一眼能分出两种。
            alpha = b.planeCross ? 0.30 : 0.20;
            width = Math.min(4.5, 0.7 + Math.log2((b.count ?? 1) + 1) * 0.6);
          }

          const mx = (pa.x + pb.x) / 2;
          const my = (pa.y + pb.y) / 2;
          const dx = pb.x - pa.x;
          const dy = pb.y - pa.y;
          const len = Math.hypot(dx, dy) || 1;
          const kk = b.planeCross ? 0.30 : 0.16;   // 跨面弯得大

          g.beginPath();
          g.moveTo(pa.x, pa.y);
          g.quadraticCurveTo(mx + (-dy / len) * len * kk, my + (dx / len) * len * kk, pb.x, pb.y);
          g.strokeStyle = b.planeCross ? `rgba(186,117,7,${alpha})` : `rgba(148,163,184,${alpha})`;
          g.lineWidth = width;
          g.stroke();

          // 曲线中点：未来「展开成服务对服务」的把手
          if (!focus || b.from === focus || b.to === focus) {
            const t = 0.5;
            const qx = (1 - t) * (1 - t) * pa.x + 2 * (1 - t) * t * (mx + (-dy / len) * len * kk) + t * t * pb.x;
            const qy = (1 - t) * (1 - t) * pa.y + 2 * (1 - t) * t * (my + (dx / len) * len * kk) + t * t * pb.y;
            g.beginPath();
            g.arc(qx, qy, focus ? 3.2 : 2.2, 0, Math.PI * 2);
            g.fillStyle = b.planeCross ? 'rgba(186,117,7,0.85)' : 'rgba(148,163,184,0.7)';
            g.fill();
          }
        }

        // ── ② 球 + 球内服务点（原型 scene.html:526-588）────
        // 降序：z 大的先画（远的先画，近的盖上去）
        const balls = [];
        const innerList = [];    // 聚焦球内的服务点，标签留到最后统一避让
        let selLabel = null;     // 宏观里选中服务的标签框（给球名避让用）
        const order = [...SPHERES]
          .map((s) => ({ s, p: pos[s.id] }))
          .filter((x) => x.p)
          .sort((a, b) => b.p.z - a.p.z);

        for (const { s, p: c } of order) {
          const r = s.radius * scale * c.f;    // ← 半径乘透视因子
          const hex = PLANE_HEX[s.plane] ?? '200,200,200';
          const isFocus = focus === s.id;
          const dimmed = focus && !isFocus;
          const isHover = hoverSphereRef.current === s.id;

          if (dimmed) {
            // 聚焦时其它球缩成小点，作为可切换的目标（原型 scene.html:546-557）
            g.beginPath();
            g.arc(c.x, c.y, Math.max(2.5, r * 0.06), 0, Math.PI * 2);
            g.fillStyle = `rgba(${hex},${isHover ? 0.85 : 0.34})`;
            g.fill();
            if (isHover) {
              g.strokeStyle = `rgba(${hex},0.45)`;
              g.lineWidth = 1.2;
              g.stroke();
              g.textAlign = 'center';
              g.textBaseline = 'middle';
              g.font = `400 ${Math.max(11, Math.min(18, r * 0.14))}px "Times New Roman","SimSun",serif`;
              g.fillStyle = `rgba(${hex},0.85)`;
              g.fillText(s.nameEn || s.id, c.x, c.y - Math.max(14, r * 0.16));
            }
            continue;
          }

          // 球壳
          g.beginPath();
          g.arc(c.x, c.y, r, 0, Math.PI * 2);
          g.fillStyle = `rgba(${hex},${isFocus ? 0.085 : isHover ? 0.055 : 0.035})`;
          g.fill();
          g.lineWidth = isFocus ? 2.4 : isHover ? 1.9 : 1.3;
          g.strokeStyle = `rgba(${hex},${isFocus ? 0.85 : isHover ? 0.62 : 0.34})`;
          g.stroke();

          // 赤道椭圆：给球一点立体感（原型 542-544）
          const tilt = Math.abs(2 * (cam.q.w * cam.q.x - cam.q.y * cam.q.z));
          g.beginPath();
          g.ellipse(c.x, c.y, r, r * Math.min(1, tilt), 0, 0, Math.PI * 2);
          g.strokeStyle = `rgba(${hex},0.10)`;
          g.lineWidth = 1;
          g.stroke();

          // 球内服务点 —— 「节点纹理」。
          //
          // 宏观里球本身就该带着纹理（你当面提的那条）：默认极淡，像星云里的粉尘，
          // 不抢层号水印；聚焦时全亮，正常交互。
          // 选中某个服务后，宏观里它的「所在球 + 那个点 + 名字」一起高亮，
          // 这样退到宏观不会「什么都没了」。
          if (isFocus) {
            const inner = (s.nodes ?? [])
              .map((n) => ({ n, np: project(n.pos) }))
              .sort((a, b) => b.np.z - a.np.z);

            for (const { n, np } of inner) {
              const near = np.z < c.z;
              const hitSvc = selected === n.name;
              const hovSvc = hoverRef.current &&
                hoverRef.current.sphere === s.id &&
                hoverRef.current.node === n.name;
              const inSearch = query && n.name.toLowerCase().includes(query.toLowerCase());
              const rr = Math.max(2.4, 4.2 * c.f) * (hitSvc ? 1.9 : hovSvc ? 1.5 : 1);
              g.beginPath();
              g.arc(np.x, np.y, rr, 0, Math.PI * 2);
              g.fillStyle = hitSvc ? '#ffd479'
                : hovSvc ? '#ffffff'
                  : inSearch ? '#ffa050'
                    : `rgba(226,232,240,${near ? 0.95 : 0.32})`;
              g.fill();

              innerList.push({ n, np, near, hitSvc, hovSvc, inSearch });
            }
          } else {
            // ── 宏观：先铺一层极淡的节点纹理（球自带，不选中也看得见）──
            const nodes = s.nodes ?? [];
            const selNode = selected ? nodes.find((n) => n.name === selected) : null;
            for (const n of nodes) {
              if (selNode && n === selNode) continue;   // 选中的留到后面画重的
              const np = project(n.pos);
              g.beginPath();
              g.arc(np.x, np.y, Math.max(1.1, 1.9 * c.f), 0, Math.PI * 2);
              g.fillStyle = `rgba(${hex},0.20)`;
              g.fill();
            }

            // ── 宏观：选中服务所在的球要认得出来 ──
            if (selNode) {
              // ① 球外一圈光晕，标出「它在这个球里」
              g.beginPath();
              g.arc(c.x, c.y, r + 5, 0, Math.PI * 2);
              g.strokeStyle = 'rgba(255,212,121,0.42)';
              g.lineWidth = 1.6;
              g.stroke();

              // ② 服务点本身
              const np = project(selNode.pos);
              g.beginPath();
              g.arc(np.x, np.y, 4.5, 0, Math.PI * 2);
              g.fillStyle = '#ffd479';
              g.fill();
              g.lineWidth = 1.5;
              g.strokeStyle = 'rgba(255,212,121,0.6)';
              g.stroke();

              // ③ 名字：服务名 · 球名（中英），让宏观自己说清「这是谁、在哪」
              const lab = selected;
              const sub = (s.nameEn || s.id) + (s.nameZh ? ' · ' + s.nameZh : '');
              g.font = `500 12px -apple-system,"Segoe UI",sans-serif`;
              g.textAlign = 'left';
              g.textBaseline = 'middle';
              g.lineWidth = 3.2;
              g.strokeStyle = 'rgba(9,11,14,0.23)';
              g.lineJoin = 'round';
              const tw = g.measureText(lab).width;
              g.strokeText(lab, np.x + 8, np.y);
              g.fillStyle = 'rgba(255,212,121,0.98)';
              g.fillText(lab, np.x + 8, np.y);

              g.font = `400 10.5px "Noto Sans SC","PingFang SC",sans-serif`;
              const ty = np.y + 14;
              g.strokeText(sub, np.x + 8, ty);
              g.fillStyle = `rgba(${hex},0.92)`;
              g.fillText(sub, np.x + 8, ty);

              selLabel = { x: np.x + 8, y: np.y, w: Math.max(tw, g.measureText(sub).width), h: 30 };
            }
          }

          // 层号水印（原型 559-566）：全景时当背景
          if (!isFocus) {
            const label = '一二三四五六七八九十'[s.layer] ?? String(s.layer);
            g.textAlign = 'center';
            g.textBaseline = 'middle';
            g.font = `500 ${Math.max(16, Math.min(90, r * 0.72))}px "Noto Sans SC",sans-serif`;
            g.fillStyle = `rgba(${hex},0.09)`;
            g.fillText(label, c.x, c.y + r * 0.30);
          }

          balls.push({ s, c, r, hex, isFocus });
        }

        // ── ②b 依赖细线：出边青色 / 入边橙色（原型 scene.html:1808-1854）──
        // 原型里 NODE_AT 是整个分子所有服务点的屏幕坐标（全局），
        // 所以跨球的依赖能画成长线。这里照做：不限于当前聚焦的那个球。
        if (selected && IFACE[selected]) {
          const nodeAt = {};
          for (const sp of SPHERES) {
            for (const n of sp.nodes ?? []) nodeAt[n.name] = project(n.pos);
          }

          const drawOne = (fromSvc, toSvc, color, width) => {
            const A = nodeAt[fromSvc];
            const B0 = nodeAt[toSvc];
            if (!A || !B0) return;
            // 目标点跑到画布外时，把线截到边缘（原型 clampToCanvas，scene.html:1794-1806）。
            // 不截的话宏观里一条线横穿全屏，看着像乱画。
            const MARGIN = 10;
            const inside = (p) => p.x > MARGIN && p.x < w - MARGIN && p.y > MARGIN && p.y < hgt - MARGIN;
            let B = B0, clipped = false;
            if (!inside(B0)) {
              const dx0 = B0.x - A.x, dy0 = B0.y - A.y;
              let t0 = 1;
              if (dx0 > 0) t0 = Math.min(t0, (w - MARGIN - A.x) / dx0);
              if (dx0 < 0) t0 = Math.min(t0, (MARGIN - A.x) / dx0);
              if (dy0 > 0) t0 = Math.min(t0, (hgt - MARGIN - A.y) / dy0);
              if (dy0 < 0) t0 = Math.min(t0, (MARGIN - A.y) / dy0);
              t0 = Math.max(0, Math.min(1, t0));
              B = { x: A.x + dx0 * t0, y: A.y + dy0 * t0 };
              clipped = true;
            }
            const mx = (A.x + B.x) / 2;
            const my = (A.y + B.y) / 2;
            const dx = B.x - A.x;
            const dy = B.y - A.y;
            const len = Math.hypot(dx, dy) || 1;
            const cx = mx + (-dy / len) * len * 0.18;
            const cy = my + (dx / len) * len * 0.18;

            g.beginPath();
            g.moveTo(A.x, A.y);
            g.quadraticCurveTo(cx, cy, B.x, B.y);
            g.strokeStyle = color;
            g.lineWidth = width;
            g.stroke();

            // 箭头：终点一个小三角，表示方向
            const ang = Math.atan2(B.y - cy, B.x - cx);
            const rr = clipped ? 3.2 : 4.5;
            g.beginPath();
            g.moveTo(B.x, B.y);
            g.lineTo(B.x - rr * Math.cos(ang - 0.4), B.y - rr * Math.sin(ang - 0.4));
            g.lineTo(B.x - rr * Math.cos(ang + 0.4), B.y - rr * Math.sin(ang + 0.4));
            g.closePath();
            g.fillStyle = color;
            g.fill();
          };

          // 颜色与原型对齐（scene.html:1844/1850）：出边青色、入边橙色。
          // 直接依赖 vs 推断边的对比度要拉开 —— 推断边占了一半多，
          // 太淡就等于「一条线都看不见」。注意这里用的是不透明色值 + 全局透明度，
          // 半透明白色叠加会让线偏灰，所以直接给足 alpha。
          const LIMIT = 12;   // 原型是 4；这里给多点，画布够大
          const rank = (x) => (x.c === 'direct' ? 0 : 1);
          const rec0 = IFACE[selected];

          const outs = (rec0.deps ?? [])
            .filter((d) => nodeAt[d.to])
            .sort((a, b) => rank(a) - rank(b))
            .slice(0, LIMIT);
          for (const d of outs) {
            drawOne(selected, d.to,
              d.c === 'direct' ? 'rgba(96,196,214,0.92)' : 'rgba(96,196,214,0.42)', 1.6);
          }

          const ins = (rec0.by ?? [])
            .filter((d) => nodeAt[d.from])
            .sort((a, b) => rank(a) - rank(b))
            .slice(0, LIMIT);
          for (const d of ins) {
            drawOne(d.from, selected,
              d.c === 'direct' ? 'rgba(230,150,80,0.88)' : 'rgba(230,150,80,0.40)', 1.6);
          }

          // 端点小圆
          const drawDot = (name, color) => {
            const p = nodeAt[name];
            if (!p) return;
            g.beginPath();
            g.arc(p.x, p.y, 3.4, 0, Math.PI * 2);
            g.fillStyle = color;
            g.fill();
          };
          for (const d of outs) drawDot(d.to, 'rgba(96,196,214,0.85)');
          for (const d of ins) drawDot(d.from, 'rgba(230,150,80,0.85)');
        }

        // ── ③ 聚焦球内的服务名：贪心避让（原型 scene.html:668-706）──
        // 优先级：选中的 → 悬停的 → 近前的 → 远的；撞了的远处点干脆不写名字。
        {
          const placed = [];
          const ov = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
          const cand = innerList
            .map((h) => ({
              ...h,
              size: Math.max(12, Math.min(17, 14 * (h.np.f ?? 1))) * 1.0,
              pri: h.hitSvc ? 0 : h.hovSvc ? 1 : h.near ? 2 : 3,
            }))
            .sort((a, b) => a.pri - b.pri || a.np.z - b.np.z);

          g.textAlign = 'left';
          g.textBaseline = 'middle';
          for (const c of cand) {
            const label = abbrev(c.n.name);
            g.font = `500 ${c.size}px -apple-system,"Segoe UI",sans-serif`;
            const tw = g.measureText(label).width;
            const hh = c.size * 1.45;
            const x = c.np.x + c.size * 0.55;
            const y = c.np.y;
            const box = { x: x - 2, y: y - hh / 2, w: tw + 5, h: hh };

            // 「远的那一半」撞了就跳过，避免糊；选/悬/近的必须画
            if (c.pri >= 3 && placed.some((b) => ov(box, b))) continue;
            placed.push(box);

            if (c.pri === 0) {
              g.fillStyle = 'rgba(11,13,16,0.21)';
              g.fillRect(box.x, box.y, box.w, box.h);
            }
            g.lineWidth = 3.2;
            g.strokeStyle = 'rgba(9,11,14,0.23)';
            g.lineJoin = 'round';
            g.strokeText(label, x, y);
            g.fillStyle = c.pri === 0 ? 'rgba(255,212,121,0.98)'
              : c.pri === 1 ? 'rgba(255,255,255,0.96)'
                : c.pri === 2 ? 'rgba(203,213,225,0.88)'
                  : 'rgba(203,213,225,0.6)';
            g.fillText(label, x, y);
          }
        }

        // ── ③ 球名：贪心避让 + 引线（原型 scene.html:593-666）──
        // 大球优先；每个球试多个纵向位置，选第一个不撞的。
        // 宏观里选中服务的那个标签也算已占位，球名不许糊上去。
        {
          const placed = selLabel ? [selLabel] : [];
          const ov = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

          const list = balls.slice().sort((a, b) =>
            (b.isFocus ? 1 : 0) - (a.isFocus ? 1 : 0) || b.r - a.r);

          for (const bl of list) {
            const { s, c, r, hex, isFocus } = bl;
            if (r < 14) continue;

            const big = Math.max(13, Math.min(isFocus ? 32 : 24, r * (isFocus ? 0.17 : 0.22)));
            const small = Math.max(11, Math.min(isFocus ? 18 : 15, r * (isFocus ? 0.10 : 0.14)));
            const gap = s.nameZh ? big * 0.85 : 0;
            const blockH = big + gap + small * 0.9;

            g.font = `400 ${big}px "Times New Roman","SimSun","Songti SC",serif`;
            const wEn = g.measureText(s.nameEn || s.id).width;
            g.font = `400 ${small}px "Noto Sans SC","PingFang SC",sans-serif`;
            const wZh = s.nameZh ? g.measureText(s.nameZh).width : 0;
            const bw = Math.max(wEn, wZh) + 8;

            // 候选位置（照抄原型 scene.html:618-620）
            //   聚焦：球顶一处
            //   全景：球心略上 → 球心偏上 → 球心偏下 → 球底
            const offsets = isFocus
              ? [-r * 0.90 - big * 0.4]
              : [-r * 0.05 - big * 0.4, -r * 0.34, r * 0.26, r * 0.55];

            let box = null;
            for (const dy of offsets) {
              const cand = { x: c.x - bw / 2, y: c.y + dy - blockH / 2, w: bw, h: blockH };
              if (!placed.some((o) => ov(cand, o))) { box = cand; break; }
            }
            if (!box) {
              if (isFocus) box = { x: c.x - bw / 2, y: c.y - r * 0.9 - blockH / 2, w: bw, h: blockH };
              else continue;   // 实在放不下就不写，避免糊成一团
            }
            placed.push(box);

            // 名字被挪离球顶时，补一条引线
            const nameCY = box.y + blockH / 2;
            if (Math.abs(nameCY - c.y) > r * 0.18) {
              g.beginPath();
              g.moveTo(c.x, nameCY + (nameCY < c.y ? blockH / 2 : -blockH / 2));
              g.lineTo(c.x, c.y);
              g.strokeStyle = `rgba(${hex},0.22)`;
              g.lineWidth = 1;
              g.stroke();
            }

            const cy0 = box.y + big * 0.5;
            const halo = (text, y, font, color) => {
              g.font = font;
              g.textAlign = 'center';
              g.textBaseline = 'middle';
              g.lineWidth = 3.8;
              g.strokeStyle = 'rgba(9,11,14,0.23)';
              g.lineJoin = 'round';
              g.strokeText(text, c.x, y);
              g.fillStyle = color;
              g.fillText(text, c.x, y);
            };
            halo(s.nameEn || s.id, cy0,
              `400 ${big}px "Times New Roman","SimSun","Songti SC",serif`, `rgba(${hex},0.97)`);
            if (s.nameZh) {
              halo(s.nameZh, cy0 + gap,
                `400 ${small}px "Noto Sans SC","PingFang SC",sans-serif`,
                `rgba(${hex},${isFocus ? 0.80 : 0.66})`);
            }
          }
        }
        }   // ← drawFrame 结束
      }, [size, focus, selected, query, tick, center, zoomBase]);

      // ── 点击拾取：先球，再服务（要与绘制用同一套透视）──
      const hitTest = (mx, my) => {
        const cam = camRef.current;
        const scale = zoomBase * cam.zoom;
        const FOCAL = 900;
        const proj = (p) => {
          const r = qRot(cam.q, [p[0] - center.x, p[1] - center.y, p[2] - center.z]);
          const f = 1 / (1 + r[2] / FOCAL);
          return { x: size.w / 2 + r[0] * scale * f, y: size.h / 2 - r[1] * scale * f, z: r[2], f };
        };

        // 照抄原型 pickSphere（scene.html:745-760）：
        // 聚焦时焦点球被放大几乎盖满屏，只取「最近」会永远停在它上面切不出去，
        // 所以优先返回其它球 —— 点暗着的球 = 切过去。
        const cands = [];
        for (const s of SPHERES) {
          const p = proj([s.x, s.y, s.z]);
          const r = s.radius * scale * p.f;
          const d = Math.hypot(mx - p.x, my - p.y);
          if (d <= Math.max(r, 6)) cands.push({ s, d, p, r });
        }
        if (!cands.length) return null;
        const other = cands
          .filter((c) => c.s.id !== focus)
          .sort((a, b) => a.d - b.d);
        const hit = other.length ? other[0] : cands.sort((a, b) => a.d - b.d)[0];

        if (focus !== hit.s.id) return { ball: hit.s.id, svc: null };

        // 聚焦球内再找服务：点（半径 26）和它右边的缩写文字都算命中。
        // 字比点宽得多，只认点的话「看着能点、点了没反应」。
        let svc = null;
        let bd = Infinity;
        for (const n of hit.s.nodes ?? []) {
          const p = proj(n.pos);
          // 点本身
          const dDot = Math.hypot(mx - p.x, my - p.y);
          if (dDot < 26 && dDot < bd) { bd = dDot; svc = n.name; continue; }
          // 缩写文字的矩形（从点右侧 offsetX 起，到文字宽度）
          const size = Math.max(12, Math.min(17, 14 * (p.f ?? 1)));
          const offsetX = size * 0.55;
          const label = abbrev(n.name);
          // 估宽：等宽近似，够用
          const wLabel = label.length * size * 0.62;
          const inBox = mx >= p.x + offsetX - 3
            && mx <= p.x + offsetX + wLabel + 5
            && Math.abs(my - p.y) <= size * 0.85;
          if (inBox) {
            const dc = Math.hypot(mx - (p.x + offsetX), my - p.y);
            if (dc < bd) { bd = dc; svc = n.name; }
          }
        }
        return { ball: hit.s.id, svc };
      };

      const onDown = (e) => {
        dragRef.current = { on: true, x: e.clientX, y: e.clientY, moved: 0 };
        e.currentTarget.classList.add('drag');
        e.currentTarget.setPointerCapture?.(e.pointerId);
      };
      const onMove = (e) => {
        const d = dragRef.current;
        if (!d.on) {
          // 没按下 → 悬停探测（照抄原型 scene.html:799-807）
          const rect = e.currentTarget.getBoundingClientRect();
          const h0 = hitTest(e.clientX - rect.left, e.clientY - rect.top);
          const hv = h0 ? { sphere: h0.ball, node: h0.svc } : null;
          const hs = h0 ? h0.ball : null;
          const changed =
            (hv?.node !== hoverRef.current.node) ||
            (hv?.sphere !== hoverRef.current.sphere) ||
            (hs !== hoverSphereRef.current);
          if (changed) {
            hoverRef.current = hv;
            hoverSphereRef.current = hs;
            e.currentTarget.style.cursor = h0 ? 'pointer' : 'grab';
            redraw();
          }
          return;
        }
        const dx = e.clientX - d.x;
        const dy = e.clientY - d.y;
        d.moved += Math.abs(dx) + Math.abs(dy);
        d.x = e.clientX;
        d.y = e.clientY;

        // 拖动 = 相机在球面上挪位置，绕「相机自己的轴」转（照抄原型 scene.html:788-795），
        // 这样转到任何角度都不会反。
        const cam = camRef.current;
        const inv = qConj(cam.q);
        const right = qRot(inv, [1, 0, 0]);
        const up = qRot(inv, [0, 1, 0]);
        const dqYaw = qAxis(up[0], up[1], up[2], -dx * 0.008);
        const dqPitch = qAxis(right[0], right[1], right[2], dy * 0.006);
        cam.q = qNorm(qMul(qMul(dqPitch, dqYaw), cam.q));
        redraw();
      };
      const onUp = (e) => {
        const d = dragRef.current;
        d.on = false;
        e.currentTarget.classList.remove('drag');
        if (d.moved > 6) return;   // 拖动不算点击
        const rect = e.currentTarget.getBoundingClientRect();
        const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
        if (!hit) {
          setFocus(null);
          setSelected(null);
          flyTo(null);
          return;
        }
        if (hit.svc) { setSelected(hit.svc); return; }
        // 点同一个球 = 取消聚焦（照抄原型 scene.html:776）
        // 注意：原型 focusSphere 不动 STATE.selected，这里也不动 ——
        // 否则切个球就把「选中的服务」丢了，依赖线和加节点按钮一起失效。
        const next = hit.ball === focus ? null : hit.ball;
        setFocus(next);
        camRef.current = { q: camRef.current.q, zoom: 1 };
        flyTo(next);
      };
      const onLeave = () => {
        if (hoverRef.current || hoverSphereRef.current) {
          hoverRef.current = null;
          hoverSphereRef.current = null;
          redraw();
        }
      };
      const onWheel = (e) => {
        e.preventDefault();
        const cam = camRef.current;
        cam.zoom = Math.max(0.4, Math.min(5, cam.zoom * (e.deltaY > 0 ? 0.92 : 1.08)));
        redraw();
      };
      const onDbl = () => {
        // 双击 = 退回宏观（原型 scene.html:819-823 只回正视角，但那样聚焦后
        // 没有明确出口，很难退回整体；这里让它两步并一步：直接回全景默认视角，
        // 但**保留选中的服务**，这样退到宏观还能看见它、依赖线也还在）
        camRef.current = { q: quatFromEuler(1.3963, 0), zoom: 1 };
        setFocus(null);
        flyTo(null);
        redraw();
      };

      // 搜索：回车跳到第一个匹配的服务所在球
      const onSearchKey = (e) => {
        if (e.key !== 'Enter') return;
        const q = query.trim().toLowerCase();
        if (!q) return;
        for (const [name, rec] of Object.entries(IFACE)) {
          if (name.toLowerCase().includes(q) || (rec.zh ?? '').toLowerCase().includes(q)) {
            setFocus(rec.ball);
            setSelected(name);
            camRef.current = { q: camRef.current.q, zoom: 1 };
            return;
          }
        }
      };

      const focusBall = focus ? BY_ID[focus] : null;
      const selSvc = selected && IFACE[selected] ? { name: selected, rec: IFACE[selected] } : null;

      // 没聚焦时，搜索框输入 → 右侧显示匹配列表
      const matches = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q || focus) return [];
        const out = [];
        for (const [name, rec] of Object.entries(IFACE)) {
          if (name.toLowerCase().includes(q)) out.push({ name, rec });
          if (out.length >= 30) break;
        }
        return out;
      }, [query, focus]);

      return h('div', { className: 'kb-root' },
        h('div', { className: 'kb-top' },
          h('span', { className: 'kb-title' }, 'DSH-КБ-plugin'),
          h('span', { className: 'kb-sub' }, '插件设计局'),
          view === '3d'
            ? h('div', { className: 'kb-q' },
              h('input', {
                type: 'search',
                placeholder: '搜接口 / 服务，回车定位',
                value: query,
                onChange: (e) => setQuery(e.target.value),
                onKeyDown: onSearchKey,
              }))
            : null,
          h('button', { className: 'kb-close', type: 'button', onClick: close, title: '关闭，回到对话' }, '关闭'),
        ),
        // 主区域永远是三维；功能切换在右侧面板内
        h('div', { className: 'kb-body' },
            h('div', { className: 'kb-stage', ref: wrapRef },
              h('canvas', {
                ref: cvRef,
                style: { width: '100%', height: '100%' },
                onPointerDown: onDown,
                onPointerMove: onMove,
                onPointerUp: onUp,
                onPointerCancel: onUp,
                onPointerLeave: onLeave,
                onWheel,
                onDoubleClick: onDbl,
              }),
              h('div', { className: 'kb-crumb' },
                h('span', { className: focus ? undefined : 'kb-muted' }, '全景'),
                focusBall ? h('span', { className: 'sep' }, '/') : null,
                focusBall ? h('b', null, `${focusBall.nameEn} ${focusBall.nameZh}`) : null,
                selSvc ? h('span', { className: 'sep' }, '/') : null,
                selSvc ? h('b', null, selSvc.name) : null,
              ),
            ),
            // 左下角：16 个球的快捷跳转 + 重置视角（原型 #dock）
            h(Dock, {
              spheres: SPHERES,
              focus,
              onPick: (id) => {
                const next = id === focus ? focus : id;
                setFocus(next);
                setSelected(null);
                camRef.current = { q: camRef.current.q, zoom: 1 };
                flyTo(next);
              },
              onReset: () => {
                camRef.current = { q: quatFromEuler(1.3963, 0), zoom: 1 };
                setFocus(null);
                setSelected(null);
                flyTo(null);
              },
            }),
          // 右侧：功能切换 + 内容
          h('div', { className: 'kb-panel' },
            h('div', { className: 'kb-panelhead' },
              h('button', {
                className: 'kb-seg' + (view === '3d' ? ' on' : ''),
                onClick: () => setView('3d'),
              }, '接口'),
              h('button', {
                className: 'kb-seg' + (view === 'chain' ? ' on' : ''),
                onClick: () => setView('chain'),
              }, '插件链' + (plan.nodes.length ? ` ${plan.nodes.length}` : '')),
            ),
            view === 'chain'
              ? h(ChainView, {
                selected,          // 图里选中的服务（加节点用这个）
                chainSel,          // 链条里选中的节点（插入位置用这个）
                setChainSel,
                plan,
                setPlan,           // 已经是「改 + 落盘」的合成器
                onFocusSvc: (svc, ball) => {
                  // 链条里点节点 → 三维聚焦过去 + 选中该服务
                  const target = ball && BY_ID[ball] ? ball : (IFACE[svc]?.ball ?? null);
                  if (!target) return;
                  setFocus(target);
                  setSelected(svc);
                  camRef.current = { q: camRef.current.q, zoom: 1 };
                  flyTo(target);
                },
              })
              : (selSvc ? h(ServiceDetail, { name: selSvc.name, rec: selSvc.rec, setFocus, setSelected })
                : focusBall ? h(BallDetail, { ball: focusBall, setSelected })
                  : h(Overview, { matches, setFocus, setSelected })),
          ),
        ),
        h('div', { className: 'kb-foot' },
          view === 'chain'
            ? `节点 ${plan.nodes.length} · 边 ${plan.edges.length} · 存在浏览器本地`
            : `球 ${SCENE.summary?.spheres ?? '?'} · 服务 ${SCENE.summary?.nodeCount ?? '?'} · 键 ${SCENE.summary?.bonds ?? '?'} 组`,
          view === 'chain'
            ? ' · 点节点选中 → 再点另一个节点连边'
            : ' · 拖动旋转 / 滚轮缩放 / 点球聚焦 / 双击复位',
        ),
      );
    }

    /** 左下角：球列表 + 重置（原型 scene.html:882-915）*/
    function Dock({ spheres, focus, onPick, onReset }) {
      const client = spheres.filter((s) => s.plane === 'client').sort((a, b) => a.layer - b.layer);
      const host = spheres.filter((s) => s.plane === 'host').sort((a, b) => a.layer - b.layer);

      const btn = (s) => h('button', {
        key: s.id,
        className: 'kb-sb ' + s.plane + (focus === s.id ? ' on' : ''),
        title: `${s.nameEn} · ${s.nameZh}`,
        onClick: () => onPick(s.id),
      },
      h('span', { className: 'n' }, String(s.layer)),
      h('span', { className: 'e' }, s.nameEn || s.id),
      h('span', { className: 'z' }, s.nameZh || ''));

      return h('div', { className: 'kb-dock' },
        h('div', { className: 'col' },
          h('div', { className: 'cap' }, `绿 · client ${client.length} 层`),
          ...client.map(btn),
          h('button', { className: 'kb-reset', onClick: onReset, title: '回到全景默认视角' }, '重置视角'),
        ),
        h('div', { className: 'col' },
          h('div', { className: 'cap' }, `红 · host ${host.length} 层`),
          ...host.map(btn),
        ),
      );
    }

    /** 全景：概览 + 搜索命中 */
    function Overview({ matches, setFocus, setSelected }) {
      const kids = [];
      const byPlane = { host: 0, client: 0 };
      for (const s of SPHERES) byPlane[s.plane] = (byPlane[s.plane] ?? 0) + 1;

      kids.push(h('div', { key: 'h', className: 'kb-h' }, '概览'));
      kids.push(h('div', { key: 'r1', className: 'kb-row' },
        h('span', null, 'host 球'), h('span', { className: 'n' }, String(byPlane.host ?? 0))));
      kids.push(h('div', { key: 'r2', className: 'kb-row' },
        h('span', null, 'client 球'), h('span', { className: 'n' }, String(byPlane.client ?? 0))));
      kids.push(h('div', { key: 'r3', className: 'kb-row' },
        h('span', null, '键'), h('span', { className: 'n' }, String(BONDS.length))));
      kids.push(h('div', { key: 'r4', className: 'kb-row' },
        h('span', null, '接口索引'), h('span', { className: 'n' }, String(Object.keys(IFACE).length))));

      if (matches.length) {
        kids.push(h('div', { key: 'hm', className: 'kb-h' }, `搜索命中 ${matches.length}`));
        for (const m of matches) {
          kids.push(h('div', {
            key: 's' + m.name, className: 'kb-svc',
            onClick: () => { setFocus(m.rec.ball); setSelected(m.name); },
          },
          h('div', { className: 'nm' }, m.name),
          h('div', { className: 'sg' }, (m.rec.zh || '').slice(0, 70)),
          ));
        }
      } else {
        kids.push(h('div', { key: 'tip', className: 'kb-h' }, '操作'));
        kids.push(h('div', { key: 'tip2', className: 'kb-muted', style: { lineHeight: 1.7 } },
          '· 点球 → 聚焦该层，显示层内服务缩写',
          h('br'), '· 聚焦后再点服务点 → 看接口',
          h('br'), '· 双击空白 → 回到全景'));
      }
      return kids;
    }

    /** 聚焦一个球 */
    function BallDetail({ ball, setSelected }) {
      const kids = [];
      const svcs = Object.entries(IFACE).filter(([, r]) => r.ball === ball.id);
      kids.push(h('div', { key: 'h', className: 'kb-h' }, `${ball.nameEn} · ${ball.nameZh}`));
      if (ball.why) kids.push(h('div', { key: 'why', className: 'kb-muted', style: { lineHeight: 1.65 } }, ball.why));
      kids.push(h('div', { key: 'r1', className: 'kb-row', style: { marginTop: '8px' } },
        h('span', null, '服务'), h('span', { className: 'n' }, String(ball.nodeCount))));
      kids.push(h('div', { key: 'r2', className: 'kb-row' },
        h('span', null, '键'), h('span', { className: 'n' }, String(ball.degree ?? 0))));
      if (svcs.length) {
        kids.push(h('div', { key: 'hs', className: 'kb-h' }, `层内服务 ${svcs.length}`));
        for (const [name, rec] of svcs) {
          kids.push(h('div', {
            key: 'v' + name, className: 'kb-svc', onClick: () => setSelected(name),
          },
          h('div', { className: 'nm' }, name),
          h('div', { className: 'sg' }, (rec.zh || '').slice(0, 60)),
          ));
        }
      }
      return kids;
    }

    /** 一个服务的接口 */
    function ServiceDetail({ name, rec, setFocus, setSelected }) {
      const ball = SPHERE_NAMES?.[rec.ball];
      const kids = [];
      kids.push(h('div', { key: 'h', className: 'kb-h' },
        h('span', { style: { cursor: 'pointer' }, onClick: () => { setFocus(rec.ball); setSelected(null); } },
          ball ? `${ball.en} ›` : ''), ' ', name));
      kids.push(h('div', { key: 'meta', className: 'kb-muted', style: { fontSize: '11px' } },
        `${rec.n} 个接口${rec.pkg ? ' · ' + rec.pkg : ''}`));
      if (rec.zh) kids.push(h('div', { key: 'zh', style: { marginTop: '6px', lineHeight: 1.65 } }, rec.zh));

      // 依赖 / 被依赖：分组 + 计数 + 筛选 + chip 可点（原型 renderDeps）
      kids.push(h(DepsBox, { key: 'deps', svc: name, rec, setSelected }));

      if (rec.m?.length) {
        kids.push(h('div', { key: 'hm', className: 'kb-h' }, `接口 ${rec.m.length}`));
        for (const m of rec.m) {
          kids.push(h('div', { key: 'm' + m.n, className: 'kb-svc', style: { cursor: 'default' } },
            h('div', { className: 'nm' }, m.n, m.c ? null : h('span', { className: 'kb-muted' }, ' ·待补')),
            h('div', { className: 'sg' }, m.s || ''),
            m.z ? h('div', { className: 'sg', style: { color: 'var(--dsw-alias-label-primary)', opacity: .8 } }, m.z) : null,
          ));
        }
      }
      return kids;
    }

    /**
     * 依赖 / 被依赖区（移植原型 renderDeps，scene.html:932-991）
     *   每个区：标题带计数 → chip 列表 → 超过 4 个给一个筛选框
     *   chip 可点：点了就 selectNode(那个服务)
     */
    function DepsBox({ svc, rec, setSelected }) {
      const outs = rec.deps ?? [];
      const ins = rec.by ?? [];

      const [filterO, setFilterO] = React.useState('');
      const [filterI, setFilterI] = React.useState('');

      const chip = (name, kind, confidence) => {
        const known = !!IFACE[name];
        return h('span', {
          key: kind + name,
          className: 'kb-chip',
          style: {
            cursor: known ? 'pointer' : 'default',
            opacity: known ? 1 : 0.45,
            borderColor: confidence === 'direct'
              ? (kind === 'o' ? '#1e4b55' : '#5a3a1e')
              : undefined,
            color: confidence === 'direct'
              ? (kind === 'o' ? '#78c4d4' : '#e0965a')
              : 'var(--dsw-alias-label-secondary)',
          },
          title: (confidence === 'direct' ? '直接调用' : '推断边') + (known ? '' : ' · 无接口数据'),
          onClick: () => { if (IFACE[name]) setSelected(name); },
        }, name);
      };

      const section = (key, label, list, kind, filter, setFilter) => {
        const q = filter.trim().toLowerCase();
        const sorted = [...list].sort(
          (a, b) => (a.c === 'direct' ? 0 : 1) - (b.c === 'direct' ? 0 : 1),
        );
        const shown = q
          ? sorted.filter((d) => (kind === 'o' ? d.to : d.from).toLowerCase().includes(q))
          : sorted;

        return h('div', { key, style: { marginTop: '10px' } },
          h('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' } },
            h('span', { style: { fontSize: '10px', color: 'var(--dsw-alias-label-secondary)' } },
              label + ' · ' + list.length),
            list.length > 4
              ? h('input', {
                className: 'kb-depfilter',
                value: filter,
                placeholder: '筛' + label,
                onChange: (e) => setFilter(e.target.value),
                style: {
                  flex: '1', maxWidth: '110px', fontSize: '10px',
                  padding: '1px 5px', borderRadius: '4px',
                  border: '1px solid var(--dsw-alias-border-l1)',
                  background: 'var(--dsw-alias-bg-base)',
                  color: 'var(--dsw-alias-label-primary)', outline: 'none',
                },
              })
              : null,
          ),
          h('div', { style: { display: 'flex', gap: '5px', flexWrap: 'wrap', maxHeight: '86px', overflowY: 'auto' } },
            shown.length
              ? shown.map((d) => chip(kind === 'o' ? d.to : d.from, kind, d.c))
              : h('span', { className: 'kb-chip', style: { cursor: 'default', opacity: 0.5 } }, '无')),
          q ? h('div', { style: { fontSize: '9.5px', color: 'var(--dsw-alias-label-secondary)', marginTop: '2px' } },
            shown.length + ' 个匹配') : null,
        );
      };

      return h('div', null,
        section('o', '依赖', outs, 'o', filterO, setFilterO),
        section('i', '被依赖', ins, 'i', filterI, setFilterI),
      );
    }

    // ══ 插件链视图（移植原型 scene.html:1367-1628）════════════
    const CHAIN_NW = 104, CHAIN_NH = 48, CHAIN_GX = 44, CHAIN_GY = 8;

    function ChainView({ selected, chainSel, setChainSel, plan, setPlan, onFocusSvc }) {
      const [selEdge, setSelEdge] = React.useState(null);  // 选中的边序号
      const [linkFrom, setLinkFrom] = React.useState(null); // 「连到…」模式的起点
      const [draft, setDraft] = React.useState(null);      // 方案 Markdown
      const [toast, setToast] = React.useState(null);
      const toastTimer = React.useRef(null);

      // 链条里选中哪个节点，由父组件持有（chainSel）
      const sel = chainSel;
      const setSel = setChainSel;

      const say = (msg) => {
        setToast(msg);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(null), 2600);
      };

      const nodeById = (id) => plan.nodes.find((n) => n.id === id) || null;

      const addEdge = (from, to, logic) => {
        if (from === to) return false;
        if (plan.edges.some((e) => e.from === from && e.to === to)) return false;
        // 防环：to 不能已经能走到 from
        const reach = (a, b, seen = new Set()) => {
          if (a === b) return true;
          if (seen.has(a)) return false;
          seen.add(a);
          return plan.edges.filter((e) => e.from === a).some((e) => reach(e.to, b, seen));
        };
        if (reach(to, from)) { say('这条边会成环，没加'); return false; }
        setPlan({ ...plan, edges: [...plan.edges, { from, to, logic }] });
        return true;
      };

      /** 加节点并连一条 A 边（原型 addNodeWithEdge，scene.html:1679-1727）*/
      const addNodeWithEdge = (dir0) => {
        const svc = selected;      // 加的是「图里选中的那个服务」
        if (!svc) { say('先在三维里点一个服务'); return; }
        const cur = sel ? nodeById(sel) : null;   // 插入位置 = 「链条里选中的节点」
        const method = null;

        // 空链条 / 没选中节点时，前后都等价于「加第一个」—— 不玩方向
        const dir = cur ? dir0 : 'after';

        // ① 自检：相邻位置已经有同一个模块 → 复用，只连边
        if (cur) {
          const hit = findUpstreamSame(plan.nodes, plan.edges, cur.id, dir, svc, method);
          if (hit) {
            let from, to;
            if (dir === 'after') { from = cur.id; to = hit.id; }
            else { from = hit.id; to = cur.id; }
            if (plan.edges.some((e) => e.from === from && e.to === to)) {
              say('这条边已经有了，直接选中它');
            } else {
              if (!addEdge(from, to, 'a')) return;
              say('链条里已经有 ' + svc + '，直接连回它（没建重复节点）');
            }
            setSel(null);
            const idx = plan.edges.findIndex((x) => x.from === from && x.to === to);
            setSelEdge(idx >= 0 ? idx : null);
            return;
          }
        }

        // ② 没有相邻的同名节点 → 正常新建
        const seq = plan.seq + 1;
        const node = {
          id: 'n' + seq,
          svc,
          method,
          ball: IFACE[svc]?.ball ?? null,
        };
        const nodes = [...plan.nodes, node];
        let edges = plan.edges;
        if (cur) {
          const reach = (a, b, seen = new Set()) => {
            if (a === b) return true;
            if (seen.has(a)) return false;
            seen.add(a);
            return edges.filter((e) => e.from === a).some((e) => reach(e.to, b, seen));
          };
          const from = dir === 'after' ? cur.id : node.id;
          const to = dir === 'after' ? node.id : cur.id;
          if (!reach(to, from) && !edges.some((x) => x.from === from && x.to === to)) {
            edges = [...edges, { from, to, logic: 'a' }];
          }
        }
        setPlan({ ...plan, seq, nodes, edges });
        setSel(node.id);
        setSelEdge(null);
      };

      const removeNode = () => {
        const id = sel;
        if (!id) return;
        const n = nodeById(id);
        const wasIdx = plan.nodes.findIndex((x) => x.id === id);
        const nodes = plan.nodes.filter((x) => x.id !== id);
        const edges = plan.edges.filter((x) => x.from !== id && x.to !== id);
        setPlan({ ...plan, nodes, edges });
        setSelEdge(null);
        setSel(nodes.length
          ? (nodes[Math.min(wasIdx, nodes.length - 1)] ?? nodes[0]).id
          : null);
        if (n) say('已删除 ' + n.svc);
      };

      const toggleEdgeLogic = (i) => {
        const edges = plan.edges.slice();
        if (!edges[i]) return;
        edges[i] = { ...edges[i], logic: edges[i].logic === 'a' ? 'o' : 'a' };
        setPlan({ ...plan, edges });
      };

      const removeEdge = (i) => {
        if (!plan.edges[i]) return;
        const edges = plan.edges.slice();
        edges.splice(i, 1);
        setPlan({ ...plan, edges });
        setSelEdge(null);
      };

      const { cols } = layoutPlan(plan.nodes, plan.edges);
      const pos = new Map();
      cols.forEach((col, ci) => col.forEach((n, ri) => {
        pos.set(n.id, { x: ci * (CHAIN_NW + CHAIN_GX), y: ri * (CHAIN_NH + CHAIN_GY) });
      }));
      const maxRows = Math.max(1, ...cols.map((c) => c.length));
      const W = cols.length * (CHAIN_NW + CHAIN_GX) - CHAIN_GX;
      const H = maxRows * (CHAIN_NH + CHAIN_GY) - CHAIN_GY;

      // 边的路径：源右边中点 → 目标左边中点，中间一段平滑
      const edgePath = (a, b) => {
        const A = pos.get(a), B = pos.get(b);
        if (!A || !B) return '';
        const x1 = A.x + CHAIN_NW, y1 = A.y + CHAIN_NH / 2;
        const x2 = B.x, y2 = B.y + CHAIN_NH / 2;
        const dx = Math.max(18, (x2 - x1) * 0.5);
        return 'M' + x1 + ' ' + y1 + ' C' + (x1 + dx) + ' ' + y1 + ', ' + (x2 - dx) + ' ' + y2 + ', ' + x2 + ' ' + y2;
      };

      const ballShort = (ball) => {
        if (!ball) return '—';
        const nm = SPHERE_NAMES?.[ball];
        return nm ? nm.en : ball;
      };

      const selNode = sel ? nodeById(sel) : null;
      const edge = selEdge !== null ? plan.edges[selEdge] : null;

      // ── 提示行（原型 renderChainHint）──
      let hint;
      if (!plan.nodes.length) {
        hint = '在右侧选一个模块，然后用「＋ 后续」把它加进来。';
      } else if (linkFrom) {
        hint = '连到已有：点任意一个节点作为目标';
      } else if (!selNode) {
        hint = '共 ' + plan.nodes.length + ' 个节点、' + plan.edges.length + ' 条边。点节点看它和谁相连。边上的 A 是「必须等它」，O 是「有就带上、不等」。';
      } else {
        const ins = plan.edges.filter((x) => x.to === selNode.id);
        const outs = plan.edges.filter((x) => x.from === selNode.id);
        const nm = (id) => (nodeById(id)?.svc ?? id);
        const parts = [];
        if (ins.length) parts.push('被 ' + ins.map((x) => nm(x.from) + '(' + (x.logic === 'a' ? 'A' : 'O') + ')').join('、') + ' 触发');
        if (outs.length) parts.push('触发 ' + outs.map((x) => nm(x.to) + '(' + (x.logic === 'a' ? 'A' : 'O') + ')').join('、'));
        hint = parts.length
          ? selNode.svc + '：' + parts.join('；')
          : selNode.svc + ' 还是孤立的，前后都没有连接。';
      }

      const canAdd = !!selected;
      const canLink = plan.nodes.length >= 2 && !!selNode;

      return h('div', { className: 'kb-chain', style: { position: 'relative' } },

        // ── 配置名 + 当前选中的模块 ──
        h('div', { className: 'kb-ctl' },
          h('input', {
            type: 'text',
            value: plan.name,
            onChange: (e) => setPlan({ ...plan, name: e.target.value }),
            placeholder: '配置名',
            style: { flex: '0 1 130px' },
          }),
          h('span', {
            style: {
              fontSize: '11.5px', color: 'var(--dsw-alias-label-secondary)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            },
          }, selected ? '当前：' + selected : '未选服务'),
        ),
        h('div', { className: 'kb-ctl' },
          h('button', {
            className: 'kb-btn',
            disabled: plan.nodes.length === 0,
            onClick: () => setDraft(genDraft(plan)),
          }, '生成方案'),
        ),

        // ── SVG 链图（原型 renderChain，scene.html:1386-1442）──
        plan.nodes.length === 0
          ? h('div', { className: 'kb-emptychain' }, hint)
          : h('div', {
            style: {
              overflow: 'auto',
              maxHeight: '46vh',
              border: '1px solid var(--dsw-alias-border-l1)',
              borderRadius: '8px',
              background: 'var(--dsw-alias-bg-base)',
              marginBottom: '10px',
            },
          },
          h('svg', {
            width: W + 4,
            height: H + 6,
            viewBox: '0 0 ' + (W + 4) + ' ' + (H + 6),
            style: { display: 'block' },
          },
          h('defs', null,
            h('marker', {
              id: 'kb-ar-a', viewBox: '0 0 10 10', refX: 9, refY: 5,
              markerWidth: 5, markerHeight: 5, orient: 'auto-start-reverse',
            }, h('path', { d: 'M2 1L8 5L2 9', fill: 'none', stroke: '#5b6470', strokeWidth: 1.6, strokeLinecap: 'round' })),
            h('marker', {
              id: 'kb-ar-o', viewBox: '0 0 10 10', refX: 9, refY: 5,
              markerWidth: 5, markerHeight: 5, orient: 'auto-start-reverse',
            }, h('path', { d: 'M2 1L8 5L2 9', fill: 'none', stroke: '#c9a227', strokeWidth: 1.6, strokeLinecap: 'round' })),
          ),
          // 边
          ...plan.edges.map((ed, i) => {
            const d = edgePath(ed.from, ed.to);
            if (!d) return null;
            const A = pos.get(ed.from), B = pos.get(ed.to);
            const mx = (A.x + CHAIN_NW + B.x) / 2;
            const my = (A.y + B.y + CHAIN_NH) / 2;
            const isOr = ed.logic === 'o';
            const isSel = selEdge === i;
            return h('g', {
              key: 'e' + i,
              onClick: (ev) => {
                ev.stopPropagation();
                if (!plan.edges[i]) return;
                setSelEdge(selEdge === i ? null : i);
                if (selEdge !== i) setSel(null);
              },
              style: { cursor: 'pointer' },
            },
            h('path', {
              d,
              fill: 'none',
              stroke: isSel ? 'var(--dsw-alias-brand-primary)' : (isOr ? '#c9a227' : '#5b6470'),
              strokeWidth: isSel ? 2.2 : 1.4,
              markerEnd: 'url(#kb-ar-' + (isOr ? 'o' : 'a') + ')',
            }),
            h('circle', {
              cx: mx, cy: my, r: 8,
              fill: 'var(--dsw-alias-bg-layer-1)',
              stroke: isOr ? '#c9a227' : '#5b6470',
              strokeWidth: 1.4,
            }),
            h('text', {
              x: mx, y: my, textAnchor: 'middle', dominantBaseline: 'central',
              fontSize: 9, fill: isOr ? '#c9a227' : '#8b98a8',
              style: { fontFamily: 'ui-monospace,Consolas,monospace' },
            }, isOr ? 'O' : 'A'));
          }),
          // 节点
          ...plan.nodes.map((n, i) => {
            const p = pos.get(n.id);
            if (!p) return null;
            const isSel = sel === n.id;
            const isFrom = linkFrom === n.id;
            return h('g', {
              key: n.id,
              onClick: () => {
                if (linkFrom) {
                  if (n.id === linkFrom) { setLinkFrom(null); return; }
                  addEdge(linkFrom, n.id, 'a');
                  setLinkFrom(null);
                  setSel(n.id);
                  return;
                }
                setSel(n.id);
                setSelEdge(null);
                // 三维跟着跳过去：聚焦该服务所在球、选中它、画出它的依赖线
                if (onFocusSvc) onFocusSvc(n.svc, n.ball);
              },
              style: { cursor: 'pointer' },
            },
            h('rect', {
              x: p.x, y: p.y, width: CHAIN_NW, height: CHAIN_NH, rx: 6,
              fill: 'var(--dsw-alias-bg-layer-1)',
              stroke: isFrom ? '#c9a227' : isSel ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-border-l1)',
              strokeWidth: isFrom || isSel ? 1.8 : 1,
            }),
            h('text', { x: p.x + 8, y: p.y + 14, fontSize: 9, fill: 'var(--dsw-alias-label-secondary)' },
              String(i + 1).padStart(2, '0') + ' · ' + ballShort(n.ball)),
            h('text', { x: p.x + 8, y: p.y + 31, fontSize: 11.5, fill: 'var(--dsw-alias-label-primary)', style: { fontFamily: '"Times New Roman","SimSun",serif' } },
              n.svc),
            n.method
              ? h('text', { x: p.x + 8, y: p.y + 43, fontSize: 9, fill: 'var(--dsw-alias-label-secondary)' }, n.method)
              : null);
          }),
          ),
        ),

        // ── 提示行 ──
        h('div', { style: { fontSize: '11px', color: 'var(--dsw-alias-label-secondary)', lineHeight: 1.7, marginBottom: '8px' } }, hint),

        // ── 操作栏（原型 renderOps，scene.html:1550-1613）──
        edge
          ? h('div', null,
            h('div', { style: { fontSize: '11.5px', marginBottom: '6px' } },
              '边：' + (nodeById(edge.from)?.svc ?? '?') + ' → ' + (nodeById(edge.to)?.svc ?? '?'),
              h('span', { style: { color: 'var(--dsw-alias-label-secondary)' } },
                ' · 当前 ' + (edge.logic === 'o' ? 'O 可选（有就带上）' : 'A 必要（必须等到）'))),
            h('div', { className: 'kb-ctl' },
              h('button', { className: 'kb-btn', onClick: () => toggleEdgeLogic(selEdge) },
                '⇄ 换成 ' + (edge.logic === 'o' ? 'A 必要' : 'O 可选')),
              h('button', { className: 'kb-btn', onClick: () => removeEdge(selEdge) }, '⌫ 删除这条边'),
            ),
            h('div', { style: { fontSize: '10.5px', color: 'var(--dsw-alias-label-secondary)', lineHeight: 1.6 } },
              'A：必须等它完成才触发下游；O：跑起来就存着，下游有就用、没跑完也照走。'),
          )
          : h('div', null,
            h('div', { className: 'kb-ctl' },
              h('button', { className: 'kb-btn primary', disabled: !canAdd, onClick: () => addNodeWithEdge('after') }, '＋ 后续'),
              h('button', { className: 'kb-btn primary', disabled: !canAdd, onClick: () => addNodeWithEdge('before') }, '＋ 前置'),
              h('button', {
                className: 'kb-btn',
                disabled: !canLink,
                onClick: () => setLinkFrom(linkFrom ? null : sel),
              }, linkFrom ? '取消连接' : '⇢ 连到…'),
            ),
            h('div', { className: 'kb-ctl' },
              h('button', { className: 'kb-btn', disabled: !selNode, onClick: removeNode }, '⌫ 删除节点'),
            ),
            h('div', { style: { fontSize: '10.5px', color: 'var(--dsw-alias-label-secondary)', lineHeight: 1.6 } },
              linkFrom
                ? '连到已有：点上方目标节点'
                : '「后续 / 前置」会新建节点并连一条 A 边。相邻已有同一模块时不会重复建，直接连上。点一条边可以选中它，再在这里切换 A/O。'),
          ),

        // ── toast ──
        toast
          ? h('div', {
            style: {
              position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '8px',
              background: 'var(--dsw-alias-bg-overlay)', border: '1px solid var(--dsw-alias-border-l2)',
              color: 'var(--dsw-alias-label-primary)', borderRadius: '7px',
              padding: '7px 12px', fontSize: '11.5px', zIndex: 10,
            },
          }, toast)
          : null,

        // ── 方案弹窗 ──
        draft
          ? h('div', {
            className: 'kb-modal',
            onClick: (e) => { if (e.target === e.currentTarget) setDraft(null); },
          },
          h('div', { className: 'kb-modalbox' },
            h('div', { className: 'kb-modalhd' },
              h('b', null, '插件方案 · ' + (plan.name || '未命名')),
              h('span', { className: 'sp' }),
              h('button', { className: 'kb-btn', onClick: () => setDraft(null) }, '关闭'),
            ),
            h('pre', { className: 'kb-modalbody' }, draft),
            h('div', { className: 'kb-modalfoot' },
              h('button', {
                className: 'kb-btn',
                onClick: async () => {
                  try { await navigator.clipboard.writeText(draft); } catch { /* 忽略 */ }
                },
              }, '复制全文'),
              h('button', {
                className: 'kb-btn primary',
                onClick: () => {
                  try {
                    const blob = new Blob([draft], { type: 'text/markdown' });
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = (slugify(plan.name) || 'plan') + '.md';
                    a.click();
                    URL.revokeObjectURL(a.href);
                  } catch (e) {
                    console.error('[kb-bureau] 下载失败', e);
                  }
                },
              }, '下载 .md'),
            ),
          ))
          : null,
      );
    }


    // ══ 侧栏图标 ═══════════════════════════════════════════
    function BureauIcon({ size = 16, active = false }) {
      return h('svg', {
        width: size, height: size, viewBox: '0 0 64 64',
        'aria-hidden': true,
        style: { display: 'block', opacity: active ? 1 : 0.75 },
      },
      h('g', { fill: 'none', stroke: 'currentColor', strokeWidth: 3, opacity: 0.8 },
        h('line', { x1: 32, y1: 33, x2: 20, y2: 17 }),
        h('line', { x1: 32, y1: 33, x2: 47, y2: 21 }),
        h('line', { x1: 32, y1: 33, x2: 18, y2: 48 }),
        h('line', { x1: 32, y1: 33, x2: 46, y2: 47 })),
      h('circle', { cx: 32, cy: 33, r: 9, fill: 'currentColor' }),
      h('circle', { cx: 20, cy: 17, r: 6, fill: 'currentColor', opacity: 0.75 }),
      h('circle', { cx: 47, cy: 21, r: 6, fill: 'currentColor', opacity: 0.75 }),
      h('circle', { cx: 18, cy: 48, r: 6, fill: 'currentColor', opacity: 0.75 }),
      h('circle', { cx: 46, cy: 47, r: 6, fill: 'currentColor', opacity: 0.75 }));
    }

    // ══ 插件体 ══════════════════════════════════════════════
    const plugin = {
      inject: ['slots', 'layout', 'locale'],
      apply(ctx) {
        ctx.effect(() => {
          const id = 'dsh-kb-plugin';
          const prev = document.querySelector(`style[data-plugin="${id}"]`);
          if (prev) prev.remove();
          const el = document.createElement('style');
          el.dataset.plugin = id;
          el.dataset.pluginCss = `${id}/client.css`;
          el.textContent = CSS;
          document.head.appendChild(el);
          return () => { el.remove(); };
        }, 'kb-bureau: styles');

        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist',
          id: PANEL_ID,
          order: 100,
          label: () => '插件设计局',
        }, BureauIcon));

        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: PANEL_ID,
        }, BureauPanel));

        console.log('[kb-bureau] applied', {
          spheres: SPHERES.length,
          bonds: BONDS.length,
          services: Object.keys(IFACE).length,
        });
      },
    };

    return plugin;
  },
});
