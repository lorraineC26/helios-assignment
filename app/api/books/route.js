import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET endpoint to fetch all books
export async function GET(req) {
  const books = await prisma.books.findMany();

  return new Response(JSON.stringify(books), { status: 200 });
}