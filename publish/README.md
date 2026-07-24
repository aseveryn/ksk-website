# ksk-website-redesign

Redesigned homepage for KSK Consulting Group (direction 1a — "Counsel of Record").
Static, single-file, no build step.

## Publish to GitHub Pages

1. Create a repo named `ksk-website-redesign` under your account.
2. Add `index.html` (and this README) to the repo root, commit, push to `main`.
3. Repo → Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / `/ (root)` → Save.
4. Live at https://aseveryn.github.io/ksk-website-redesign/ in a minute or two.

## Images

Photos are currently hot-linked from the existing site:
`https://aseveryn.github.io/ksk-website/assets/img/…`

To make this repo self-contained, copy that `assets/img/` folder in and
replace the absolute URLs with `assets/img/…`.

## Notes

- Fonts: EB Garamond + IBM Plex Sans/Mono via Google Fonts.
- Primary CTA is WhatsApp (`wa.me/995571100022`) throughout; phone is secondary.
- Responsive down to 640px; a floating WhatsApp button appears on small screens.
- Motion respects `prefers-reduced-motion`.
- English only. Language switcher in the header is display-only — GE/RU pages not built.
