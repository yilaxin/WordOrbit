# 词轨 WordOrbit 项目约定

## 用户已授权的持续发布流程

用户于 2026-10-20 明确要求：之后每次完成本项目更新，都自动同步到 GitHub，不必再次询问是否同步。此约定仅适用于本项目 `https://github.com/yilaxin/WordOrbit`，不是定时任务。

- 对完成的应用功能、修复、界面或性能更新，运行相关测试，递增适当版本号，更新说明，提交本次任务相关改动并正常推送 `main` 和版本标签。不得强推或覆盖其他人的提交；遇到分歧先保留现场并报告。
- 同时提供新的 Windows ARM64 Release 下载包和 SHA-256 校验附件；先上传到草稿，核对附件后再公开。不要覆盖旧版发布，也不要删除旧版原书 PDF。
- `scripts/Publish.ps1` 生成与项目版本号一致的桌面程序；完成提交后应重新构建，使程序版本元数据包含实际提交 SHA。
- 推送前检查暂存清单、机密与无关改动。个人学习记录、WebView2 用户目录、备份、登录密钥、`.build` 与临时测试资料不得上传。ZIP 只放 GitHub Release，不进 Git 历史。原始词库及本项目所用主题素材可以同步。
- 推送源码和标签后使用 `scripts/Publish-GitHubRelease.ps1 -Publish` 打包、核对与发布；不带 `-Publish` 时只准备本地包。重复运行只复用内容一致的附件，不覆盖同名不一致的公开文件。
- 最终核实远端提交、标签、公开 Release 及校验信息。只有确认成功后才能说“已同步”。权限、网络或测试阻塞时，报告已完成和未完成的部分，不声称同步成功，也不扩大权限范围。
- 纯说明性小改动可以只同步源码及文档，不必为没有程序变化的内容重复发布安装包。

## 本地验证与数据保护

- 浏览器测试使用独立的 Playwright 上下文；桌面自检必须传入独立的 `--data-dir`，不能拿用户真实学习目录做实验。
- 常用测试：`node --test tests/pronunciation-visibility.test.cjs`、`node tests/constellation.browser.cjs`、`node tests/memory.browser.cjs`（浏览器测试需要 Playwright 和 Microsoft Edge）。
- 不强制关闭用户正在使用的 App。用新版本文件夹发布；桌面入口切换前先通过隔离自检，并告诉用户重新打开后生效。
- 原始主题插画位于 `Website/assets/constellation/`，运行时使用其 `display/` 显示资源；用 `scripts/Build-DisplayAssets.ps1` 生成，不覆盖原图。
- 星云文章正文、笔记、佳句、生词、阅读位置和私人练习只保存在本机 IndexedDB `wordorbit-nebula-private-v1`。不得写进词库、源码、截图、Release 或自动同步到 GitHub；星云备份仅由用户手动导出。测试只使用合成文章和隔离上下文。雅思题库的导出、清空和练习不应顺带改动星云数据。
- “我的词库”内容及其学习记录只存本机 IndexedDB `wordorbit-mywords-private-v1`，不得同步到 GitHub 或打进 Release。首页星图只读取私人词库的汇总数字；正文词条按需加载。使用独立备份，原题库的导出、清空、原书遍历和星云练习不应修改它。批量添加不得静默覆盖已有私人释义和记录。
- 生活彗星只存本机 IndexedDB `wordorbit-comets-private-v1`，私人场景、英语、日期和备份不得同步到 GitHub 或 Release。独立备份合并恢复不覆盖既有内容；其他板块导出与清空不得影响它。仅进入彗星页面加载当天分片（每片最多 12 条）及绘图资源，离开时销毁图形、监听和私有正文。测试仅使用合成生活片段。
- 三维主题星系只展示 22 个公共主题及一个可选私人星球，私人星球只读汇总数字。`constellation-space.js` 是确定性三维行为层。v1.6.1 起统一使用原精细插画为唯一主体，不能再缩为小徽标并叠加替代模型；机头/朝向校准在 `constellation-art.js`。中央恒星可保留原主题身份徽标。环绕关系只用于视觉，不改变词库归属。列表或离开首页时移除场景画布、背景和星体节点，隐藏/离屏时停止动画。主题练习、原书随机遍历和私有数据库相互独立。维护时运行 `constellation-space.test.cjs`、`constellation-universe.browser.cjs` 及原星图和私人词库回归。
