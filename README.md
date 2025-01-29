# Next.js & Prisma App with Server Actions

## Overview

This project is a **Next.js** application that uses **Prisma** as an ORM to interact with a database through **Next.js Server Actions**. The app allows seamless CRUD operations using modern server-side functionalities, ensuring better performance and security.

## Features

- **Next.js App Router** with Server Actions for database interaction.
- **Prisma ORM** for type-safe database access.
- **Server Actions** for executing queries securely on the server.
- **Tailwind CSS** for styling (if applicable).
- **API Routes & Dynamic Routing** for efficient data fetching.

## Tech Stack

- **Next.js 14+**
- **Prisma ORM**
- **PostgreSQL / MySQL / SQLite** (Choose based on your setup)
- **React & Server Components**
- **TypeScript** (Optional but recommended)

## Setup & Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 18)
- **PostgreSQL / MySQL / SQLite**

### Installation Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:

   ```sh
   npm install  # or yarn install
   ```

3. Set up your environment variables:
   Create a `.env` file and add the following:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

4. Initialize Prisma:

   ```sh
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Run the development server:
   ```sh
   npm run dev
   ```
   Your app should be running at `http://localhost:3000`

## Database Connection with Server Actions

### Example: Fetching Data

Inside a **Server Action**, you can use Prisma to fetch data:

```ts
"use server";
import { prisma } from "@/lib/prisma";

export async function getProducts() {
  return await prisma.product.findMany();
}
```

### Example: Creating Data

```ts
"use server";
import { prisma } from "@/lib/prisma";

export async function createProduct(data: { name: string; price: number }) {
  return await prisma.product.create({
    data,
  });
}
```

## Deployment

For production, ensure you:

- Use a managed database (e.g., **Supabase, Railway, Vercel Postgres**).
- Run database migrations in production:
  ```sh
  npx prisma migrate deploy
  ```
- Deploy on **Vercel** or **another cloud provider**:
  ```sh
  vercel deploy
  ```

## Contributing

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push and create a pull request

## License

This project is licensed under the **MIT License**.

---

🚀 **Happy coding!** Let me know if you need any refinements! 😃
