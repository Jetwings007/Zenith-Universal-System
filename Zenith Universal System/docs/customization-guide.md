# Zenith Customization Guide

This guide helps you adapt Zenith quickly for different niches and clients.

## 1) Use The Two-Click Rebrand

Edit only `src/styles/tokens.css`:

- `--zenith-primary`
- `--zenith-accent`
- `--zenith-spark`
- `--zenith-radius-*`
- `--zenith-container`
- `--zenith-font-body`
- `--zenith-font-heading`

If you want a new preset, create a new body class like:

```css
body.theme-finance {
  --zenith-primary: #0f5acc;
  --zenith-accent: #0db28f;
  --zenith-spark: #ffc245;
}
```

Then add a preset button in `index.html`:

```html
<button class="theme-pill" data-theme="finance">Finance</button>
```

Theme logic is handled in `src/scripts/zenith.js`.

If you want instant niche branding, include one preset file after `tokens.css`:

- `src/styles/presets/ai-theme.css`
- `src/styles/presets/finance-theme.css`
- `src/styles/presets/dev-theme.css`

## 2) Swap Content by Niche

Use this quick replacement model:

- SaaS: product clarity, integrations, pricing plans
- Agency: process, portfolio, testimonials
- Ecommerce: product focus, social proof, FAQ, guarantees

Keep section structure but replace copy and metrics.

## 3) Build Template Packs

Create separate folders for each market target:

- `packs/saas`
- `packs/agency`
- `packs/ecommerce`

For each pack include:

- Demo homepage
- 2 to 5 inner pages
- Copywriting cheat sheet
- Documentation and setup guide
- License text

## 4) Improve Conversion Quality

For every page:

- Keep one primary CTA visible per section
- Place trust proofs before pricing
- Keep above-the-fold headline outcome-focused
- Use short paragraphs and scannable cards
- Include at least one objection-handling FAQ block

## 5) Mobile Quality Check

Before release:

- Test hero at 360px, 390px, and 768px widths
- Confirm menu toggle works
- Ensure card grids collapse correctly
- Verify CTA buttons remain visible and readable

## 6) Lighthouse and Accessibility

Before listing Zenith versions for sale:

- Compress image assets in `assets/images/`
- Keep JS small and remove unused effects
- Verify heading order (`h1` -> `h2` -> `h3`)
- Check keyboard navigation and focus visibility
- Ensure color contrast remains readable in every preset

See `docs/preflight-lighthouse.md` for the full pre-sale checklist.
