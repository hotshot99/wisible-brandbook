const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const LOGOS_DIR = path.join(__dirname, '../assets/logos');
const TEMP_HTML = path.join(__dirname, 'temp_render.html');

const items = [
  // 1. Standalone W Monogram (Transparent PNGs, 1024x1024)
  {
    svg: 'wisible_w_gradient.svg',
    png: 'wisible_w_gradient.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_dark.svg',
    png: 'wisible_w_dark.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_white.svg',
    png: 'wisible_w_white.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_berry.svg',
    png: 'wisible_w_berry.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_badge_jewel.svg',
    png: 'wisible_w_badge_jewel.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_badge_dark.svg',
    png: 'wisible_w_badge_dark.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_badge_white.svg',
    png: 'wisible_w_badge_white.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'wisible_w_app_icon.svg',
    png: 'wisible_w_app_icon.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },

  // 2. Standalone W JPEGs (Solid backgrounds, 1024x1024)
  {
    svg: 'wisible_w_gradient.svg',
    jpg: 'wisible_w_gradient.jpg',
    width: 1024,
    height: 1024,
    bg: '#FFFFFF'
  },
  {
    svg: 'wisible_w_gradient.svg',
    jpg: 'wisible_w_gradient_dark.jpg',
    width: 1024,
    height: 1024,
    bg: '#141413'
  },
  {
    svg: 'wisible_w_dark.svg',
    jpg: 'wisible_w_dark.jpg',
    width: 1024,
    height: 1024,
    bg: '#FFFFFF'
  },
  {
    svg: 'wisible_w_white.svg',
    jpg: 'wisible_w_white.jpg',
    width: 1024,
    height: 1024,
    bg: '#141413'
  },
  {
    svg: 'wisible_w_badge_jewel.svg',
    jpg: 'wisible_w_badge_jewel.jpg',
    width: 1024,
    height: 1024,
    bg: '#FFFFFF'
  },
  {
    svg: 'wisible_w_app_icon.svg',
    jpg: 'wisible_w_app_icon.jpg',
    width: 1024,
    height: 1024,
    bg: '#FFFFFF'
  },

  // 3. Brand Full Lockups & Monograms
  {
    svg: 'wisible_full_lockup.svg',
    png: 'wisible_full_lockup.png',
    width: 1520,
    height: 360,
    bg: 'transparent'
  },
  {
    svg: 'wisible_full_lockup.svg',
    jpg: 'wisible_full_lockup.jpg',
    width: 1520,
    height: 360,
    bg: '#FFFFFF'
  },
  {
    svg: 'up_full_lockup.svg',
    png: 'up_full_lockup.png',
    width: 1520,
    height: 360,
    bg: 'transparent'
  },
  {
    svg: 'up_full_lockup.svg',
    jpg: 'up_full_lockup.jpg',
    width: 1520,
    height: 360,
    bg: '#FFFFFF'
  },
  {
    svg: 'up_logo_monogram.svg',
    png: 'up_logo_monogram.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'up_logo_monogram.svg',
    jpg: 'up_logo_monogram.jpg',
    width: 1024,
    height: 1024,
    bg: '#FFFFFF'
  },
  {
    svg: 'genius_goat.svg',
    png: 'genius_goat.png',
    width: 1024,
    height: 1024,
    bg: 'transparent'
  },
  {
    svg: 'genius_goat.svg',
    jpg: 'genius_goat.jpg',
    width: 1024,
    height: 1024,
    bg: '#FFFFFF'
  }
];

function renderItem(item) {
  const svgPath = path.join(LOGOS_DIR, item.svg);
  if (!fs.existsSync(svgPath)) {
    console.error(`SVG not found: ${svgPath}`);
    return;
  }
  let svgContent = fs.readFileSync(svgPath, 'utf8');

  // Strip XML declaration if present
  svgContent = svgContent.replace(/<\?xml.*?\?>/gi, '');

  const isTransparent = item.bg === 'transparent';
  const htmlBg = isTransparent ? 'transparent' : item.bg;

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${item.width}px;
    height: ${item.height}px;
    background: ${htmlBg};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

  fs.writeFileSync(TEMP_HTML, html, 'utf8');

  const targetFilename = item.png || item.jpg;
  const targetPath = path.join(LOGOS_DIR, targetFilename);
  const tempPng = path.join(__dirname, 'temp_output.png');

  const bgColorArg = isTransparent ? '--default-background-color=00000000' : '';
  const cmd = `"${CHROME_PATH}" --headless --disable-gpu ${bgColorArg} --screenshot="${tempPng}" --window-size=${item.width},${item.height} "${TEMP_HTML}"`;

  try {
    execSync(cmd, { stdio: 'pipe' });

    if (item.png) {
      fs.copyFileSync(tempPng, targetPath);
      console.log(`✓ Generated PNG: ${targetFilename} (${item.width}x${item.height})`);
    } else if (item.jpg) {
      execSync(`sips -s format jpeg -s formatOptions 95 "${tempPng}" --out "${targetPath}"`, { stdio: 'pipe' });
      console.log(`✓ Generated JPG: ${targetFilename} (${item.width}x${item.height})`);
    }
  } catch (err) {
    console.error(`Failed to generate ${targetFilename}:`, err.message);
  } finally {
    if (fs.existsSync(tempPng)) fs.unlinkSync(tempPng);
  }
}

console.log('⚡ Generating Master Raster (PNG & JPEG) Assets from SVGs...');
for (const item of items) {
  renderItem(item);
}

if (fs.existsSync(TEMP_HTML)) fs.unlinkSync(TEMP_HTML);
console.log('✨ All raster assets generated successfully in assets/logos/!');
