export function getRegisteredOptionsPath() {
  const manifest = browser.runtime.getManifest();
  return manifest.options_ui?.page ?? manifest.options_page ?? null;
}

export function isSameExtensionPage(currentUrl: string, targetUrl: string) {
  return currentUrl === targetUrl;
}
