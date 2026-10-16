# Erin Hsu portfolio

A Next.js site built from the Figma page "final structure".

## Pages

- `/`: home collage. Hovering the name shows the statement, hovering a category
  makes its tiles glow in that category's colour, and clicking a tile opens the project.
- `/product`, `/brand` and `/visual`: one page for each category.
- `/about`: a placeholder for now.

## Where things live

| To change | Edit |
| --- | --- |
| Projects: titles, categories, images, write-ups | `content/projects.ts` |
| Category colours and statements | `content/projects.ts` (`categoryInfo`) |
| Colors, sizes, animation speed | `app/globals.css` (the variables at the top) |
| Home collage layout | `components/Home.module.css` (the `grid-template-areas` blocks) |
| Category page layouts | `components/CategoryPage.module.css` |
| How a project opens | `components/ProjectViewer.tsx` |
| The "Erin Hsu" lettering | `components/Wordmark.tsx` |
| Fonts | `app/layout.tsx` |

## Adding images

Put each file in `public/images/`, then point to it in `content/projects.ts`
with its real pixel width and height.

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
