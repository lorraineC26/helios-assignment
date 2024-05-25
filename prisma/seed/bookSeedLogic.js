import { PrismaClient } from "@prisma/client";
import books from "./bookSeed.js";

const prisma = new PrismaClient();

// create book records in the Books table
async function seedBooks() { 
  for (const book of books) {
    await prisma.books.create({
      data: book,
    });
    console.log("Books seeded successfully");
  }
}

seedBooks();

export default seedBooks;