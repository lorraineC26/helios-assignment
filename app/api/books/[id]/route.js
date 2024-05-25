import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// mock data
// const books = [
//   {
//     id: 9,
//     title: "The Book of Bill",
//     price: 35.99,
//     category: "fiction",
//     description:
//       "The demon that terrorized Gravity Falls is back from the great beyond to finally tell his side of the story in The Book of Bill, written by none other than Bill Cipher himself. Inside, Bill sheds light on his bizarre origins, his sinister effects on human history, the Pines family’s most embarrassing secrets, and the key to overthrowing the world (laid out in a handy step-by-step guide). This chaotic and beautifully illustrated tome contains baffling riddles, uncrackable ciphers, lost Journal 3 pages, ways to cheat death, the meaning of life, and a whole chapter on Silly Straws. But most importantly, The Book of Bill is deeply, deeply cursed.",
//   },
//   {
//     id:10,
//     title: "Collide",
//     price: 20.0,
//     category: "romance",
//     description:
//       "An ultimatum from Summer Preston’s thesis advisor thrusts her into an unexpected collision with the hockey team’s captain, Aiden Crawford. She’s caught between conflicting desires of fulfilling her lifelong dream of becoming a sport psychologist and staying as far away as possible from the god-awful sport. And once she meets Aiden—well, let’s just say he confirms all her worst assumptions about hockey players.",
//   }]

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


