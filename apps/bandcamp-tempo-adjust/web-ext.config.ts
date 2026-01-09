import { defineWebExtConfig } from 'wxt';

export default defineWebExtConfig({
  startUrls: ['https://illegalafterstracks.bandcamp.com'],
  // TODO: Remove this when upgrading to latest wxt
  chromiumArgs: ['--disable-features=DisableLoadExtensionCommandLineSwitch'],
});
