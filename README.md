# Bun n Brew

A polished, responsive café website for **Bun n Brew**, a neighbourhood café in Nigdi, Pimpri-Chinchwad, Maharashtra.

The site is designed around three goals: make the food easy to discover, make the café easy to find, and give the brand a warm, editorial café identity.

## Pages

- **Home** — Hero, menu categories, favourites, café story, Instagram CTA, guest reviews and visit CTA.
- **Menu** — Cold Coffee, Burgers and Quick Bites with visual category cards and current-specials CTA.
- **Visit** — Address, opening hours, phone number, Google Maps embed and directions CTA.
- **Instagram** — Editorial scrapbook-style social page linking visitors to the real Bun n Brew Instagram profile.
- **404 / Error states** — Custom not-found and retry experience.

## Features

- Responsive desktop and mobile navigation
- Mobile hamburger menu with active-route states
- Visual menu organised into Cold Coffee, Burgers and Quick Bites
- Dedicated Visit page with address, hours, phone and Google Maps
- Instagram scrapbook page with Bun n Brew logo and café moments
- Accessible keyboard focus states and skip-to-content link
- Responsive image layouts and hover interactions
- Reduced-motion support
- SEO-friendly page titles and descriptions
- Open Graph metadata
- Branded SVG favicon
- Route matching tests with Vitest
- Centralised café contact information

## Tech stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI / shadcn-style component ecosystem
- Vitest

## Project structure

```text
src/
├── assets/
│   ├── coffees.jpg
│   ├── garlic-bread.jpg
│   ├── hero.jpg
│   └── instagramlogo.jpg
├── components/
│   ├── site.tsx
│   └── ui/
├── hooks/
├── lib/
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── menu.tsx
│   ├── visit.tsx
│   └── instagram.tsx
├── router.tsx
├── routeTree.gen.ts
├── server.ts
├── start.ts
└── styles.css
```

## Run locally

Requires a recent Node.js installation.

```bash
git clone https://github.com/CandyCrush808/bun-n-brew.git
cd bun-n-brew
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production checks

Run:

```bash
npm run lint
npm test
npm run build
```

For a production preview:

```bash
npm run build
npm run preview
```

## Content updates

The café's contact details and external links are centralised in:

`src/components/site.tsx`

This includes:

- Phone number
- Display phone number
- Address
- Google Maps link
- Instagram profile URL

Menu items and category content are defined in:

`src/routes/menu.tsx`

Homepage review copy and featured content are defined in:

`src/routes/index.tsx`

Instagram page content and scrapbook cards are defined in:

`src/routes/instagram.tsx`

## Content notes

- Menu prices are intentionally not invented.
- Current specials and availability are directed to the café's phone number or Instagram profile.
- The repository contains the Bun n Brew logo image used on the Instagram hero.
- The current visual content intentionally reuses the available café photography; additional original café photos can be added later without changing the page architecture.
- The existing TanStack Start/Vite architecture is retained rather than replacing the application setup.
