# HayDay Profit Guide

A fan-made reference guide for the mobile game **Hay Day**, focused on helping players maximize their in-game coin profit. The app provides sortable data tables for crops, trees & bushes, and Tom's requests so you can quickly figure out what's worth growing, planting, or requesting.

## Features

- **Crops Table** — compare all crops by sell price (×1 and ×10) and coins per hour, sorted by best profit rate by default
- **Trees & Bushes Table** — compare plants by cost, harvest time, revenue, net profit, and ROI %
- **Tom Request Sheet** — see all items Tom can request, sorted by sell value so you always know the most profitable request at your level
- Sortable columns on every table — click any header to re-sort
- Rank badges highlighting the top performers
- Dark-themed UI with hover effects

## Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Language | JavaScript (ESM) |
| Linting | ESLint 9 |
| Data | Local JSON files |

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with navigation bubbles
│   │   ├── CropsTable.jsx      # Crops profit table
│   │   ├── PlantsTable.jsx     # Trees & bushes profit table
│   │   ├── TomRequestTable.jsx # Tom's request value table
│   │   └── Legal.jsx
│   └── ui/
│       ├── Navbar.jsx
│       ├── SortableHeader.jsx
│       ├── RankBadge.jsx
│       └── RefBubble.jsx
└── data/
    ├── Crops.json
    ├── Plants.json
    └── Tom.json
```

---

*This is an unofficial fan project and is not affiliated with Supercell or the Hay Day brand.*
