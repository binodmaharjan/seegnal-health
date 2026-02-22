# Seegnal eHealth - Frontend

A modern web application for healthcare management built with React, TypeScript, and Vite.

## Tech Stack

### Core

- **React 19.2** - UI library for building user interfaces
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.3** - Fast build tool and development server

### Routing & State

- **React Router 7.13** - Client-side routing
- **Context API** - State management (AuthContext)

### Styling

- **SASS 1.97** - CSS preprocessor
- **Custom Components** - Reusable UI components

### HTTP & API

- **Axios 1.13** - HTTP client for API requests

### UI Components & Icons

- **React Icons 5.5** - Icon library
- **Font Awesome 7.2** - Additional icon set
- **React Modal 3.16** - Modal dialogs

### Development Tools

- **ESLint 9.39** - Code linting
- **TypeScript ESLint 8.48** - TypeScript linting rules

## Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd seegnal-eHealth/frontend
```

2. Install dependencies:

```bash
npm install
```

## Configuration

### Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
VITE_API_URL=http://localhost:3000/api
```

### API Configuration

The API base URL is configured in `src/shared/api/axios.ts`. Update this file if you need to change the backend endpoint.

### TypeScript Configuration

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific TypeScript settings
- `tsconfig.node.json` - Node.js environment settings

## Scripts

Available npm scripts:

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
frontend/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, and other assets
│   ├── components/           # Reusable UI components
│   │   ├── custom/          # Custom components (Alert, AutoComplete, Badge, etc.)
│   │   ├── home/            # Home page components
│   │   ├── navbar/          # Navigation bar components
│   │   └── sidebar/         # Sidebar components
│   ├── config/              # Application configuration
│   ├── context/             # React Context providers
│   │   ├── AuthContext.ts   # Authentication context
│   │   └── AuthProvider.tsx # Authentication provider
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts       # Authentication hook
│   │   ├── useDrugs.ts      # Drugs management hook
│   │   ├── useInteraction.ts # Drug interaction hook
│   │   └── useLogin.ts      # Login hook
│   ├── layout/              # Layout components
│   │   ├── DashboardLayout.tsx # Main dashboard layout
│   │   ├── ProtectedRoute.tsx  # Protected route wrapper
│   │   └── PublicRoute.tsx     # Public route wrapper
│   ├── pages/               # Application pages
│   │   ├── Home/            # Home page
│   │   └── login/           # Login page
│   ├── services/            # API services
│   │   ├── auth.service.ts  # Authentication API
│   │   ├── drug.service.ts  # Drugs API
│   │   └── rules.service.ts # Drug interaction rules API
│   ├── shared/              # Shared utilities
│   │   ├── api/            # API configuration
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── styles/              # Global styles
│   │   ├── _mixins.scss    # SASS mixins
│   │   └── _variables.scss # SASS variables
│   ├── test/                # Test components
│   ├── App.tsx              # Main App component
│   ├── App.scss             # App styles
│   └── main.tsx             # Application entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

### Key Directories

- **components/custom/** - Reusable UI components like Alert, AutoComplete, Badge, Dropdown, Modal, etc.
- **hooks/** - Custom React hooks for state management and side effects
- **services/** - API integration layer for backend communication
- **context/** - Global state management using React Context API
- **layout/** - Page layouts and route protection components
- **pages/** - Top-level page components
