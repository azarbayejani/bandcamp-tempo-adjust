import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Discogs Tempo Adjust',
    version: '0.1.3',
    description: 'A browser extension to adjust track tempo on Discogs',
    action: {},
    browser_specific_settings: {
      gecko: {
        id: '{6fc0284b-f220-4709-acad-d8b95f55637f}',
      },
    },
  },
  modules: [
    '@wxt-dev/module-react',
    '@tempo-adjust/wxt-hooks',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: 'src',
  zip: {
    // wxt 0.21 changed the default templates to use {{packageVersion}},
    // but our package.json versions don't track the manifest version
    artifactTemplate: '{{name}}-{{versionName}}-{{browser}}.zip',
    sourcesTemplate: '{{name}}-{{versionName}}-sources.zip',
  },
});
