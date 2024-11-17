// @ts-check
import { defineWxtModule } from 'wxt/modules';
import JSZip from 'jszip';
import fs from 'fs-extra';
import path from 'node:path';
import glob from 'fast-glob';

export default defineWxtModule({
  name: '@tempo-adjust/wxt-hooks',
  hooks: {
    'build:manifestGenerated': async (wxt, manifest) => {
      if (
        wxt.config.browser !== 'firefox' &&
        manifest.browser_specific_settings
      ) {
        delete manifest.browser_specific_settings.gecko;
      }
    },
    'zip:sources:done': async (wxt, sourcesZipPath) => {
      console.log('\x1b[36mℹ\x1b[0m', 'Re-zipping sources...');

      const projectDirName = path.basename(wxt.config.root);

      /*
       * assumes that the workspace is structured like this:
       *
       * packages/
       *   - package-a/
       * apps/
       *   - app-a/ <- wxt.config.root
       */
      const workspaceRoot = path.resolve(wxt.config.root, '../..');

      const zip = new JSZip();

      // zip the workspace root's pnpm-workspace.yaml
      zip.file(
        'pnpm-workspace.yaml',
        fs.readFileSync(path.resolve(workspaceRoot, 'pnpm-workspace.yaml'))
      );

      // zip the workspace root's package.json
      zip.file(
        'package.json',
        fs.readFileSync(path.resolve(workspaceRoot, 'package.json'))
      );

      // get all files in all packages
      const packageFiles = glob.sync('packages/**/*', {
        cwd: workspaceRoot,
        ignore: ['**/node_modules/**/*'],
      });

      // get all files in the current app
      const appFiles = glob.sync(`apps/${projectDirName}/**/*`, {
        cwd: workspaceRoot,
        ignore: ['**/node_modules/**/*'],
      });

      const files = [...packageFiles, ...appFiles];

      // add SOURCE_CODE_REVIEW.md to the zip root
      zip.file(
        'SOURCE_CODE_REVIEW.md',
        fs.readFileSync(path.resolve(wxt.config.root, 'SOURCE_CODE_REVIEW.md'))
      );

      for (const file of files) {
        const absolutePath = path.resolve(workspaceRoot, file);
        const content = fs.readFileSync(absolutePath);
        zip.file(file, content);
      }

      await new Promise((resolve, reject) => {
        zip
          .generateNodeStream({
            type: 'nodebuffer',
            ...(wxt.config.zip.compressionLevel === 0
              ? { compression: 'STORE' }
              : {
                  compression: 'DEFLATE',
                  compressionOptions: {
                    level: wxt.config.zip.compressionLevel,
                  },
                }),
          })
          .pipe(fs.createWriteStream(sourcesZipPath))
          .on('error', reject)
          .on('close', resolve);
      });
    },
  },
});
