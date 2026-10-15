# Erin Hsu portfolio

A Next.js site built from the Figma home page (frame "MacBook Pro 14" - 4").

## Where things live

| To change | Edit |
| --- | --- |
| Colors, label size | `app/globals.css` (the variables at the top) |
| Collage layout | `components/Collage.module.css` (the `grid-template-areas` block) |
| Which image goes where, alt text, links | `content/tiles.ts` |
| Name, statement, about link, category links | `components/Collage.tsx` |
| Fonts | `app/layout.tsx` |

## Adding images

Put each file in `public/images/` using the name listed in `content/tiles.ts`
(for example `public/images/gotgt.png`). Any image that is missing shows as a
gray box with its expected file name, so you can see what is left.

## Putting it online (GitHub + Vercel)

1. **GitHub:** create an empty repository (github.com > New repository, no README).
   Claude can push this code to it once the repo is connected to the project.
2. **Vercel:** sign in at vercel.com with your GitHub account, choose
   "Add New > Project", pick the repository and press Deploy. Vercel detects
   Next.js on its own; no settings need changing.
3. From then on, every change pushed to GitHub updates the live site by itself.

## Running it on your computer (optional)

1. Install Node.js (the LTS version) from https://nodejs.org.
2. In this folder run `npm install`, then `npm run dev`.
3. Open http://localhost:3000.
