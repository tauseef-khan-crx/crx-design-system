# Centricity Research — Design System

Complete interactive design system for Centricity Research, a clinical research network operating across the US and Canada.

## Quick Start

- Open `design-system.html` in a browser for the full interactive design system
- Run `/centricity-design-system` to activate brand-aware guidance for any content task
- The root `SKILL.md` is the design system skill — it governs all branded output

## Project Structure

```
design-system.html        → Interactive design system (Nord-style sidebar layout)
                            - Dark blue collapsible sidebar navigation
                            - Overview page with brand voice (pillars, audiences, do/don't)
                            - Resources: Logos, Icons (174 custom + Lucide v0.468.0 + Heroicons)
                            - Design Tokens: Colors, Typography, Spacing, Shadows & Effects
                            - Components: Buttons, Cards, Badges, Forms & Inputs, Nav, Stats
                            - Click-to-view code panel for all components
                            - AI chatbot assistant for non-technical users
                            - Responsive across all screen sizes
assets/logos/svg/         → Logo variants (horizontal + logomark, color + white)
assets/logos/png/         → Raster fallbacks (generate from SVGs as needed)
assets/icons/             → 174 clinical-research-themed SVG icons + icons.json catalog
references/               → Brand guidelines and design tokens
references/tokens/        → color, typography, spacing, shadow, component token JSON files
references/brand-guidelines.md → Comprehensive brand application rules
```

## Key Rules

1. **Token files are the source of truth** — always read from `references/tokens/` for exact values. Never guess hex codes, font sizes, or spacing.
2. **Three brand colors** — Main Blue `#1E67B2` (primary), Main Teal `#10BAB3` (secondary), Main Green `#81BF41` (tertiary). CTAs use primary blue.
3. **Montserrat for headings, Noto Sans for body** — never swap these.
4. **Buttons use 8px border-radius** — consistent rounded corners, not pill-shaped.
5. **Sentence case on headings** — ALL CAPS only for Overline, Label, and Button text styles.
6. **Icons from `assets/icons/`** — 174 custom SVGs + Lucide (pinned v0.468.0) and Heroicons integrated in the design system. Never use placeholder emoji.
7. **Read `references/brand-guidelines.md`** for comprehensive brand application rules.

## Design System Features

- **Interactive browsing** — sidebar navigation with search, collapsible to icon-only mode
- **Code previews** — click any component to see its HTML/CSS code in a slide-out panel
- **Icon libraries** — 174 custom + Lucide v0.468.0 (1,500+) + Heroicons (300+), all searchable and downloadable (SVG + PNG)
- **Color copy** — hover any color swatch to see copy icon, click to copy hex value
- **Logo downloads** — horizontal and logomark variants with SVG + PNG download
- **AI chatbot** — floating assistant that helps non-technical users find colors, fonts, icons, components, and guidelines
- **Fully responsive** — works on desktop, tablet, and mobile
