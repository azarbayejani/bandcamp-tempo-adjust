// The user agent is read (rather than runtime.getPlatformInfo) because it
// is available to content scripts and matches how Bandcamp picks its
// mobile layout: an iPad in desktop mode gets the desktop page.
export const isPhone = () =>
  /Android|iPhone|iPod|Mobile/.test(navigator.userAgent);
