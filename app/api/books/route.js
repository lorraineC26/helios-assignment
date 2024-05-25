import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// GET endpoint to fetch all books
export async function GET(req) {
  const books = await prisma.books.findMany();
  return new Response(JSON.stringify(books), { status: 200 });
}

// POST endpoint to create a book
export async function POST(req) {
  const newBook = await req.json();
  const book = await prisma.books.create({
    data: newBook,
  });

  return new Response(JSON.stringify(book), { status: 201 });
}