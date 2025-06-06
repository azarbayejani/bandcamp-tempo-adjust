import { defineRunnerConfig } from 'wxt';

export default defineRunnerConfig({
  startUrls: ['https://illegalafterstracks.bandcamp.com'],
  // TODO: Remove this when upgrading to latest wxt
  chromiumArgs: ['--disable-features=DisableLoadExtensionCommandLineSwitch'],
});
