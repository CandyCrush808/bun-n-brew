# Bun n Brew

A polished, responsive café website for **Bun n Brew**, a neighbourhood café in Nigdi, Pimpri-Chinchwad, Maharashtra.

The site focuses on three things: making the food easy to discover, making the café easy to find, and making the brand feel warm and premium.

## Features

- Responsive homepage with hero, café story, favourites, reviews and visit CTA
- Visual menu organised into Cold Coffee, Burgers and Quick Bites
- Dedicated Visit page with address, opening hours, phone and Google Maps
- Responsive desktop/mobile navigation
- Accessible focus states and keyboard-friendly navigation
- SEO-friendly route titles and descriptions
- Custom 404 and root error boundaries
- Reduced-motion support
- Route matching tests with Vitest

## Tech stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI / shadcn-style components
- Vitest

## Project structure

```text
src/
├── assets/
│   ├── coffees.jpg
│   ├── garlic-bread.jpg
│   └── hero.jpg
├── components/
│   ├── site.tsx
│   └── ui/
├── hooks/
├── lib/
├── routes/
│   ├── __root.tsx
│   ├── index.tsx
│   ├── menu.tsx
│   └── visit.tsx
├── router.tsx
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

Run the same checks used before pushing changes:

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

The café's phone, address, map link and Instagram URL are centralised in:

`src/components/site.tsx`

Menu items are defined in:

`src/routes/menu.tsx`

Homepage review copy and featured content are defined in:

`src/routes/index.tsx`

## Notes

- Menu prices are intentionally not invented; the UI directs visitors to call or Instagram for current pricing.
- No logo image is included in the repository yet, so the brand name is rendered as styled text.
- The existing TanStack Start/Vite setup is retained instead of replacing the application architecture.
