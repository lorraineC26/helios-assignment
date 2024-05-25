import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// GET handler to fetch all books in the db
export async function GET(req) {
  const books = await prisma.books.findMany();
  return new Response(JSON.stringify(books), { status: 200 });
}

// POST handler to create a new book in the db
export async function POST(req) {
  const newBook = await req.json();
  const book = await prisma.books.create({
    data: newBook,
  });

  return new Response(JSON.stringify(book), { status: 201 });
}