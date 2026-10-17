# 安装词轨 WordOrbit

1. 在项目的 GitHub Releases 下载 `WordOrbit-v1.2.0-win-arm64.zip`。
2. 将 ZIP **完整解压**到固定文件夹。
3. 打开 `WordOrbit-win-arm64-v1.2.0` 文件夹，双击 `VocabDesk.exe`。
4. 如提示缺少 WebView2 Runtime，安装 Microsoft Edge WebView2 Runtime 后重试。

当前只提供 Windows ARM64 版本。不要单独移动 `VocabDesk.exe`，它需要同目录下的 `Website`、`Assets` 及 .NET 运行文件。首次练习无需联网或注册账号。

学习记录保存在 `%LOCALAPPDATA%\VocabDesk\WebView2`。词库页可导出 JSON 备份；旧网页版用户可在应用右上角 `⋯` 中导入旧数据。

项目介绍、题型和资料来源见仓库的 `README.md` 与 `THIRD_PARTY_NOTICES.md`。

从旧版升级时，关闭旧版程序，再启动新版即可沿用同一台电脑上的桌面版学习记录。建议升级前先导出 JSON 备份；不要同时运行两个版本进行练习。

需要核对词表来源的读者，可在项目的 v1.1.1 GitHub Release 另行下载 `IELTS-Vocabulary-Source-Book.pdf`；该 PDF 不是运行程序所需文件。
