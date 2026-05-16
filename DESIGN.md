---
name: Design Lab Portfolio
description: Quiet editorial portfolio hero with warm neutrals, serif-sans contrast, and one-screen desktop pacing.
colors:
  neutral-bg: "#FBFAF6"
  surface: "#F6F2EA"
  highlight: "oklch(97.1% 0.006 88)"
  section-wash: "oklch(94.8% 0.013 86)"
  ink: "#1A1713"
  muted: "#847B72"
  muted-strong: "#5D564D"
  line: "#E8E0D7"
typography:
  display:
    fontFamily: "Iowan Old Style, Baskerville, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(2.45rem, 4.1vw, 4.6rem)"
    fontWeight: 300
    lineHeight: 0.94
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Avenir Next, Helvetica Neue, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Avenir Next, Helvetica Neue, Segoe UI, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Avenir Next, Helvetica Neue, Segoe UI, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.24em"
  eyebrow:
    fontFamily: "Avenir Next, Helvetica Neue, Segoe UI, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.34em"
rounded:
  sm: "12px"
  card: "19px"
  image: "32px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  "2xl": "24px"
  "3xl": "32px"
  "4xl": "48px"
  "5xl": "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.neutral-bg}"
    typography: "{typography.headline}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.muted-strong}"
    typography: "{typography.headline}"
    rounded: "0px"
    padding: "0 0 4px"
  page-shell:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.ink}"
    width: "1440px"
    height: "100svh desktop"
    padding: "20px / 32px / 48px / 64px"
  hero-image:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.image}"
    width: "29rem"
    height: "auto"
    size: "7:8"
  status-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    width: "15rem"
    padding: "14px 16px"
  nav-link:
    textColor: "{colors.muted-strong}"
    typography: "{typography.headline}"
    padding: "0"
  trust-row:
    textColor: "{colors.muted-strong}"
    typography: "{typography.label}"
    padding: "24px 0 0"
  stats-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "20px 0 0"
---

# Design System: Design Lab Portfolio

## Overview

**Creative North Star: "The Gallery Label"**

This system frames the portfolio like a museum label beside a large portrait, calm, specific, and expensive without trying too hard. The left column carries the voice, the right column carries the image, and the lower rows provide proof without competing with the hero. On desktop the whole composition is meant to read at a glance inside a `100svh` viewport, so the page feels complete before any scroll.

The visual language is minimal, editorial, and warm. It rejects startup clutter, generic AI SaaS layouts, loud gradients, glassmorphism, heavy shadows, neon accents, and anything that makes the page feel like a template trying to perform sophistication. Structure comes from typography, crop, overlap, and measured whitespace, not decoration.

Key Characteristics:
- warm paper background, charcoal text, linen borders
- serif display type paired with a grounded sans body face
- left text column, right portrait column, floating status card
- flat surfaces with overlap instead of shadow theatrics
- compact support rows for trust and stats, never noisy card grids
- full hero visibility on desktop, looser stack on mobile

## Colors

The palette stays warm, neutral, and restrained. It should feel closer to paper and ink than to interface color.

### Primary
- **Ink** (`#1A1713`): used for the main headline, CTA, navigation mark, stat numbers, and the strongest UI contrast.

### Neutral
- **Warm Paper** (`#FBFAF6`): the page background, always soft, never pure white.
- **Linen Surface** (`#F6F2EA`): the portrait frame, availability card, and any secondary surface.
- **Highlight Wash** (`#EEEEE8`): the paper block behind the italic closing word in the headline.
- **Soft Line** (`#E8E0D7`): borders, dividers, and low-emphasis rules.
- **Quiet Taupe** (`#847B72`): eyebrow text, trust row labels, and secondary metadata.
- **Deep Taupe** (`#5D564D`): body copy, support copy, and quieter UI text.

### Named Rules
**The One Ink Rule.** Keep the system in warm neutrals and a single dark ink tone. If a new accent cannot justify itself as paper, linen, taupe, or ink, it does not belong.

## Typography

**Display Font:** Iowan Old Style, Baskerville, Palatino Linotype, Georgia, serif  
**Body Font:** Avenir Next, Helvetica Neue, Segoe UI, system-ui, sans-serif  
**Label Font:** Avenir Next, Helvetica Neue, Segoe UI, system-ui, sans-serif

**Character:** The serif carries the emotional weight, the sans keeps the page modern and stable. The pairing should feel like an editorial cover with an agency caption, not a fashionable display trick.

### Hierarchy
- **Display** (`300`, `clamp(2.45rem, 4.1vw, 4.6rem)`, `0.94`): hero headline only. Keep it around `12ch` wide so the stack stays compact and legible.
- **Headline** (`500`, `1rem`, `1`): short emphatic UI lines, the first hero line, and compact action text.
- **Body** (`400`, `0.95rem` to `1rem`, `1.6`): paragraph copy. Keep it around `34ch` so the left column stays calm.
- **Label** (`500`, `0.68rem`, `0.24em`, uppercase): trust row labels, stat labels, nav text, and metadata.
- **Eyebrow** (`500`, `0.7rem`, `0.34em`, uppercase): the small studio line above the hero headline.

### Named Rules
**The Mixed-Line Rule.** The hero can mix sans and serif inside the same headline, but the contrast should stay restrained. One line of sans, one or two lines of serif, then stop.

## Elevation

This system is essentially flat. It does not depend on shadow stacks, blur, or glass to feel premium. Depth comes from border contrast, the warm tint of surfaces, rounded corners, and the overlap of the availability card against the image.

### Shadow Vocabulary
- None. Surfaces stay flat at rest, and separation is handled with tone, border, and offset.

### Named Rules
**The Flat-By-Default Rule.** Use borders and overlap before shadow. If a surface needs more hierarchy, change the layout or the tone, not the blur.

## Components

### Buttons
Compact, tactile, and quiet. The primary action should feel like a small object, not a banner.
- **Shape:** pill radius (`9999px`), never squared off.
- **Primary:** dark ink background, warm paper text, `10px 20px` padding.
- **Hover / Focus:** tiny upward movement or color shift only. No glow, no bounce, no oversized scale.
- **Secondary:** text-first, with a single low-contrast underline or bottom rule, `0 0 4px` padding.
- **Shared variants:** primary, underline, and link are centralized in one component so motion and styling can change together.

### Cards / Containers
Containers should feel like cut paper, not floating panels.
- **Page shell:** max width `1440px`, horizontal padding `20px` on mobile, `32px` on small screens, `48px` on desktop, `64px` on wide screens, `100svh` desktop contract.
- **Section shell:** each section owns its own full-bleed background, while an inner max-width wrapper keeps content aligned and lets color or imagery change per band.
- **Hero image:** `28rem` wide, `7:8` ratio, `32px` radius, warm linen surface behind the crop.
- **Availability card:** `15rem` wide, `19px` radius, `14px 16px` padding, positioned to overlap the lower right of the image.
- **Border treatment:** always full borders or dividers, never colored side stripes.

### Navigation
Minimal and low-noise.
- **Desktop:** one-letter mark on the left, inline links in the center, pill CTA on the right.
- **Mobile:** the CTA can hide, links wrap naturally, and nothing should feel trapped in a menu.
- **Typography:** small, muted, and tracked. The navbar should stay present but never dominate the hero.
- **Scroll treatment:** the header can stick to the top with a soft blurred paper surface and a thin bottom rule so it stays readable over changing section backgrounds.

### Trust Row
The trust row is a compact proof strip, not a logo wall.
- **Style:** uppercase names, low-emphasis text, one thin divider above.
- **Sizing:** small label scale, tight tracking, single-line on desktop with natural wrap on smaller screens.
- **Behavior:** keep the row quiet. Do not turn it into badges or cards.

### Stats Row
This is a simple capability strip, not a hero metric trope.
- **Style:** large numerals, small uppercase labels, and one short sentence of support text.
- **Sizing:** four compact columns on desktop, stacking on smaller screens.
- **Behavior:** keep the copy secondary. The numbers support the story, they do not become the story.

## Do's and Don'ts

### Do:
- **Do** keep the desktop shell inside `100svh` and `overflow-hidden` so the full hero is visible at one glance.
- **Do** keep the headline compact, around `13.5ch`, with the body at `34ch` to `37ch`.
- **Do** keep the image around `29rem` wide with a `7:8` crop and the floating card around `15rem` wide.
- **Do** use the existing warm neutral palette, with the page background, image frame, and support surfaces staying close in value.
- **Do** let the left column and right column feel intentionally asymmetrical, but never disconnected.

### Don't:
- **Don't** introduce gradients, glassmorphism, glowing effects, or heavy shadows.
- **Don't** turn the hero into a generic centered SaaS stack or a startup-style cluttered landing page.
- **Don't** let body copy run wide, the type should stay calm and readable, not stretched across the screen.
- **Don't** use border-left or border-right greater than `1px` as a colored accent.
- **Don't** add extra accent colors, random floating shapes, or identical card grids that make the page feel templated.
- **Don't** push the image so tall that the hero stops reading as one composition.
