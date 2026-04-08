# Zenith

Zenith is a universal SaaS landing page system built for developers, designers, and beginners who need speed, clarity, and conversion.

This project is structured like a commercial product, not a one-off template.

## Zenith Manifesto

Zenith follows three non-negotiable product pillars:

1. **The 100/100 Rule**  
   Every Zenith build should be capable of top Lighthouse outcomes for Performance, Accessibility, and SEO with production assets.
2. **The Two-Click Rebrand**  
   Rebrand by editing one token file: `src/styles/tokens.css` or by dropping in a preset file.
3. **Zero Dependency**  
   No required third-party plugin stack. Zenith runs with native HTML, CSS, and JavaScript.

See `docs/zenith-manifesto.md` for details.

## Professional Folder Structure

```txt
Zenith/
  src/
    components/
      sections/
    styles/
      presets/
    scripts/
  assets/
    icons/
    images/
  templates/
  docs/
  index.html
  404.html
  legal.html
  success.html
```

## What You Get

- Main conversion-focused demo: `index.html`
- Safety net pages:
  - `404.html`
  - `legal.html`
  - `success.html`
- Token-driven styling:
  - `src/styles/tokens.css`
  - `src/styles/zenith.css`
- Niche preset bundles:
  - `src/styles/presets/ai-theme.css`
  - `src/styles/presets/finance-theme.css`
  - `src/styles/presets/dev-theme.css`
- Interaction layer: `src/scripts/zenith.js`
- Reusable conversion section snippets: `src/components/sections/`
- Variant templates:
  - `templates/startup-saas.html`
  - `templates/studio-portfolio.html`
- Business docs:
  - `docs/universal-challenges.md`
  - `docs/copywriting-cheatsheet.md`
  - `docs/customization-guide.md`
  - `docs/marketplace-launch.md`
  - `docs/sales-listing-copy.md`
  - `docs/form-integration.md`
  - `docs/preflight-lighthouse.md`

## Quick Start

1. Open `index.html`.
2. Edit `src/styles/tokens.css` to rebrand.
3. Update copy using `docs/copywriting-cheatsheet.md`.
4. Reuse sections from `src/components/sections/`.
5. Clone and niche one of the variants in `templates/`.

## Niche Presets (Two-Click Rebrand)

To apply a preset globally, include one preset file after `tokens.css`:

```html
<link rel="stylesheet" href="src/styles/tokens.css" />
<link rel="stylesheet" href="src/styles/presets/ai-theme.css" />
<link rel="stylesheet" href="src/styles/zenith.css" />
```

## Form Setup (2 Minutes)

Zenith includes a working waitlist flow by default:

- Form in `index.html` submits to `success.html`.

To send real emails, connect a service:

1. **Formspree**: Change form `action` and set `method="POST"`.
2. **Netlify Forms**: Add `data-netlify="true"` and a form name.

Full steps are in `docs/form-integration.md`.

## Visual Weight and Placeholders

- Zenith includes `assets/icons/logo-zenith.svg` as a logo guide.
- Feature sections use placeholder visuals with `width` and `height` attributes.
- Before shipping to marketplaces, replace placeholder visuals with optimized assets to protect Lighthouse scores.

## Performance Pre-Flight

Before selling, run Lighthouse on mobile.

Checklist: `docs/preflight-lighthouse.md`

## Positioning Statement

Sell Zenith as:

**"A developer-first SaaS landing page system that helps you launch and convert in hours, without design bottlenecks."**
