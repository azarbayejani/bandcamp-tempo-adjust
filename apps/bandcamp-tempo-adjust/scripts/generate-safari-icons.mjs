// Regenerates the Safari-only icon PNGs from the layered app icon in
// safari/Tempo Adjust/AppIcon.icon, so a design change there only has to be
// made once. Writes:
//
//   public-safari/icon-128.png             toolbar + options page logo
//   public-safari/icon-34.png              toolbar, with a simplified globe
//   safari/Tempo Adjust/Resources/Icon.png the icon shown inside the iOS app
//
// The toolbar icons are just the record (disc, grooves, label, globe) on a
// transparent background; the deck and pitch fader are app-icon only. Icon.png
// is rendered by Icon Composer's ictool, so this needs Xcode.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const appDir = join(scriptDir, '..');
const iconDir = join(appDir, '../../safari/Tempo Adjust/AppIcon.icon');

const readLayer = (name) =>
  readFileSync(join(iconDir, 'Assets', `${name}.svg`), 'utf8');
const svgBody = (svg) =>
  svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

// Frame the toolbar icon tightly around the record disc.
const disc = readLayer('disc');
const circle = disc.match(/<circle\b[^>]*>/)?.[0] ?? '';
const attr = (name) =>
  Number(circle.match(new RegExp(`\\b${name}="([\\d.]+)"`))?.[1]);
const [cx, cy, r, strokeWidth] = ['cx', 'cy', 'r', 'stroke-width'].map(attr);
if ([cx, cy, r].some(Number.isNaN)) {
  throw new Error('Could not find the record circle in disc.svg');
}
const half = r + (strokeWidth || 0) / 2 + 4;
const viewBox = `${cx - half} ${cy - half} ${half * 2} ${half * 2}`;

function renderRecord(globeSvg, size) {
  const body = [disc, readLayer('grooves'), readLayer('label'), globeSvg]
    .map(svgBody)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${body}</svg>`;
  return new Resvg(svg, { fitTo: { mode: 'width', value: size } })
    .render()
    .asPng();
}

const write = (path, png) => {
  writeFileSync(path, png);
  console.log(`wrote ${path}`);
};

write(
  join(appDir, 'public-safari/icon-128.png'),
  renderRecord(readLayer('label-globe'), 128)
);
write(
  join(appDir, 'public-safari/icon-34.png'),
  renderRecord(
    readFileSync(join(scriptDir, 'safari-icons/label-globe-small.svg'), 'utf8'),
    34
  )
);

const developerDir = execFileSync('xcode-select', ['-p'], {
  encoding: 'utf8',
}).trim();
const ictool = join(
  developerDir,
  '../Applications/Icon Composer.app/Contents/Executables/ictool'
);
const inAppIcon = join(iconDir, '../Resources/Icon.png');
// ictool prints its settings as JSON on every run; keep the output quiet.
execFileSync(
  ictool,
  [
    iconDir,
    '--export-image',
    '--output-file',
    inAppIcon,
    '--platform',
    'iOS',
    '--rendition',
    'Default',
    '--width',
    '384',
    '--height',
    '384',
    '--scale',
    '1',
  ],
  { stdio: 'ignore' }
);
console.log(`wrote ${inAppIcon}`);
