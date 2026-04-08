# Zenith Pre-Flight Lighthouse Test

Run this before selling any Zenith bundle.

## Mobile Lighthouse Check

1. Open `index.html` in Chrome.
2. Right-click and select `Inspect`.
3. Open the `Lighthouse` tab.
4. Choose `Navigation` and `Mobile`.
5. Run report.

## Pass / Fail Rule

- If scores are `90+` for Performance, Accessibility, and SEO, you are launch-ready.
- If lower, fix top opportunities first.

## Common Fixes

- Add `width` and `height` on all images.
- Replace remote placeholder images before release.
- Compress large assets in `assets/images/`.
- Remove unused CSS and script blocks.
- Ensure heading order is consistent.

## Required Zenith Sales Rule

Never publish a marketplace bundle without running this checklist at least once on mobile.
