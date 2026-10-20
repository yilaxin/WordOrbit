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
