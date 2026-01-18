# Pet Shop API

A TypeScript-based REST API for managing a pet shop with categories, products, and users.

## Features

- **User Management** - User authentication and profiles
- **Product Catalog** - Manage pet shop products with categories and subcategories
- **Category Management** - Organize products by categories

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express
- **Database**: PostgreSQL with Prisma ORM
- **Migrations**: Prisma Migrate

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd pet-shop
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
```

4. Run database migrations

```bash
npx prisma migrate dev
```

5. Start the server

```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## Project Structure

```
src/
├── config/        # Configuration files (environment variables)
├── middlewares/   # Express middlewares
├── modules/       # Feature modules (category, product, user)
├── routes/        # API routes
└── utils/         # Utility functions
```

## API Modules

- **Category** - CRUD operations for product categories
- **Product** - CRUD operations for products
- **User** - User management operations

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

## Database

Run Prisma Studio to manage your database visually:

```bash
npx prisma studio
```
