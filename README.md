# Brandbook — Wisible, Genius Goat & UP Design System

Welcome to the **Brandbook** repository (`~/dev-local/brandbook`). This repository is the unified **Source of Truth (SoT)** for all branding, Corporate Identity (CI), design tokens, typography specifications, UI component standards, and marketing guidelines across:

- **Wisible & Wisible Sheets** (Thai-first AI CRM & Revenue Operations platform)
- **Genius Goat** (AI Copilot, Morning Brief, Attention Dock & Wisible Stars)
- **UP Outcomes / Superhuman Design** (Global velocity platform & luxury editorial UI)

---

## 📁 Repository Structure

```
brandbook/
├── README.md                          # Repository Overview & SoT Guidelines
├── DESIGN.md                          # Master Design System Specifications & Tokens
├── WISIBLE_BRAND_GUIDE.md             # Wisible & Wisible Sheets Brand Guide
├── GENIUS_GOAT_BRAND_GUIDE.md         # Genius Goat AI Copilot Brand Guide
├── UP_BRAND_GUIDE.md                  # UP Outcomes Brand Guide
├── UNIFIED_BRAND_GUIDE.md             # Master Brand Architecture & Dual-Gradient System
├── LOGO_DESIGN_SYSTEM.md              # Vector Brandmarks & Geometry Rules
├── SUPERHUMAN_BRAND_ANALYSIS.md       # Comparative Analysis & Keyboard Mechanics
├── brandbook.html                     # Interactive Design System Web Showcase
├── up-landing.html                    # UP Outcomes Interactive Landing Page
├── index.html                         # Interactive Brand Showcase Portal
├── genius-goat-tokens.css             # Genius Goat CSS Tokens
├── up-tokens.css                      # UP Outcomes CSS Tokens
├── wisible-tokens.css                 # Wisible & Wisible Sheets CSS Tokens
├── unified-tokens.css                 # Master Consolidated Token CSS Sheet
└── assets/                            # Official SVG Vector Logos & Graphics
    ├── logo-wisible.svg
    ├── logo-genius-goat.svg
    └── logo-up.svg
```

---

## 🎨 Core Brand Ecosystem Summary

### 1. Wisible & Wisible Sheets
- **CI Accent:** Electric Neon Sunset (`#8B5CF6` Violet ➔ `#EC4899` Pink ➔ `#F97316` Orange)
- **Primary Type:** `Anuphan` (Thai + Latin)
- **Paper Wash:** `#F7F6F4` / Solid Ink Headlines: `#26292C`

### 2. Genius Goat
- **CI Accent:** Royal Jewel Accent (`#8B5CF6` Violet / `#6E3FA0` Jewel Purple)
- **Key UX Features:** Morning Brief paper wash, Attention Dock, Wisible Stars (+10 CRM / +5 Review), FAB Pulse Ring

### 3. UP Outcomes (Superhuman Design)
- **CI Accent:** Jewel Gradient (`#6E3FA0` ➔ `#D45A9A`)
- **Primary Type:** `Instrument Serif` (Editorial Display) + `Plus Jakarta Sans` (Body) + `JetBrains Mono` (Keycaps)
- **Canvas:** Paper Wash (Day Mode `#F7F6F4`) & Obsidian Void (Dark Mode `#141413`)
- **Key UX Features:** Sub-100ms keyboard navigation (<kbd>⌘K</kbd>, <kbd>G</kbd>, <kbd>Q</kbd>, <kbd>Enter</kbd>)

---

## 🚀 Running the Interactive Brandbook Locally

You can preview the interactive Brandbook web application using any local web server:

```bash
# Option 1: Python HTTP Server
python3 -m http.server 3000

# Option 2: npx serve
npx serve . -p 3000
```

Then open `http://localhost:3000/brandbook.html` or `http://localhost:3000/` in your browser.

---

## 🔒 Master Rules of the Design System

1. **The Jewel Rule (≤5% Area Rule):** Gradients must never exceed 5% of total viewport area (reserved for primary CTAs, logo marks, active indicators).
2. **Ink Purity:** Headlines and numbers MUST remain solid `#26292C` ink — never gradient text.
3. **Paper Surface Wash:** Clean `#F7F6F4` paper wash with crisp `#FFFFFF` cards and 1px `#E6E4E0` hairlines.

