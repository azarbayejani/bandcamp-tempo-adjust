// Regenerates the Safari-only icon PNGs from the layered app icon in
// safari/Tempo Adjust/AppIcon.icon, so a design change there only has to be
// made once. Writes:
//
//   public-safari/icon-128.png             toolbar + options page logo
//   public-safari/icon-34.png              toolbar
//   public-safari/toolbar-dark-128.png     toolbar in dark mode
//   public-safari/toolbar-dark-34.png      toolbar in dark mode
//   safari/Tempo Adjust/Resources/Icon.png the icon shown inside the iOS app
//
// The toolbar icons are the whole record with the hand resting on its edge,
// like the Chrome icons, on a transparent background; the pitch fader is
// app-icon only. The dark ones use each layer's dark-appearance colour from
// icon.json. Icon.png is rendered by Icon Composer's ictool, so this needs
// Xcode.

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

// Icon Composer colours each layer from icon.json, not from the SVG's own fill,
// so look up the colour a layer gets in the dark appearance.
const iconJson = JSON.parse(readFileSync(join(iconDir, 'icon.json'), 'utf8'));
const darkColors = new Map(
  iconJson.groups.flatMap((group) =>
    group.layers.map((layer) => {
      const solid = layer['fill-specializations']?.find(
        (spec) => spec.appearance === 'dark'
      )?.value.solid;
      const hex = solid
        ?.replace(/^srgb:/, '')
        .split(',')
        .slice(0, 3)
        .map((c) =>
          Math.round(Number(c) * 255)
            .toString(16)
            .padStart(2, '0')
        )
        .join('');
      return [layer.name, hex && `#${hex}`];
    })
  )
);
const layerBody = (name, dark) => {
  const body = svgBody(readLayer(name));
  const color = dark && darkColors.get(name);
  return color
    ? body.replace(/\b(fill|stroke)="#[0-9A-Fa-f]{6}"/g, `$1="${color}"`)
    : body;
};

const record = readLayer('record');
const circle = record.match(/<circle\b[^>]*>/)?.[0] ?? '';
const attr = (name) =>
  Number(circle.match(new RegExp(`\\b${name}="([\\d.]+)"`))?.[1]);
const [cx, cy, r] = ['cx', 'cy', 'r'].map(attr);
if ([cx, cy, r].some(Number.isNaN)) {
  throw new Error('Could not find the record circle in record.svg');
}

// In the app icon the record runs off the canvas and the hand sits well inside
// it. For the toolbar, scale the hand up and move it onto the record's
// lower-right edge, as on the Chrome icons.
const HAND_HEIGHT = 0.95 * r;
const HAND_CENTER = [cx + 0.6 * r, cy + 0.62 * r];
const box = new Resvg(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">${layerBody(
    'hand-outline',
    false
  )}</svg>`
).getBBox();
const k = HAND_HEIGHT / box.height;
const handTransform = `translate(${
  HAND_CENTER[0] - k * (box.x + box.width / 2)
} ${HAND_CENTER[1] - k * (box.y + box.height / 2)}) scale(${k})`;

// Frame the record and hand together in a square, with room for the rim.
const rim = 0.03 * r;
const left = cx - r - rim;
const top = cy - r - rim;
const right = Math.max(cx + r + rim, HAND_CENTER[0] + (k * box.width) / 2);
const bottom = Math.max(cy + r + rim, HAND_CENTER[1] + (k * box.height) / 2);
const side = Math.max(right - left, bottom - top) + 8;
const viewBox = `${(left + right - side) / 2} ${
  (top + bottom - side) / 2
} ${side} ${side}`;

function renderToolbarIcon(size, dark) {
  // The light icon is also what Safari shows on a dark toolbar when it doesn't
  // support icon_variants, so give its black record a grey rim to keep the edge
  // visible there. The dark icon's graphite record doesn't need one.
  const recordBody = layerBody('record', dark);
  const body =
    (dark
      ? recordBody
      : recordBody.replace(
          /<circle\b/,
          `<circle stroke="#48484A" stroke-width="${rim * 2}"`
        )) +
    layerBody('label', dark) +
    layerBody('spindle', dark) +
    `<g transform="${handTransform}">${layerBody(
      'hand-outline',
      dark
    )}${layerBody('hand', dark)}</g>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${body}</svg>`;
  return new Resvg(svg, { fitTo: { mode: 'width', value: size } })
    .render()
    .asPng();
}

const write = (path, png) => {
  writeFileSync(path, png);
  console.log(`wrote ${path}`);
};

for (const size of [128, 34]) {
  write(
    join(appDir, `public-safari/icon-${size}.png`),
    renderToolbarIcon(size, false)
  );
  write(
    join(appDir, `public-safari/toolbar-dark-${size}.png`),
    renderToolbarIcon(size, true)
  );
}

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
