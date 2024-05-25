# Helios Take-Home Assignment

## Overview

This is a fullstack bookstore application built using Next.js, Tailwind CSS, PostgreSQL, and Prisma. The application allows users to add, view, update, and delete books.

## Features

**Add a new book:**

- Use the `+ Add Book` in the header to go redirect the page and fill in the form.
- Enter the title, price, category, and description (optional)
- Click on the `Add` will update the db and redirect to the main page

<p align="center">
  <img src=https://github.com/lorraineC26/helios-assignment/blob/main/public/02add-new-book.png?raw=true alt="hero" width="300px" style="display: block; margin: 0 auto;">
</p>

<p align="center">
  <img src=https://github.com/lorraineC26/helios-assignment/blob/main/public/03new-books.png?raw=true alt="hero" width="300px" style="display: block; margin: 0 auto;">
</p>

**View all books:**

- The homepage displays a list of books in the database.

<p align="center">
  <img src=https://github.com/lorraineC26/helios-assignment/blob/main/public/00books.png?raw=true alt="hero" width="400px" style="display: block; margin: 0 auto;">
</p>

- Responsive on smaller devices
<p align="center">
  <img src=https://github.com/lorraineC26/helios-assignment/blob/main/public/04responsive.png?raw=true alt="hero" width="100px" style="display: block; margin: 0 auto;">
</p>

**Update a book:**

- Click the "Edit" button next to a book to update its details.
- Click on the logo will redirect to the main page
<p align="center">
  <img src=https://github.com/lorraineC26/helios-assignment/blob/main/public/01update-books.png?raw=true alt="hero" width="300px" style="display: block; margin: 0 auto;">
</p>
<p align="center">
  <img src=https://github.com/lorraineC26/helios-assignment/blob/main/public/05updated-books.png?raw=true alt="hero" width="300px" style="display: block; margin: 0 auto;">
</p>

**Delete a book:**

- Click the "Delete" button next to a book to remove it from the database.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lorraineC26/helios-assignment.git
   cd helios-assignment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up PostgreSQL database:**

- Create a PostgreSQL database `helios_test` locally in psql.
- Configure the `.env` file in the root of the project:
  ```env
  DATABASE_URL=postgresql://user:password@localhost:5432/helios_test?schema=public
  ```
- Run database migrations
  ```bash
  npx prisma migrate dev
  ```
- Seed the database
  ```bash
  npm run seed
  ```
- View Prisma Studio
  ```bash
  npx prisma studio
  ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Tech Stacks

- **Frontend:** Next.js, JavaScript, Tailwind CSS
- **Backend:** Next.js API routes, PostgreSQL, Prisma
