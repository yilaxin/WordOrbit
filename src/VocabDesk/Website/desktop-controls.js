/* Keep native-only actions inside the site's existing header. */
(() => {
  if (!new URLSearchParams(location.search).has('desktop')) return;
  const install = () => {
    const actions = document.querySelector('.top-actions');
    if (!actions || document.querySelector('#desktopMenuButton')) return;
    const menu = document.createElement('div');
    menu.className = 'desktop-menu';
    menu.innerHTML = `
      <button id="desktopMenuButton" class="desktop-menu-trigger" type="button" aria-label="桌面工具" title="桌面工具" aria-haspopup="menu" aria-controls="desktopMenuPopover" aria-expanded="false">⋯</button>
      <div id="desktopMenuPopover" class="desktop-menu-popover" role="menu" hidden>
        <span class="desktop-menu-label">DESKTOP / 桌面工具</span>
        <button class="desktop-menu-item" type="button" role="menuitem" data-desktop-action="import"><span class="desktop-menu-icon" aria-hidden="true">⇩</span><span><strong>导入旧网页数据</strong><small>接续原来的学习进度</small></span></button>
        <button class="desktop-menu-item" type="button" role="menuitem" data-desktop-action="old-site"><span class="desktop-menu-icon" aria-hidden="true">↗</span><span><strong>打开旧网页</strong><small>查看原来的学习记录</small></span></button>
        <div class="desktop-menu-divider" role="separator"></div>
        <button class="desktop-menu-item" type="button" role="menuitem" data-desktop-action="reload"><span class="desktop-menu-icon" aria-hidden="true">↻</span><span><strong>刷新页面</strong><small>重新载入桌面版</small></span></button>
      </div>`;
    actions.insertBefore(menu, document.querySelector('#themeBtn'));
    const trigger = menu.querySelector('#desktopMenuButton');
    const popover = menu.querySelector('#desktopMenuPopover');
    const setOpen = open => {
      popover.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
    };
    trigger.addEventListener('click', () => setOpen(popover.hidden));
    menu.addEventListener('click', event => {
      const action = event.target.closest('[data-desktop-action]')?.dataset.desktopAction;
      if (!action) return;
      setOpen(false);
      if (action === 'reload') { location.reload(); return; }
      if (window.chrome?.webview?.postMessage) window.chrome.webview.postMessage(action);
      else if (typeof toast === 'function') toast('请在桌面程序中使用此功能');
    });
    document.addEventListener('click', event => { if (!menu.contains(event.target)) setOpen(false); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !popover.hidden) { setOpen(false); trigger.focus(); }
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, {once:true});
  else install();
})();
