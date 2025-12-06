# Barbershop Marketplace

A modern React-based barbershop marketplace application built with Vite, TypeScript, and TailwindCSS.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

> **Note**: Replace the URL with your actual backend API endpoint.

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── ui/              # Reusable UI components (Toaster)
├── lib/                 # Utilities and API client
├── pages/
│   ├── admin/           # Admin portal pages
│   ├── auth/            # Authentication pages (Login, Register, etc.)
│   └── dashboard/       # Dashboard pages for barbers and clients
├── routes/              # Route guards (ProtectedRoute)
└── stores/              # Zustand state stores
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Zustand** - State management
- **React Query** - Server state management
- **Axios** - HTTP client
- **Leaflet** - Map integration

## Notes

### Leaflet CSS

This project uses `react-leaflet` for map functionality. The Leaflet CSS is imported in `src/index.css`. Make sure the import is present:

```css
@import 'leaflet/dist/leaflet.css';
```

### Tailwind Setup

TailwindCSS is configured in `tailwind.config.js` and uses the Tailwind directives in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## License

Private - All rights reserved.
