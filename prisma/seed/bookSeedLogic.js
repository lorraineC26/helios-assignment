import { PrismaClient } from "@prisma/client";
import books from "./bookSeed.js";

const prisma = new PrismaClient();


const seedBooks = async () => {
  try {
    // delete existing book records to prevent duplications
    await prisma.books.deleteMany();

    // create book records in the Books table
    for (const book of books) {
      await prisma.books.create({
        data: book,
      });
    }
  } catch (error) {
    console.error("Errors seeding book data into the Books table", error);
  } finally {
    // disconnect the client
    await prisma.$disconnect();
  }
};

seedBooks();

export default seedBooks;
