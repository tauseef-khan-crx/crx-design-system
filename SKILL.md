---
name: centricity-design-system
description: Applies Centricity Research design system to all content — slides, decks, social posts, reports, proposals, and digital product design. Activate when user requests branded content, "on brand" output, or anything Centricity-styled.
tools: Read, Glob, Grep, Bash
---

# Centricity Research — Design System

## When to activate

Use this skill whenever the user requests:
- Slides, decks, presentations, or pitch materials
- Marketing copy or campaign content
- Reports, one-pagers, proposals, or branded documents
- UI/UX design, component specs, or digital product work
- Any output described as "on brand", "branded", "Centricity style", or "following brand guidelines"
- Chart/data visualization color recommendations
- Email templates, newsletters, or patient communications

---

## Brand positioning

**The patient is the Hero. Centricity Research is the Trusted Guide.**

Centricity Research is one of the largest clinical research networks in North America, connecting patients with clinical trials at community-based sites across the US and Canada. The brand must feel:

- **Trustworthy** — patients are entrusting their health; credibility is non-negotiable
- **Accessible** — clinical research should feel approachable, not intimidating
- **Community-rooted** — local sites, real people, your neighborhood
- **Scientifically rigorous** — evidence-based, precise, thorough
- **Empowering** — patients make a difference; they're not "test subjects"

### Two audiences, one voice

| Audience | Tone | Focus |
|---|---|---|
| **Patients / Participants** | Warm, encouraging, plain language | Their health journey, what to expect, making a difference |
| **Sponsors / Pharma** | Professional, data-driven, confident | Network scale, site capabilities, enrollment speed, data quality |

### Avoid
- Medical jargon without plain-language explanation
- "Guinea pig" or "test subject" framing
- Overpromising treatment results
- Fear-based or urgency-pressure messaging
- Cold, institutional, corporate-speak tone

---

## First steps — ALWAYS do this before generating branded output

1. **Read the token files** to get exact values. NEVER guess hex codes, font sizes, or spacing:
   - `references/tokens/color_tokens.json` — all colors
   - `references/tokens/typography_tokens.json` — type scale and fonts
   - `references/tokens/spacing_tokens.json` — spacing, radius, border width
   - `references/tokens/shadow_tokens.json` — shadows, transitions, opacity
   - `references/tokens/component_tokens.json` — component dimensions

2. **Read `references/brand-guidelines.md`** for detailed application rules if the task involves a format you haven't worked with in this session (slides, social, digital product).

3. **Check `assets/icons/icons.json`** if the task needs icons — 174 custom SVGs available, plus Lucide and Heroicons integrated in the design system. Never use placeholder emoji or generic icons.

4. **Check `assets/logos/svg/`** for logo files if placing a logo.

---

## Design rules

### Color

| Role | Token | Hex | When to use |
|---|---|---|---|
| **Primary (Main Blue)** | blue_b_500 | `#1E67B2` | Buttons, links, icons, active states, stat numbers, CTAs |
| Primary Hover | blue_b_600 | `#185291` | Hover states on primary elements |
| Primary Light | blue_b_50 | `#EBF2F9` | Subtle backgrounds, badge fills, brand tint sections |
| **Secondary (Main Teal)** | teal_t_500 | `#10BAB3` | Accents, eyebrows, footer headings/links, secondary highlights |
| Secondary Light | teal_t_50 | `#E7F8F7` | Subtle teal backgrounds |
| **Tertiary (Main Green)** | green_g_500 | `#81BF41` | Tertiary accents, success-adjacent highlights, diversity in data viz |
| Tertiary Light | green_g_50 | `#F2FAEC` | Subtle green backgrounds |
| **Dark / Nav** | blue_b_800 | `#0D2949` | Headers, navigation, hero backgrounds, dark surfaces, footer |
| Body text | neutral_n_800 | `#1F2937` | Paragraphs, descriptions |
| Heading text | blue_b_800 | `#0D2949` | All headings on light backgrounds |
| Muted text | neutral_n_500 | `#6B7280` | Captions, metadata, hints |
| Page bg | neutral_n_50 | `#F9FAFB` | Default page background |
| Card bg | basics_white | `#FFFFFF` | Cards, panels, modals |

### Typography

| Style | Font | Weight | Size | Use |
|---|---|---|---|---|
| Display | Montserrat | Bold | 60px | Hero headlines |
| H1 | Montserrat | Bold | 48px | Page titles |
| H2 | Montserrat | Bold | 36px | Section headings |
| H3 | Montserrat | Medium | 28px | Sub-section headings |
| H4 | Montserrat | Medium | 22px | Card titles |
| H5 | Montserrat | Medium | 17px | Small headings |
| Overline | Montserrat | Bold | 10px | Eyebrow labels, ALL CAPS |
| Body | Noto Sans | Regular | 15px | Default body text |
| Body Small | Noto Sans | Regular | 13px | Metadata, secondary info |
| Caption | Noto Sans | Medium | 11px | Fine print, labels |
| Label | Noto Sans | SemiBold | 12px | Form labels, ALL CAPS |
| Button | Noto Sans | SemiBold | 15px | Button text, ALL CAPS |

**Rules:**
- Sentence case on ALL headings (not Title Case)
- ALL CAPS only on: Overline, Label, Button
- Never use Montserrat on body copy, captions, or form fields
- Never use Noto Sans on Display, H1, or H2
- Paragraph spacing: 24px between body paragraphs

### Buttons

- **Shape**: 8px border-radius — consistent rounded corners
- **Primary**: Blue bg `#1E67B2`, white text, blue-glow shadow on hover
- **Secondary**: Transparent bg, blue border `#1E67B2`, blue text
- **Ghost**: Transparent bg, neutral border `#E5E7EB`, neutral text
- **Height**: 34px (sm), 42px (md), 50px (lg)

### Shadows

- Cards at rest: `shadow_xs` — barely visible
- Hover/elevated: `shadow_md` — noticeable lift
- Modals/overlays: `shadow_lg` — strong depth
- Primary button hover: `shadow_blue_glow` — blue-tinted glow
- Focus rings: `shadow_focus_blue` — 3px spread blue ring

### Logo

- **Horizontal** (`logo-horizontal-color.svg`): Primary placement — upper-left or upper-right
- **Logomark** (`logomark-color.svg`): Favicons, small spaces, social avatars
- **White variants**: Use on dark backgrounds (dark blue, hero sections)
- **Color variants**: Use on light backgrounds (white, neutral-50)
- Minimum clear space: 1x logomark height on all sides
- Never stretch, skew, add effects, or change logo colors
- Logo colors match brand palette: Blue `#1E67B2`, Teal `#10BAB3`, Green `#81BF41`

---

## Common mistakes to avoid

1. **Using Noto Sans for big headings** — H1, H2, Display MUST use Montserrat
3. **Title-casing headings** — Use sentence case: "Our research sites" not "Our Research Sites"
4. **Button radius is 8px** — consistent rounded corners on all buttons
5. **Off-brand colors in charts** — Use blue, teal, green, neutral for data viz only
6. **Guessing hex values** — Always read from token files. Close-but-wrong colors break brand consistency
7. **Logo on busy backgrounds** — Ensure sufficient contrast; use white variant on dark/photo backgrounds
8. **Jargon-heavy patient-facing copy** — Write for a general audience. Explain clinical terms.
9. **Using gradients on buttons, cards, badges** — Solid colors only on UI elements. Gradients only on full-bleed hero/section backgrounds if needed.

---

## Pre-output checklist

Before delivering any branded content, verify:

- [ ] All hex colors come from `color_tokens.json` — no guessed values
- [ ] Headings use Montserrat, body uses Noto Sans
- [ ] Headings are sentence case (not Title Case)
- [ ] CTAs use primary blue
- [ ] Buttons use 8px border-radius
- [ ] Logo uses correct variant for background (white on dark, color on light)
- [ ] Tone is warm and empowering for patients, professional for sponsors
- [ ] No medical jargon without explanation in patient-facing content
- [ ] Icons come from `assets/icons/` catalog (check icons.json)
- [ ] Spacing follows 4px grid (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)

---

## Content-specific guidance

### Presentations / Slides

**Title slide:**
- Background: Dark blue `#0D2949`
- Logo: upper-left, white variant
- Title: Montserrat Bold, white, 48–60px
- Subtitle: Noto Sans Regular, teal-200 `#9FE3E0`, 17–22px
- Optional eyebrow: Overline style, teal-400 `#3FC7C1`

**Section divider:**
- Background: Dark blue `#0D2949`
- Title: Montserrat Bold, white, 36px
- Accent: 4px blue bar above title

**Content slide:**
- Background: White (for readability) or dark blue (for impact)
- Eyebrow: Overline in blue
- Heading: Montserrat Medium, 22–28px
- Body: Noto Sans Regular, 15px, neutral-800

**Data/stats slide:**
- Background: White
- Stat numbers: Montserrat Bold, blue `#1E67B2`, 48px
- Chart palette: blue-500, teal-500, green-500, neutral-300

**Closing slide:**
- Background: Dark blue `#0D2949`
- Logo: centered, white variant
- Contact: Noto Sans Regular, teal-200

### Digital product / Website

**Components:**
- Buttons: 8px radius, 42px default height, blue primary
- Cards: 10px radius, 1px border, white bg, shadow-xs at rest, shadow-md on hover
- Navigation: 60px height, white bg, blue active indicator (3px bottom border)
- Inputs: 42px height, 6px radius, 1.5px border, blue focus ring
- Badges: 8px radius, 11px text, medium weight

**Layout:**
- Max container: 1200px
- Page margin: 24px mobile, 48px tablet, auto desktop
- Section spacing: 48–96px
- Component gap: 16–24px
- 4px base grid

**Breakpoints:**
- Mobile: 0–480px
- Tablet: 481–768px
- Laptop: 769–1024px
- Desktop: 1025–1280px
- Wide: 1281px+

---

## Icon workflow

1. Read `assets/icons/icons.json` to find available icons by name or category
2. Categories: `navigation`, `clinical`, `ui`, `social`, `content`
3. Read the SVG file from `assets/icons/{filename}`
4. Icons use `currentColor` — they inherit the text color of their container
5. Default size: 20px. Small: 16px. Large: 24px. Feature: 32px.
6. Never use placeholder emoji, unicode symbols, or generic icon libraries when a brand icon exists
