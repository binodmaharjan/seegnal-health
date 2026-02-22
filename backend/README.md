# Seegnal eHealth Backend API

Backend API for Seegnal eHealth application built with Node.js, Express, TypeScript, and Sequelize.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Sequelize** - ORM with decorator support
- **PostgreSQL** - Database
- **bcrypt** - Password hashing

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the backend folder with the following variables:

```env
PORT=3000
HOST_URL=http://localhost:5173
DATABASE_URL="postgresql://postgres:password@localhost:5432/seegnal?schema=public"
JWT_SECRET="secret_key"
JWT_EXPIRES_IN="7d"
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run db:seed` - Seed database with test users

## Database Setup

1. Make sure PostgreSQL is running
2. Create the database: `createdb seegnal`
3. Run the seeder to create test users:

```bash
npm run db:seed
```

This will create a test users:

- `Yura Zharkovsky` `yura.zharkovsky@seegnal.com` / `Abcd1234!`

## API Endpoints

- `GET /health` - Health check endpoint
- `POST /login` Validates credentials against the Users table
- `GET /drugs` Returns the full drug list for the search dropdown
- `POST /analyze` Accepts a patient's drug list, checks the Interactions table, and returns any alerts

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts      # Sequelize configuration
│   ├── models/
│   │   ├── User.ts          # User model with decorators
│   │   └── index.ts         # Model exports
│   ├── seeders/
│   │   └── index.ts         # Database seeder
│   └── index.ts             # Express app entry point
├── .env                      # Environment variables
├── package.json
└── tsconfig.json            # TypeScript configuration
```

## User Model

The User model includes:

- `id` - Auto-incremented primary key
- `name`- Name
- `email` - Unique email address (validated)
- `password` - Hashed password (auto-hashed on create/update)
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

Password hashing is handled automatically using bcrypt before saving to the database.
