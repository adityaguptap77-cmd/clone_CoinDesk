# CoinDesk UI Clone

A React + Vite frontend that recreates a CoinDesk-style homepage with:

- sticky navigation and mega menus
- search modal overlay
- multi-section news layout
- explore, opinion, category, and footer sections
- refactored components and centralized mock data

## Tech Stack

- React
- Vite
- ESLint
- Plain CSS

## Getting Started

From the `my-app` folder:

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
src/
  api/
    coindeskData.js
  components/
    Navbar.jsx
    navbar.js
    Logo.jsx
    SearchModal.jsx
    icons.jsx
    sections/
      CategoryGridSection.jsx
      CountdownBanner.jsx
      ExploreSection.jsx
      Footer.jsx
      LegalFooter.jsx
      LowerNewsSection.jsx
      PopularSection.jsx
      TopNewsSection.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Component Notes

- `App.jsx` composes the page and controls search modal state.
- `src/api/coindeskData.js` stores the mock content used across the UI.
- `Navbar.jsx` handles nav popups and the account menu.
- `SearchModal.jsx` handles the search overlay opened from the navbar.
- `components/sections` contains the homepage sections split into focused files.

## Styling

- Main styling lives in `src/App.css`.
- Global resets live in `src/index.css`.
- Existing class names were preserved during refactoring to avoid layout regressions.

## Build

Production build:

```bash
npm run build
```

Generated files are output to `dist/`.

## Status

The current version is a static UI clone with mock data. It does not yet connect to a live backend or external API.
