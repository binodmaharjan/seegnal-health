# Seegnal eHealth

## Overview

A modern fullstack seegnal app built with React, TypeScript, Node.js, and PostgreSQL.

## Quick Start (Docker)

Get the entire application running with one command:

```bash
# Clone the repository
git clone <repository-url>
cd seegnal-health

# Start all services (PostgreSQL, Backend, Frontend)
docker-compose up -d

# Access the application
# Frontend: http://localhost:5173
# Backend API: http://localhost:3000
# Login: yura.zharkovsky@seegnal.com / Abcd1234!
```

The database will be automatically created and seeded.

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Sequelize TypeScript** - ORM with decorator support
- **PostgreSQL** - Relational database
- **JWT** - Authentication & authorization
- **bcrypt** - Password hashing

### Frontend

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **SASS** - CSS preprocessor
- **React Icons** - Icon library
- **Font Awesome** - Additional icons

### Development Tools

- **Nodemon** - Backend hot reload
- **Concurrently** - Run multiple npm scripts
- **ESLint** - Code linting
- **ts-node** - TypeScript execution
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Web server for frontend production builds

## Project Structure

```
seegnal-eHealth/
├── docker-compose.yml            # Docker production orchestration
├── docker-compose.dev.yml        # Docker development orchestration
├── .dockerignore                 # Docker ignore file
├── DOCKER.md                     # Docker documentation
├── backend/                      # Backend API
│   ├── Dockerfile               # Backend production Docker image
│   ├── Dockerfile.dev           # Backend development Docker image
│   ├── docker-entrypoint.sh     # Backend startup script
│   ├── .dockerignore            # Backend Docker ignore
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts      # Sequelize configuration
│   │   ├── middleware/
│   │   │   └── authorize.ts     # JWT authorization
│   │   ├── models/              # Database models
│   │   │   ├── User.ts          # User model
│   │   │   ├── Drug.ts          # Drug model
│   │   │   └── Rule.ts          # Interaction rules
│   │   ├── modules/             # Feature modules
│   │   │   ├── auth/            # Authentication module
│   │   │   ├── drugs/           # Drug management module
│   │   │   └── drugs-interaction/  # Drug interaction module
│   │   ├── seeders/
│   │   │   └── index.ts         # Database seeder
│   │   ├── shared/
│   │   │   └── utils/
│   │   │       └── jwt.ts       # JWT utilities
│   │   └── index.ts             # Express app entry
│   ├── package.json
│   ├── Dockerfile               # Frontend Docker image
│   ├── nginx.conf               # Nginx configuration for production
│   ├── .dockerignore            # Frontend Docker ignore
│   ├── tsconfig.json
│   └── nodemon.json
│
├── frontend/                     # Frontend application
│   ├── src/
│   │   ├── assets/              # Images, fonts, etc.
│   │   ├── components/          # Reusable UI components
│   │   │   ├── custom/          # Custom components
│   │   │   │   ├── alert/       # Alert dialog
│   │   │   │   ├── autocomplete/ # Autocomplete input
│   │   │   │   ├── badge/       # Badge component
│   │   │   │   ├── dropdown/    # Dropdown menu
│   │   │   │   └── modal/       # Modal component
│   │   │   ├── home/            # Home page components
│   │   │   │   ├── drugs-related-problems/
│   │   │   │   └── medication/
│   │   │   ├── navbar/          # Navigation bar
│   │   │   └── sidebar/         # Sidebar navigation
│   │   ├── config/              # App configuration
│   │   ├── context/             # React Context
│   │   │   ├── AuthContext.ts
│   │   │   └── AuthProvider.tsx
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useDrugs.ts
│   │   │   ├── useInteraction.ts
│   │   │   └── useLogin.ts
│   │   ├── layout/              # Layout components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── PublicRoute.tsx
│   │   ├── pages/               # Page components
│   │   │   ├── Home/
│   │   │   └── login/
│   │   ├── services/            # API services
│   │   │   ├── auth.service.ts
│   │   │   ├── drug.service.ts
│   │   │   └── rules.service.ts
│   │   ├── shared/              # Shared utilities
│   │   │   ├── api/
│   │   │   │   └── axios.ts     # Axios configuration
│   │   │   ├── types/           # TypeScript types
│   │   │   └── utils/           # Utility functions
│   │   ├── styles/              # Global styles
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── App.tsx              # Main App component
│   │   └── main.tsx             # Entry point
│   ├── public/                   # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── package.json                  # Root package.json
```

## Installation

### Prerequisites

#### Option 1: Docker (Recommended)

- **Docker** - Container platform
- **Docker Compose** - Multi-container orchestration

#### Option 2: Manual Setup

- **Node.js** (v20 or higher)
- **PostgreSQL** database
- **npm**

### Option 1: Quick Start with Docker

The easiest way to run the entire application with all dependencies:

1. **Clone the repository:**

```bash
git clone <repository-url>
cd seegnal-health
```

2. **Start all services:**

```bash
docker-compose up -d
```

This single command will:

- Pull PostgreSQL 15 image
- Build and start the backend API
- Build and start the frontend application
- Create and seed the database automatically
- Set up networking between containers

3. **Access the application:**

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- PostgreSQL: localhost:5432

4. **Stop all services:**

```bash
docker-compose down
```

5. **Stop and remove volumes (reset database):**

```bash
docker-compose down -v
```

### Option 2: Manual Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd seegnal-health
```

2. **Install root dependencies:**

```bash
npm install
```

3. **Install backend dependencies:**

```bash
cd backend
npm install
cd ..
```

4. **Install frontend dependencies:**

```bash
cd frontend
npm install
cd ..
```

## Configuration

### Docker Configuration (Default)

When using Docker, all environment variables are pre-configured in [docker-compose.yml](docker-compose.yml). You can modify them there if needed.

Default configuration:

- Backend Port: 3000
- Frontend Port: 5173
- PostgreSQL Port: 5432
- Database: seegnal
- Database User: postgres
- Database Password: password

### Manual Setup Configuration

#### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=3000
HOST_URL=http://localhost:5173
DATABASE_URL="postgresql://postgres:password@localhost:5432/seegnal?schema=public"
JWT_SECRET="secret_key"
JWT_EXPIRES_IN="7d"
```

#### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:3000/api
```

### Database Setup (Manual Only)

1. **Create PostgreSQL database:**

````bash
createdb seegnal
```Docker Commands

### Development with Docker

```bash
# Start all services (postgres, backend, frontend)
docker-compose up

# Start in detached mode (background)
docker-compose up -d

# Rebuild images and start
docker-compose up --build

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres

# Stop all services
docker-compose down

# Stop and remove volumes (database data)
docker-compose down -v

# Restart a specific service
docker-compose restart backend

# Execute commands in running container
docker-compose exec backend npm run db:seed
docker-compose exec backend sh
````

### Docker Service Health

```bash
# Check running containers
docker-compose ps

# Check container logs
docker logs seegnal-backend
docker logs seegnal-frontend
docker logs seegnal-postgres
```

## Scripts

### Root Level Scripts (Manual Setup)er:\*\*

```bash
npm run db:seed
```

This creates test users:

- **Name:** `Yura Zharkovsky`
- **Email:** `yura.zharkovsky@seegnal.com`
- **Password:** `Abcd1234!`

**Note:** When using Docker, database seeding happens automatically on first startup.

## Scripts

### Root Level Scripts

```bash
# Start both backend and frontend in development mode
npm run dev

# Build both backend and frontend for production
npm run build

# Start both backend and frontend in production mode
npm start

# Seed the database with test data
npm run db:seed
```

### Backend Scripts

```bash
cd backend

# Start development server with hot reload (port 3000)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start production server
npm start

# Seed database
npm run db:seed
```

### Frontend Scripts

```bash
cd frontend

# Start development server (port 5173)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login with email/password

### Drugs

- `GET /api/drugs` - Get all drugs for search dropdown

### Drug Interactions

- `POST /api/analyze` - Analyze drug list for interactions

### Health Check

- `GET /health` - API health check

## Architecture

### Backend Architecture

The backend follows a modular architecture with:

### With Docker (Recommended)

```bash
# Start everything with one command
docker-compose up
```

This will:

- Start PostgreSQL database on `localhost:5432`
- Start backend API on `http://localhost:3000`
- Start frontend on `http://localhost:5173`
- Automatically seed the database on first run

### Manual Setup

Start the development environment:

```bash
# From root directory, start both backend and frontend
npm run dev
```

This will:

- Start backend API on `http://localhost:3000`
- Start frontend dev server on `http://localhost:5173`
- Enable hot reload for both applications

**Note:** Make sure PostgreSQL is running locally before starting.

- **Hooks** - Custom React hooks for state management
- **Services** - API integration layer
- **Context** - Global state management
- **Layout** - Protected and public route wrappers

## Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User logs in with email/password
2. Backend validates credentials and returns JWT token
3. Token is stored in localStorage
4. Token is sent with each API request in Authorization header
5. Backend middleware validates token for protected routes

## Database Models

### User Model

- `id` - Primary key
- `name` - User's full name
- `email` - Unique email address
- `password` - Hashed password (bcrypt)
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

### Drug Model

- Drug information and metadata

### Rule Model

- Drug interaction rules and warnings

## Development

Start the development environment:

```bash
# From root directory, start both backend and frontend
npm run dev
```

This will:

- Start backend API on `http://localhost:3000`
- Start frontend dev server on `http://localhost:5173`
- Enable hot reload for both applications

## Author

**Binod Maharjan**
