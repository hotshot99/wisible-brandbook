# ⚡ MASTER BRAND IDENTITY & CI MANUAL
### UP & GENIUS GOAT
*Architecture: Executive Luxury & Sub-100ms Velocity*
*Color Engine: Royal Violet `#6E3FA0` → Vibrant Berry Magenta `#D45A9A` (Locked from `genius-goat/DESIGN.md`)*

---

## 1. Executive Brand Essence & Positioning

**UP** and **Genius Goat** create an entirely new software category: **"Executive Luxury Software"**.

Instead of treating productivity as cold utility or minimalist beige, the design language treats speed as an **aspirational craft, an elevated sensory experience, and a high-status productivity instrument**.

### The 3 Core Axioms
1. **The Sub-100ms Flow State**: Zero friction, zero drag, instantaneous physical feedback.
2. **Paper & Ink Luxury**: The canvas is a heavy 300gsm cotton stationery wash (`#F7F6F4`) in Day Mode and Warm Obsidian (`#141413`) in Night Mode.
3. **The Radiant Jewel Accent**: A controlled, high-voltage gradient (`#6E3FA0 → #D45A9A`) applied with strict restraint to primary conversion points and brand hallmarks.

---

## 2. Master Color Engine & Specifications

| Role | Token Name | HEX Value | RGB | Pantone | WCAG Contrast |
|---|---|---|---|---|---|
| **Signature Gradient Start** | `--accent-purple` | `#6E3FA0` | `110, 63, 160` | `2685 C` | 7.2:1 (AAA) |
| **Signature Gradient End** | `--accent-magenta` | `#D45A9A` | `212, 90, 154` | `2375 C` | 4.8:1 (AA) |
| **Light Page Wash** | `--paper-wash` | `#F7F6F4` | `247, 246, 244` | — | Background |
| **Card Surface** | `--paper-surface` | `#FFFFFF` | `255, 255, 255` | — | Surface |
| **Hairline Border (1px)** | `--paper-hairline` | `#E6E4E0` | `230, 228, 224` | — | Stroke |
| **Ink Display (Headlines/KPIs)** | `--ink-display` | `#26292C` | `38, 41, 44` | `Black 7 C` | **13.8:1 (AAA)** |
| **Ink Soft (Body)** | `--ink-soft` | `#5A5F66` | `90, 95, 102` | — | 7.6:1 (AAA) |
| **Ink Mute (Captions)** | `--ink-mute` | `#8A9098` | `138, 144, 152` | — | 4.5:1 (AA) |
| **Obsidian Void (Dark Base)** | `--obsidian-base` | `#141413` | `20, 20, 19` | `Black 6 C` | Dark Canvas |

---

## 3. The 3 Master CTA Button Styles

### 1. **Style 1: Radiant Core (Hero Primary)**
- **Role**: The #1 highest-conversion action on any page.
- **Fill**: Linear gradient 135° `#6E3FA0 → #D45A9A`.
- **Specular Sweep**: 45° glass reflection sweep on hover (`transition: transform 0.65s ease`).
- **Shadow**: `0 12px 30px -4px rgba(110, 63, 160, 0.45), 0 0 20px rgba(212, 90, 154, 0.3)`.
- **Keycap**: Semi-translucent frosted keycap `<span class="keycap">Enter</span>` or `<span class="keycap">G</span>`.

### 2. **Style 2: Jewel Border (Elevated Pro)**
- **Role**: Secondary high-impact actions (e.g., *"Launch Command HUD <kbd>⌘K</kbd>"*).
- **Fill**: Crisp `#FFFFFF` surface with gradient border clipping.
- **Shadow**: `0 10px 25px rgba(110, 63, 160, 0.15)`.

### 3. **Style 3: Ghost Velocity (Subtle)**
- **Role**: Tertiary exploratory actions (e.g., *"Watch 60s Demo <kbd>D</kbd>"*).
- **Fill**: Quiet `#F0EDE8` resting state with purple hover border.

---

## 4. Vector Glyph Geometry & Blueprint Rules

### The UP Monogram (`UP ↑`)
- **Coordinate Grid**: 100×100 unit Cartesian plane.
- **Stroke Weight**: 7 units uniform stroke with rounded terminal joints (`stroke-linecap="round"`).
- **Ascension Chevron**: Integrated at apex (coordinates `x: 54, y: 18` with `44,28` to `64,28` base).
- **Clear Space (2X Rule)**: A minimum safe perimeter of 2X glyph height must remain unobstructed on all sides.

---

## 5. Typographic Engine (The Tripartite Model)

1. **`Instrument Serif` (Editorial Luxury Voice)**:
   - Tracking: `-0.035em` on display sizes.
   - Italic accents for key velocity claims (*"Twice as fast."*).
2. **`Plus Jakarta Sans` × `Anuphan` (Precision UI & Bilingual Harmony)**:
   - High optical legibility for data tables, split inboxes, and Thai/English UI text.
3. **`JetBrains Mono` (Velocity Telemetry)**:
   - Keycaps, latency tickers (`11ms LATENCY`), and system telemetry.

---

## 6. Brand Governance (The Jewel Rule)

- **The Jewel Rule**: A jewel only sparkles if the room is quiet. Use the `#6E3FA0 → #D45A9A` gradient on **no more than 5% of the total viewport area** (CTA button, brandmark, active status dot).
- **Ink Purity**: Never render large financial or KPI numbers in gradients. Always use solid `#26292C` ink for gravitational authority.
- **Keyboard Pairing**: Every prominent button or triage row must display a corresponding physical keycap shortcut.
