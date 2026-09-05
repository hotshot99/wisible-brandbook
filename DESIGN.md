# Master Design System & Brand Specs — Brandbook

<!-- impeccable:design-schema 1 -->

## Overview & Brand Architecture

This project (`brandbook`) serves as the central **Source of Truth (SoT)** for all branding, design tokens, CI specifications, typography rules, layout hierarchies, and brand guidelines across the entire Wisible product ecosystem:

1. **Wisible & Wisible Sheets**: Thai-first revenue engine, morning paper reports, and Google Sheets CRM sync.
2. **Genius Goat**: AI Copilot, Morning Brief intelligence, Attention Dock, and Wisible Stars gamification.
3. **UP Outcomes / Superhuman Design**: Global velocity operating system, Instrument Serif display typography, obsidian dark mode, and keyboard-first workflow execution.

---

## Visual World & Token Palette

### Master Color Token Spectrum

```
+-----------------------------------------------------------------------------------+
|  WISIBLE & GENIUS GOAT BRAND CI (Electric Neon Sunset)                            |
|  #8B5CF6 (Violet) -----> #EC4899 (Pink) -----> #F97316 (Orange)                    |
+-----------------------------------------------------------------------------------+
|  UP OUTCOMES & SUPERHUMAN DESIGN (Jewel Gradient)                                  |
|  #6E3FA0 (Royal Violet) ---------------------> #D45A9A (Berry Magenta)             |
+-----------------------------------------------------------------------------------+
|  PAPER WASH SURFACE & INK PURITY (Shared Base World)                              |
|  Page Wash: #F7F6F4  |  Card Fill: #FFFFFF  | Hairline: #E6E4E0                  |
|  Ink Display: #26292C |  Ink Soft: #5A5F66   | Ink Mute: #8A9098                  |
|  Obsidian Void (Dark): #141413                | Obsidian Card: #181622            |
+-----------------------------------------------------------------------------------+
```

| Token Role | Hex / Value | Brand Scope | Operational Rule |
|------------|-------------|-------------|------------------|
| `--wisible-gradient` | `linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F97316 100%)` | Wisible / Goat | Active CTAs, Logo Mark, Agentic Badges |
| `--jewel-gradient` | `linear-gradient(135deg, #6E3FA0 0%, #D45A9A 100%)` | UP Outcomes / Superhuman | Primary Hero Action, Jewel Squircle |
| `--paper-wash` | `#F7F6F4` | All Brands | 300gsm Cotton Stationery Page Wash |
| `--paper-surface` | `#FFFFFF` | All Brands | Elevated Crisp Card Fill |
| `--paper-hairline` | `#E6E4E0` | All Brands | Precision 1px Split Border Divider |
| `--ink-display` | `#26292C` | All Brands | Northstar Metrics & Display Headlines (13.8:1 AAA) |
| `--ink-soft` | `#5A5F66` | All Brands | Secondary Body Copy & Descriptions |
| `--ink-mute` | `#8A9098` | All Brands | Micro-Captions, Timestamps, Keyboard Hints |
| `--semantic-green` | `#1F7A4C` | All Brands | Delta Up / Favorable / Target Achieved |
| `--semantic-amber` | `#B45309` | All Brands | Pending Review / Stale Follow-up |
| `--semantic-red` | `#B42318` | All Brands | Blocker / Revenue Risk / Missed Deal |

---

## Typography Engine (The Four Pillars)

1. **`Anuphan` (Thai + Latin Master Voice)**
   - *Role*: Wisible marketing sites, Wisible Sheets landing, Thai sales-ops interface.
   - *Weights*: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).

2. **`Instrument Serif` (Global Luxury Display Voice)**
   - *Role*: UP Outcomes hero titles, manifesto claims, executive reports.
   - *Tracking*: `-0.035em` for tight display impact. Expressive italic accents (*"The Google Sheet CRM that updates itself."*).

3. **`Plus Jakarta Sans` (Precision Product UI)**
   - *Role*: High-density data tables, split inbox triage rows, Genius Goat copilot cards.

4. **`JetBrains Mono` (Hardware Keycaps & Telemetry)**
   - *Role*: Physical mechanical keycaps (<kbd>⌘K</kbd>, <kbd>Enter</kbd>, <kbd>G</kbd>, <kbd>Q</kbd>, <kbd>↑</kbd>), latency tickers (`11ms LATENCY`), and system telemetry.

---

## Operational Rules & Brand Governance

1. **The Jewel Rule (≤5% Area Rule):** Brand gradients (`#8B5CF6→#EC4899→#F97316` or `#6E3FA0→#D45A9A`) must NEVER exceed 5% of the total viewport area. Gradient fill is strictly reserved for:
   - Primary Hero CTA Button
   - Vector Brandmark Glyphs
   - Active status spark dots / live beacons / rank badges
2. **Ink Purity:** Headlines, display titles, and financial statistics MUST remain in pure `#26292C` solid ink. Never apply gradient fills to text or numbers.
3. **Paper Wash Aesthetic:** Surfaces read as a paper document (`#F7F6F4` wash + `#FFFFFF` hairline card fill) rather than heavy dark dashboard cards.
4. **Semantics on Numbers Only:** Apply green `#1F7A4C`, amber `#B45309`, red `#B42318` only to the delta number or status tag — never tint the entire background card.
5. **No Eyebrow Kickers:** Avoid redundant "EYEBROW" text above main section headings.
6. **Keycap Association:** Primary actions feature physical keycap hints with sub-100ms tactile response.

---

## Brand Matrix & Directory Mapping

| Brand / Project | Location | Primary Purpose | Source of Truth File |
|-----------------|----------|-----------------|----------------------|
| **Brandbook** | `~/dev-local/brandbook` | Central Brand & Design System Hub | `~/dev-local/brandbook/DESIGN.md` |
| **Wisible Sheets** | `~/dev-local/wisible-sheet-website` | Marketing Site for Google Sheets CRM | `~/dev-local/wisible-sheet-website/DESIGN.md` |
| **Genius Goat** | `~/dev-local/genius-goat` | AI Copilot & In-App Assistant | `~/dev-local/genius-goat/DESIGN.md` |
| **UP Outcomes** | `~/dev-local/up-website` | Global Velocity Marketing Site | `~/dev-local/up-website/DESIGN.md` |
| **Superhuman Design** | `~/superhuman-design` | Blueprint Lab & Interactive Visual Spec | `~/superhuman-design/DESIGN.md` |

