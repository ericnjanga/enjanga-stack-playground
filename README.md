# enjanga-stack-playground

A local project linked to a Git repo that will act as a sandbox. The project will be built with Next.js and will have several routes showcasing different code demos.

Each route of the project will showcase a demo built in a specific stack.

Some demos will be in React/TypeScript, others will be purely JavaScript, others will be JavaScript/TypeScript, and some will be a mix of Next.js architecture with other stacks.

The idea is to experiment with different stacks and showcase how the same feature can be built in different ways.

## Example routes

- `/react-dynamic-form`: a dynamic form built with React/TypeScript.
- `/js-dynamic-form`: the same dynamic form, built with JavaScript/TypeScript only, with direct manipulation of the DOM tree.
- `/nextjs-streaming-rendering`: a Next.js demo of the streaming rendering strategy.

## Run locally

Use Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000 to view the project.

## Project setup

The project uses Next.js App Router, React, TypeScript, Tailwind CSS, and ESLint. Application routes live in `src/app`. JavaScript files are also supported so each demo can use its own stack.

The homepage lists the planned demos. The demo routes will be added as they are built.

## Available commands

- `npm run dev`: start the development server.
- `npm run build`: build the project for production.
- `npm start`: run the production build.
- `npm run lint`: check the code with ESLint.
- `npm run typecheck`: check TypeScript types.

## Styling with Tailwind CSS

Use Tailwind utility classes directly in your components to create quick layouts.

```tsx
<div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
  <section className="rounded-xl bg-white p-6 text-slate-900 shadow-sm">First panel</section>
  <section className="rounded-xl bg-white p-6 text-slate-900 shadow-sm">Second panel</section>
</div>
```

Tailwind is loaded in `src/app/globals.css` through the PostCSS plugin.

## Testing

- `npm test`: run unit and component tests with Vitest and React Testing Library.
- `npm run test:watch`: rerun unit tests as files change.
- `npm run test:e2e`: run Playwright tests in Chromium against a production build.
- `npm run test:e2e:ui`: open the Playwright test interface.

Unit tests live in `tests/unit` or next to the code as `*.test.tsx`. Browser tests live in `tests/e2e`. The `@/` import alias works in Vitest. Jest DOM matchers and React cleanup are configured in `tests/setup.ts`. User Event is installed for interaction tests.

Playwright starts and stops its own server on port 3100. On a new machine, run `npx playwright install chromium` once to install its browser. Use Playwright for async Server Components and streaming demos.

## Publication categories

Edit `src/data/publications.json` to organize articles. Each article has a `categories` array containing `javascript`, `react`, and/or `nextjs`. Use an empty array for articles that belong in Others. Articles may appear in more than one category. Keep the array of articles in LinkedIn's newest-first order; filtering preserves that order.

The active category is stored in `/publications?filter=react` (also `all`, `javascript`, `nextjs`, or `others`). Missing or unsupported filter values display All.

## Demo registry

`src/data/demos.ts` stores each demo once in `demos`, with a stable numeric ID. `currentDemos` and `plannedDemos` contain IDs only; their order controls the homepage and sidebar order. Move an ID between these arrays to change a demo's status. Keep each ID in exactly one group, and ensure current demos have a route.

Use `getCurrentDemos()` and `getPlannedDemos()` to resolve the groups, and `getDemoByRoute()` for route metadata. Preserve existing IDs when editing titles or descriptions. For new demos, assign a new unique ID once rather than generating one during rendering.

## Quality checks before deployment

`npm run build` runs ESLint and unit tests before building Next.js. A lint error, failed unit test, or compilation/type error stops the build. Warnings remain visible but do not block the build, so intentional learning experiments can retain warnings.

`vercel.json` sets Vercel's build command to `npm run build`, applying the same checks before a deployment can be published. GitHub Actions also runs these checks on pushes and pull requests. Browser tests remain available separately through `npm run test:e2e`.

To prevent merging failing pull requests, configure the GitHub branch rules to require the `Lint, tests, and build` check. GitHub checks alone do not gate Vercel deployments; the build command provides the deployment gate.

Unit-test scripts explicitly set `NODE_ENV=test` with `cross-env`. This keeps React testing APIs available even when the deployment build starts with `NODE_ENV=production`; the Next.js build still runs in production mode.
