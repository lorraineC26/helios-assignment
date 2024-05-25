import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET to fetch a single book
export async function GET(req, context) {
  
  // get the id from the URL
  const {params} = context;
  const id = params.id;

  // pass the id to the Prisma client to find the book
  const book = await prisma.books.findUnique({
    where: { id: parseInt(id) },
  });

  return new Response(JSON.stringify(book), { status: 200 });
}

// PUT to update a book
export async function PUT(req, context) {
  const { id } = context.params;

  // parse the response body so can destructure the data
  const updatedBookData = await req.json();

  const { title, price, category, description } = updatedBookData;

  // update the specific book in the db
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

// DELETE a specific book by id
export async function DELETE(req, context) {
  const { id } = context.params;

  // delete the book from the db
  await prisma.books.delete({
    where: { id: parseInt(id) },
  });

  return new Response(null, { status: 204 });
}

