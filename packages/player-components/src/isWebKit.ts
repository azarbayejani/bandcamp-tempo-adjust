// Whether the page is running on the WebKit engine. The Chrome and Firefox
// builds can end up there too: Orion installs them but renders with WebKit.
// Every WebKit browser reports Apple as its vendor, and unlike the user
// agent that survives Orion's per-site user agent spoofing.
const isWebKit = (): boolean =>
  typeof navigator !== 'undefined' &&
  navigator.vendor === 'Apple Computer, Inc.';

export default isWebKit;
