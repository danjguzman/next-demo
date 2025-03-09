## About

<div style="text-align: center;">
  <img src="screenshot.png" alt="Screenshot of the demo">
</div>

<div style="text-align: center;">
  <img src="screenshot2.png" alt="Screenshot of the demo">
</div>

<div style="text-align: center;">
  <img src="screenshot3.png" alt="Screenshot of the demo">
</div>
<br />

This is a mock-up of a Facility Management platform—though it’s flexible enough to work for any industry—built as a live demo project with React and Next.js to showcase my front-end development skills. It focuses on crafting reusable components, managing data with a state manager (like Zustand and Redux), and wrangling data from multiple sources—fetching, parsing, and blending it into clean, UI-ready states.

The project is fully open—including all commits—and you’re welcome to follow along as I turn ideas into solid, working software. It’s still actively in development, so you might notice a few issues here and there until I get them sorted out.

*Note: if you pull this to run locally, Mapbox may not work properly since it requires a valid token to function, which I’ve omitted from my commits for obvious reasons (don't give out API keys to the world).*

## What’s Inside

This demo includes some core features you’d typically find in platforms similar to this:

- A dynamically generated table with sorting, making it easy to organize and explore data.
- A Mapbox-powered map with custom markers to visualize locations, in 2D and 3D.
- Tiles that update with live data, showing real-time info in a clean, modular way.
- Redux Toolkit implementation.

## Developer Notes

- This is focused  on showcasing my code—live demo coming soon.
- Demo coded by me, not AI.

## Installation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.