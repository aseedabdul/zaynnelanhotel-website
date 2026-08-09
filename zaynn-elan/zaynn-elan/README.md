# Zaynn Élan — Luxury Hotel & Residences

A production-quality frontend for the fictional five-star hotel brand **Zaynn Élan**, built with
**React + Vite**. This is a fully static marketing/booking-demo site — there is no backend, and no
form actually submits anywhere (this is called out honestly in the UI itself).

## Tech stack

- **React 18** (function components + hooks, no external state library)
- **Vite 5** for dev server / bundling
- Plain CSS with design tokens (no CSS framework) — see `src/styles/global.css`
- Zero UI dependencies beyond React itself (icons are hand-drawn inline SVG)

## Project structure

```
zaynn-elan/
├── index.html                 # Vite entry HTML (fonts, meta, JSON-LD)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                # React root
│   ├── App.jsx                 # Page composition (section order)
│   ├── styles/
│   │   └── global.css          # All design tokens + component styles
│   ├── data/                   # Content lives here, separate from markup
│   │   ├── images.js           # Central image manifest (see below)
│   │   ├── rooms.js
│   │   ├── dining.js
│   │   ├── spa.js
│   │   ├── gallery.js
│   │   ├── services.js
│   │   ├── testimonials.js
│   │   └── faq.js
│   ├── hooks/
│   │   ├── useReveal.js        # Scroll-triggered fade/slide-up animation
│   │   └── useFocusTrap.js     # Modal focus trap + ESC-to-close + focus restore
│   └── components/
│       ├── Nav.jsx / Hero.jsx / BookingBar.jsx / Intro.jsx
│       ├── Rooms.jsx + RoomModal.jsx        # "View Room" opens a detail modal
│       ├── Services.jsx / Icon.jsx
│       ├── Dining.jsx + DiningModal.jsx     # "Discover Dining" opens a detail modal
│       ├── Spa.jsx + SpaModal.jsx           # "Explore Wellness" opens a detail modal
│       ├── Experiences.jsx / WhyChoose.jsx / Signature.jsx
│       ├── Testimonials.jsx / Gallery.jsx / Location.jsx / FAQ.jsx
│       ├── Contact.jsx / Newsletter.jsx / Footer.jsx
│       └── Modal.jsx           # Shared accessible modal shell
```

## Getting started

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
# → opens http://localhost:5173

# 3. Build a production bundle
npm run build
# → outputs to /dist

# 4. Preview the production build locally
npm run preview
```

## What's interactive

- **Rooms → "View Room"** opens an accessible modal with a room-specific photo set
  (bedroom / bathroom / living or sitting area / view), full amenity list, size, guest count,
  bed type, starting price, and a **Book Now** CTA that scrolls to the contact form.
- **Dining → "Discover Dining"** opens a modal per venue (ÉLAN, NOIR, TERRACE) with its own
  photography, cuisine, hours, extended description, and a reservation CTA.
- **Spa & Wellness → "Explore Wellness"** opens a modal listing signature treatments (massage,
  sauna & steam, wellness facial, private yoga, fitness studio access), spa photography, hours,
  and a booking CTA.
- All three modal types:
  - close on **Escape**, on backdrop click, and via a labelled close button;
  - **trap keyboard focus** while open and **restore focus** to the trigger element on close;
  - are marked up with `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
- The **contact form** and **newsletter form** perform real client-side validation (required
  fields, email format) and show an honest "this is a demo form" success state — nothing is
  actually emailed or stored, by design (there's no backend to do so).

## Image sourcing

Every photo on the site is real, free-to-use photography from **Unsplash**
(https://unsplash.com/license — free for commercial use, no attribution required), declared once
in `src/data/images.js` and imported everywhere else. Nothing is a placeholder, and nothing is a
broken link — all sources were verified before being wired in.

Within the constraints of freely-licensed stock photography, each **room**, each **dining venue**,
and the **spa** use their own distinct photographs (no image is shared between Grand Deluxe /
Executive / Presidential, and no image is shared between ÉLAN / NOIR / TERRACE). The **Gallery**
section draws on the same property-wide photo library (exterior, lobby, pool, dining, lounge,
sauna, fitness) rather than repeating any Rooms-section photo, to read as a broader retrospective
of the property.

If you have your own licensed photography for Zaynn Élan, replace the URLs in
`src/data/images.js` — every component reads from that single file, so nothing else needs to change.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`) and a logical heading hierarchy.
- Skip-to-content link, visible focus states on every interactive element.
- Keyboard-operable navigation, accordion FAQ (native `<details>`), and modals.
- Respects `prefers-reduced-motion` (scroll reveals and modal transitions are disabled).
- Form fields have associated `<label>` elements and inline error messaging.

## Notes

- This is a **demo/concept** project. The booking bar, contact form, and newsletter form do not
  connect to any backend — this is intentional and stated in the UI.
- "Zaynn Élan" is a fictional brand created for this design exercise.
