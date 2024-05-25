import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET endpoint to fetch all books
export async function GET(req) {
  const books = await prisma.books.findMany();

  return new Response(JSON.stringify(books), { status: 200 });
}

// PUT to update a book's details
export async function PUT(req) {
  const { id } = req.params;
  const { title, price, category, description } = req.body;

  const book = await prisma.books.update({
    where: { id: parseInt(id) },
    data: {
      title,
      price: parseFloat(price),
      category,
      description,
    },
  });

  return new Response(JSON.stringify(book), { status: 200 });
}