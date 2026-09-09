const fs = require('fs');
const path = require('path');

const brandbookPath = path.join(__dirname, '../brandbook.html');
let html = fs.readFileSync(brandbookPath, 'utf8');

const cardConfigs = [
  { id: 1, svg: 'wisible_w_gradient', png: 'wisible_w_gradient.png', jpg: 'wisible_w_gradient.jpg', code: 'svgWCard1' },
  { id: 2, svg: 'wisible_w_dark', png: 'wisible_w_dark.png', jpg: 'wisible_w_dark.jpg', code: 'svgWCard2' },
  { id: 3, svg: 'wisible_w_gradient', png: 'wisible_w_gradient.png', jpg: 'wisible_w_gradient.jpg', code: 'svgWCard3' },
  { id: 4, svg: 'wisible_w_berry', png: 'wisible_w_berry.png', jpg: 'wisible_w_gradient.jpg', code: 'svgWCard4' },
  { id: 5, svg: 'wisible_w_white', png: 'wisible_w_white.png', jpg: 'wisible_w_white.jpg', code: 'svgWCard5' },
  { id: 6, svg: 'wisible_w_gradient', png: 'wisible_w_gradient.png', jpg: 'wisible_w_gradient_dark.jpg', code: 'svgWCard6' },
  { id: 7, svg: 'wisible_w_gradient', png: 'wisible_w_gradient.png', jpg: 'wisible_w_gradient_dark.jpg', code: 'svgWCard7' },
  { id: 8, svg: 'wisible_w_white', png: 'wisible_w_white.png', jpg: 'wisible_w_badge_jewel.jpg', code: 'svgWCard8' },
  { id: 9, svg: 'wisible_w_white', png: 'wisible_w_white.png', jpg: 'wisible_w_white.jpg', code: 'svgWCard9' },
  { id: 10, svg: 'wisible_w_badge_jewel', png: 'wisible_w_badge_jewel.png', jpg: 'wisible_w_badge_jewel.jpg', code: 'svgWCard10' },
  { id: 11, svg: 'wisible_w_badge_dark', png: 'wisible_w_badge_dark.png', jpg: 'wisible_w_app_icon.jpg', code: 'svgWCard11' },
  { id: 12, svg: 'wisible_w_app_icon', png: 'wisible_w_app_icon.png', jpg: 'wisible_w_app_icon.jpg', code: 'svgWCard12' }
];

for (const cfg of cardConfigs) {
  // Regex to match the actions block for this card
  const oldActionsRegex = new RegExp(
    `(<button class="w-action-btn" onclick="downloadDirectSVG\\('${cfg.svg}'\\)"><span>⬇<\\/span> SVG<\\/button>\\s*<button class="w-action-btn" onclick="copyWCardSVG\\(this, '${cfg.code}'\\)"><span>📋<\\/span> Copy Code<\\/button>)`,
    'g'
  );

  const newActions = `<button class="w-action-btn" onclick="downloadDirectSVG('${cfg.svg}')"><span>⬇</span> SVG</button>
                  <a class="w-action-btn" href="assets/logos/${cfg.png}" download="${cfg.png}"><span>⬇</span> PNG</a>
                  <a class="w-action-btn" href="assets/logos/${cfg.jpg}" download="${cfg.jpg}"><span>⬇</span> JPG</a>
                  <button class="w-action-btn" onclick="copyWCardSVG(this, '${cfg.code}')" title="Copy SVG Code"><span>📋</span> Code</button>`;

  if (oldActionsRegex.test(html)) {
    html = html.replace(oldActionsRegex, newActions);
    console.log(`✓ Updated actions for Card ${cfg.id} (${cfg.code})`);
  } else {
    console.warn(`Could not match actions for Card ${cfg.id} (${cfg.code})`);
  }
}

// Add downloadCurrentPNG button in Blueprint controls
const oldBlueprintBtns = `<button class="logo-btn-switch" onclick="downloadCurrentSVG()">
                <span>⬇ Export Clean SVG</span>
              </button>`;

const newBlueprintBtns = `<button class="logo-btn-switch" onclick="downloadCurrentSVG()">
                <span>⬇ Export SVG</span>
              </button>
              <button class="logo-btn-switch" onclick="downloadCurrentPNG()">
                <span>⬇ Export PNG</span>
              </button>`;

if (html.includes(oldBlueprintBtns)) {
  html = html.replace(oldBlueprintBtns, newBlueprintBtns);
  console.log('✓ Added Export PNG button to Blueprint controls');
}

// Add downloadCurrentPNG function to scripts
const oldFunc = `    function downloadCurrentSVG() {`;
const newFunc = `    function downloadCurrentPNG() {
      const map = {
        'WISIBLE_LOCKUP': 'wisible_full_lockup.png',
        'WISIBLE_W': 'wisible_w_gradient.png',
        'WISIBLE': 'wisible_w_badge_jewel.png',
        'UP_LOCKUP': 'up_full_lockup.png',
        'UP': 'up_logo_monogram.png',
        'GOAT': 'genius_goat.png'
      };
      const filename = map[currentMark] || 'wisible_w_gradient.png';
      const a = document.createElement('a');
      a.href = 'assets/logos/' + filename;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(\`⬇ Master High-Res PNG downloaded (\${filename})\`);
    }

    function downloadCurrentSVG() {`;

if (html.includes(oldFunc) && !html.includes('function downloadCurrentPNG(')) {
  html = html.replace(oldFunc, newFunc);
  console.log('✓ Added downloadCurrentPNG function');
}

fs.writeFileSync(brandbookPath, html, 'utf8');

// Also sync to index.html
const indexPath = path.join(__dirname, '../index.html');
fs.writeFileSync(indexPath, html, 'utf8');
console.log('✨ Synced changes to brandbook.html and index.html!');
