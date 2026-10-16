// The Safari build ships as the single "Tempo Adjust" app (see wxt.config.ts),
// so copy that names the extension has to follow the build. A function rather
// than a constant so tests can stub the env after importing.
export function extensionName(): string {
  return import.meta.env.SAFARI ? 'Tempo Adjust' : 'Bandcamp Tempo Adjust';
}
