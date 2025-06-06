import { defineRunnerConfig } from 'wxt';

export default defineRunnerConfig({
  startUrls: [
    'https://www.discogs.com/release/15571627-Sketch-Artist-illegal-afters-01',
  ],
  // TODO: Remove this when upgrading to latest wxt
  chromiumArgs: ['--disable-features=DisableLoadExtensionCommandLineSwitch'],
});
