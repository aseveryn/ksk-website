# KSK Consulting Group — website

Website for [KSK Consulting Group](https://www.facebook.com/people/KSK-Consulting-Group/61569291357729/),
a law firm in Tbilisi, Georgia (civil, administrative and criminal law + corporate counsel).

**Live:** https://ksk.ge (GitHub Pages; aseveryn.github.io/ksk-website redirects here)

## Stack

Single self-contained `index.html` — no build step, no dependencies.

- Design: "Counsel of Record" — paper/ink editorial style, EB Garamond + IBM Plex (+ Noto Georgian fallbacks)
- Trilingual: Georgian (default) / English / Russian — inline i18n dictionaries, switcher in the header, choice persisted in `localStorage`
- Primary CTA: WhatsApp (`wa.me/995571100022`); phone and Facebook Messenger secondary
- Images in `assets/img/` (captured from the firm's Facebook page — replace with originals when available)

## Deploy

Pushing to `main` auto-deploys via GitHub Pages (Settings → Pages → `main` / root).
Changes go live in ~1 minute; browsers may cache up to 10 minutes (`max-age=600`).

## Editing content

All copy lives in `index.html`:

- English text is in the markup (elements tagged `data-i18n`)
- Georgian/Russian translations are in the `I18N` dictionaries in the inline script at the bottom
- When adding text, tag the element with `data-i18n="key"` and add the key to both `ka` and `ru` dictionaries
