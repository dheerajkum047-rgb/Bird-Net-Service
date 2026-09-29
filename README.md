# Surya Net Services — Website

A fully responsive, multi-section website for a local safety-net installation business, built with plain HTML, CSS and JavaScript (no frameworks, no build step) — now featuring the business's own installation photos throughout.

## Files

| File / Folder | Purpose                                                              |
|----------------|-----------------------------------------------------------------------|
| `index.html`   | Page structure and content (all sections, forms, modals).            |
| `styles.css`   | All styling — color scheme, fonts, layout, responsive rules, animations. |
| `script.js`    | All interactivity — nav, scroll reveal, lightbox, modal, forms, fabs. |
| `images/`      | 9 real installation photos used across the hero, About, Services and Gallery sections. |

Just open `index.html` in a browser — everything works locally, no server required.

## Fonts

- **Headings:** Plus Jakarta Sans (bold, modern, geometric — reads as confident and technical, fitting for a safety-engineering business)
- **Body text:** Inter (extremely legible at small sizes, the current standard for clean professional UI)

Both are loaded from Google Fonts in `index.html`'s `<head>`.

## Color scheme

Defined once at the top of `styles.css` under `:root`, so the whole site re-themes if you change these:

| Token            | Hex        | Used for                              |
|------------------|------------|----------------------------------------|
| `--navy`         | `#0B2545`  | Primary brand color, headings, nav     |
| `--navy-light`   | `#123a6b`  | Gradients / hover on navy elements     |
| `--navy-dark`    | `#071830`  | Hero & footer background               |
| `--green`        | `#157a4a`  | Safety / trust accents, checkmarks     |
| `--green-light`  | `#1f9c60`  | Gradient partner for green             |
| `--orange`       | `#FF6B35`  | Call-to-action buttons (Call/Quote)    |
| `--orange-dark`  | `#e2551f`  | CTA hover state                        |
| `--bg`           | `#F6F8FA`  | Page background                        |
| `--surface`      | `#FFFFFF`  | Cards, forms                           |
| `--text`         | `#16202e`  | Body text                              |
| `--text-muted`   | `#5b6675`  | Secondary text                         |

## Where your photos are used

| Image file                              | Used in                                              |
|-------------------------------------------|-------------------------------------------------------|
| `bird-net-pigeons-balcony.jpg`             | Hero background (with a slow zoom animation)          |
| `balcony-net-cityview.jpeg`                | About section photo                                    |
| `bird-net-render-balcony.webp`             | "Bird Net Services" card                               |
| `balcony-net-terrace-view.webp`            | "Balcony Safety Nets" card + Gallery                   |
| `building-net-apartment-view.webp`         | "Building Safety Nets" card + Gallery                  |
| `roof-net-warehouse-ceiling.jpeg`          | "Roof Net Solutions" card + Gallery                    |
| `industrial-net-installation-worker.jpg`   | Gallery                                                 |
| `building-net-industrial-black.webp`       | Gallery                                                 |
| `balcony-net-sky-view.webp`                | Gallery                                                 |

Two of your original uploads were left out to keep the site looking polished: one was a phone screenshot with the status bar and a camera watermark still visible, and one was a very small (433×180px) banner image that would look blurry at full size. Happy to work them in somewhere specific if you'd like — just let me know.

## Image animations included

- **Hero:** slow continuous zoom (Ken Burns effect) on the background photo, plus a dark gradient overlay so the headline stays readable.
- **About photo:** gentle zoom-in on hover.
- **Service cards:** photo zooms in on hover, icon badge tilts and turns orange.
- **Gallery:** photo zooms in on hover, caption label slides up, and clicking opens a full-size lightbox view.
- **Scroll reveal:** every major section fades/slides into view as you scroll down (via IntersectionObserver).

## What's fully working right now

- **Click-to-call**: phone number links use `tel:+918299772215`.
- **WhatsApp button**: floating button opens `wa.me/918299772215`.
- **Contact form & Get-Quote popup**: both forms genuinely deliver — on submit they open WhatsApp in a new tab with a pre-filled message to **8299772215**, so the visitor just taps Send. No backend, email account, or API key needed.
- **Google Map**: embedded with the business address, no API key required.
- **Gallery lightbox, scroll reveal animations, sticky nav, mobile menu, scroll-to-top button**: all working with plain JS, no external libraries.

## Things to replace before going live

1. **Customer reviews** in the Reviews section are sample placeholders — replace with your real customer quotes and names.
2. **Social links** in the footer (`#`) — point them to your real Facebook/Instagram pages.
3. If you have higher-resolution versions of any gallery photo, swap the file in `images/` (keep the same filename, or update the `src`/`data-full` attribute in `index.html`).

## Optional upgrades

- If you'd rather receive form submissions by email instead of WhatsApp, swap the `sendToWhatsApp(...)` calls in `script.js` (section 7) for a service like Formspree or Getform, or your own backend endpoint.

## Deploying

This is a static site — you can host it for free on Netlify, Vercel, GitHub Pages, or any standard web host by uploading the `index.html`, `styles.css`, `script.js` files and the whole `images/` folder together (keep them in the same relative structure so the links resolve).
