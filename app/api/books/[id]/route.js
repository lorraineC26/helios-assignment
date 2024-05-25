import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET endpoint to fetch a single book
export async function GET(req, context) {
  
  // get the id from the URL
  const {params} = context;
  const id = params.id;

  // debugging
  // console.log("book id", id);
  // return Response.json({ id });

  // pass the id to the Prisma client to find the book
  const book = await prisma.books.findUnique({
    where: { id: parseInt(id) },
  });

  return new Response(JSON.stringify(book), { status: 200 });
}

// PUT to update a book
export async function PUT(req, context) {
  const { id } = context.params;
  const updatedBookData = await req.json();

  const { title, price, category, description } = updatedBookData;

  // debugging
  console.log("price", price);

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

