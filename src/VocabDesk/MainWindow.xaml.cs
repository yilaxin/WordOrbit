using Microsoft.Win32;
using Microsoft.Web.WebView2.Core;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Text.Json;
using System.Windows;
using System.Windows.Interop;

namespace VocabDesk;

public partial class MainWindow : Window
{
    private const string AppHost = "vocabdesk.test";
    private const string StateKey = "vocab-offline-state-v1";
    private const string CatalogKey = "vocab-offline-catalog-v1";
    private bool ready;
    private readonly string? testOutput;
    private readonly string? testImportPath;
    private bool testImportApplied;

    [DllImport("dwmapi.dll")]
    private static extern int DwmSetWindowAttribute(nint hwnd, int attribute, ref int value, int size);

    public MainWindow()
    {
        InitializeComponent();
        var args = Environment.GetCommandLineArgs();
        testOutput = ArgumentValue(args, "--self-test");
        testImportPath = ArgumentValue(args, "--self-test-import");
        if (testOutput is not null)
        {
            ShowInTaskbar = false;
            ShowActivated = false;
            WindowState = WindowState.Minimized;
        }
        SourceInitialized += (_, _) => ApplyDarkTitleBar();
        Loaded += async (_, _) => await InitializeBrowserAsync();
    }

    private void ApplyDarkTitleBar()
    {
        try
        {
            var hwnd = new WindowInteropHelper(this).Handle;
            var enabled = 1;
            var caption = 0x20120B; // Windows COLORREF for #0B1220.
            var text = 0xFFFFFF;
            DwmSetWindowAttribute(hwnd, 20, ref enabled, sizeof(int));
            DwmSetWindowAttribute(hwnd, 35, ref caption, sizeof(int));
            DwmSetWindowAttribute(hwnd, 36, ref text, sizeof(int));
        }
        catch { /* Older Windows versions can keep their normal title bar. */ }
    }

    private static string? ArgumentValue(string[] args, string name)
    {
        var index = Array.IndexOf(args, name);
        return index >= 0 && index + 1 < args.Length ? args[index + 1] : null;
    }

    private async Task InitializeBrowserAsync()
    {
        try
        {
            var website = Path.Combine(AppContext.BaseDirectory, "Website");
            if (!File.Exists(Path.Combine(website, "index.html")))
                throw new FileNotFoundException("程序缺少随附的词库网页文件。请完整解压整个程序文件夹。", website);

            var args = Environment.GetCommandLineArgs();
            var appData = ArgumentValue(args, "--data-dir") ??
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "VocabDesk");
            Directory.CreateDirectory(appData);
            var environment = await CoreWebView2Environment.CreateAsync(userDataFolder: Path.Combine(appData, "WebView2"));
            await Browser.EnsureCoreWebView2Async(environment);
            Browser.CoreWebView2.SetVirtualHostNameToFolderMapping(AppHost, website, CoreWebView2HostResourceAccessKind.DenyCors);
            Browser.CoreWebView2.NavigationStarting += OnNavigationStarting;
            Browser.CoreWebView2.NewWindowRequested += OnNewWindowRequested;
            Browser.CoreWebView2.WebMessageReceived += OnWebMessageReceived;
            Browser.CoreWebView2.NavigationCompleted += OnNavigationCompleted;
            Browser.CoreWebView2.Settings.AreDevToolsEnabled = false;
            Browser.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
            Browser.CoreWebView2.Navigate($"https://{AppHost}/index.html?desktop=1");
        }
        catch (Exception error)
        {
            if (testOutput is not null) { await FinishSelfTestAsync($"ERROR: {error}"); return; }
            MessageBox.Show(this, $"无法打开英语学习桌面版：\n\n{error.Message}\n\n请确认 WebView2 运行环境已安装，且程序文件夹没有缺失。", "启动失败", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }

    private async void OnNavigationCompleted(object? sender, CoreWebView2NavigationCompletedEventArgs e)
    {
        if (!e.IsSuccess)
        {
            if (testOutput is not null) await FinishSelfTestAsync($"ERROR: navigation {e.WebErrorStatus}");
            else MessageBox.Show(this, "词库页面未能加载。请确认程序文件夹完整。", "加载失败", MessageBoxButton.OK, MessageBoxImage.Error);
            return;
        }
        ready = true;
        if (testOutput is not null)
        {
            try
            {
                if (testImportPath is not null && !testImportApplied)
                {
                    testImportApplied = true;
                    var raw = await File.ReadAllTextAsync(testImportPath);
                    var imported = await Browser.ExecuteScriptAsync(BuildImportScript(raw));
                    if (imported != "true") throw new InvalidOperationException("Test import was not acknowledged.");
                    return;
                }
                var brandReady = await Browser.ExecuteScriptAsync("document.title.includes('词轨 WordOrbit') && document.querySelector('.wordorbit-mark')?.complete && document.querySelector('.wordorbit-mark')?.naturalWidth > 0 && document.querySelector('.wordorbit-wordmark strong')?.textContent === 'WordOrbit'");
                if (brandReady != "true" || !Title.Contains("词轨 WordOrbit"))
                    throw new InvalidOperationException("WordOrbit branding did not load correctly.");
                var result = await Browser.ExecuteScriptAsync("JSON.stringify({title:document.title,wordCount:state.words.length,homeVisible:document.querySelector('#view-home')?.classList.contains('active'),desktopMenu:!!document.querySelector('#desktopMenuButton'),exampleCount:Object.keys(window.EXAMPLE_SENTENCES||{}).length,offline:!document.querySelector('script[src^=\"http\"]'),attemptCount:state.attempts.length,importedSeen:state.records['seed-1-1']?.seen||0})");
                await FinishSelfTestAsync(JsonSerializer.Deserialize<string>(result) ?? "ERROR: empty script result");
            }
            catch (Exception error) { await FinishSelfTestAsync($"ERROR: {error}"); }
        }
    }

    private async Task FinishSelfTestAsync(string result)
    {
        if (testOutput is not null)
        {
            await File.WriteAllTextAsync(testOutput, result);
            Application.Current.Shutdown();
        }
    }

    private void OnNavigationStarting(object? sender, CoreWebView2NavigationStartingEventArgs e)
    {
        if (IsAppUrl(e.Uri)) return;
        e.Cancel = true;
        OpenExternalUrl(e.Uri);
    }

    private void OnNewWindowRequested(object? sender, CoreWebView2NewWindowRequestedEventArgs e)
    {
        e.Handled = true;
        OpenExternalUrl(e.Uri);
    }

    private static bool IsAppUrl(string? url) =>
        Uri.TryCreate(url, UriKind.Absolute, out var uri) &&
        uri.Scheme == Uri.UriSchemeHttps &&
        uri.Host.Equals(AppHost, StringComparison.OrdinalIgnoreCase);

    private static void OpenExternalUrl(string? url)
    {
        if (!Uri.TryCreate(url, UriKind.Absolute, out var uri) ||
            (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps)) return;
        try { Process.Start(new ProcessStartInfo(uri.AbsoluteUri) { UseShellExecute = true }); }
        catch { /* External links are optional; the offline app stays usable. */ }
    }

    private async void OnWebMessageReceived(object? sender, CoreWebView2WebMessageReceivedEventArgs e)
    {
        if (!ready || !IsAppUrl(e.Source)) return;
        string action;
        try { action = e.TryGetWebMessageAsString(); }
        catch { return; }
        if (action == "import") await ImportDataAsync();
        else if (action == "old-site") OpenOldSite();
    }

    private void OpenOldSite()
    {
        var oldSite = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory), "雅思词汇离线站", "index.html");
        if (!File.Exists(oldSite))
        {
            MessageBox.Show(this, "桌面上的旧网页文件夹未找到。桌面版仍可独立使用。", "旧网页未找到", MessageBoxButton.OK, MessageBoxImage.Information);
            return;
        }
        Process.Start(new ProcessStartInfo(oldSite) { UseShellExecute = true });
    }

    private async Task ImportDataAsync()
    {
        if (!ready || Browser.CoreWebView2 is null) return;
        var dialog = new OpenFileDialog
        {
            Title = "选择旧网页导出的 vocab-offline-export.json",
            Filter = "词库备份 (*.json)|*.json|所有文件 (*.*)|*.*",
            CheckFileExists = true
        };
        if (dialog.ShowDialog(this) != true) return;

        string raw;
        try
        {
            raw = await File.ReadAllTextAsync(dialog.FileName);
            using var payload = JsonDocument.Parse(raw);
            var root = payload.RootElement;
            if (root.ValueKind != JsonValueKind.Object ||
                !root.TryGetProperty("words", out var words) || words.ValueKind != JsonValueKind.Array || words.GetArrayLength() == 0 ||
                !root.TryGetProperty("records", out var records) || records.ValueKind != JsonValueKind.Object ||
                !root.TryGetProperty("attempts", out var attempts) || attempts.ValueKind != JsonValueKind.Array)
                throw new InvalidDataException("这不是旧网页导出的完整学习数据 JSON。请在旧网页的“浏览词库”中重新导出。 ");
        }
        catch (Exception error)
        {
            MessageBox.Show(this, error.Message, "无法导入", MessageBoxButton.OK, MessageBoxImage.Warning);
            return;
        }

        if (MessageBox.Show(this,
            "导入会替换桌面版当前的学习记录。程序会先把现有记录备份到本机，然后导入旧网页记录。是否继续？",
            "确认导入", MessageBoxButton.YesNo, MessageBoxImage.Question) != MessageBoxResult.Yes) return;

        try
        {
            var backupScript = $$"""
                JSON.stringify((() => {
                  const state = JSON.parse(localStorage.getItem('{{StateKey}}') || '{}');
                  return {
                    schemaVersion: 2,
                    words: JSON.parse(localStorage.getItem('{{CatalogKey}}') || '[]'),
                    records: state.records || {},
                    attempts: state.attempts || [],
                    favorites: state.favorites || []
                  };
                })())
                """;
            var existingJson = await Browser.ExecuteScriptAsync(backupScript);
            var existing = JsonSerializer.Deserialize<string>(existingJson) ?? "{}";
            var backupFolder = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "VocabDesk", "Backups");
            Directory.CreateDirectory(backupFolder);
            var backupPath = Path.Combine(backupFolder, $"before-import-{DateTime.Now:yyyyMMdd-HHmmss-fff}.json");
            await File.WriteAllTextAsync(backupPath, existing);

            var result = await Browser.ExecuteScriptAsync(BuildImportScript(raw));
            if (result != "true") throw new InvalidOperationException("浏览器未确认导入，请重试。原记录备份已保存。 ");
            MessageBox.Show(this, $"旧网页学习记录已导入。\n\n导入前的桌面版记录备份：\n{backupPath}", "导入完成", MessageBoxButton.OK, MessageBoxImage.Information);
        }
        catch (Exception error)
        {
            MessageBox.Show(this, $"导入未完成：{error.Message}", "导入失败", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }

    private static string BuildImportScript(string raw)
    {
        var escapedPayload = JsonSerializer.Serialize(raw);
        return $$"""
            (() => {
              const data = JSON.parse({{escapedPayload}});
              const previous = JSON.parse(localStorage.getItem('{{StateKey}}') || '{}');
              const compact = {
                ...previous,
                records: data.records,
                attempts: data.attempts,
                favorites: Array.isArray(data.favorites) ? data.favorites : [],
                lastSession: null,
                recentSession: null
              };
              const oldCatalog = localStorage.getItem('{{CatalogKey}}');
              const oldState = localStorage.getItem('{{StateKey}}');
              try {
                localStorage.setItem('{{CatalogKey}}', JSON.stringify(data.words));
                localStorage.setItem('{{StateKey}}', JSON.stringify(compact));
              } catch (error) {
                if (oldCatalog === null) localStorage.removeItem('{{CatalogKey}}');
                else localStorage.setItem('{{CatalogKey}}', oldCatalog);
                if (oldState === null) localStorage.removeItem('{{StateKey}}');
                else localStorage.setItem('{{StateKey}}', oldState);
                throw error;
              }
              setTimeout(() => location.reload(), 100);
              return true;
            })()
            """;
    }
}
