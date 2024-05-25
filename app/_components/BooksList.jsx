import { Button } from '@/components/ui/button';
import React from 'react'

const BooksList = () => {
  // mock books data
  const books = [
    {
      id:1,
      title: "The Book of Bill",
      price: 35.99,
      category: "fiction",
      description:
        "The demon that terrorized Gravity Falls is back from the great beyond to finally tell his side of the story in The Book of Bill, written by none other than Bill Cipher himself. Inside, Bill sheds light on his bizarre origins, his sinister effects on human history, the Pines family’s most embarrassing secrets, and the key to overthrowing the world (laid out in a handy step-by-step guide). This chaotic and beautifully illustrated tome contains baffling riddles, uncrackable ciphers, lost Journal 3 pages, ways to cheat death, the meaning of life, and a whole chapter on Silly Straws. But most importantly, The Book of Bill is deeply, deeply cursed.",
    },
    {
      id:2,
      title: "Collide",
      price: 20.0,
      category: "romance",
      description:
        "An ultimatum from Summer Preston’s thesis advisor thrusts her into an unexpected collision with the hockey team’s captain, Aiden Crawford. She’s caught between conflicting desires of fulfilling her lifelong dream of becoming a sport psychologist and staying as far away as possible from the god-awful sport. And once she meets Aiden—well, let’s just say he confirms all her worst assumptions about hockey players.",
    },
  ];

  return (
    <div className="mt-24 px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books.map((book) => (
          <li key={book.id} className="p-4 border rounded-md bg-[#b8c1ec]">
            <h2 className="text-xl font-bold">Title: {book.title}</h2>
            <p className="text-md text-gray-600">Price: ${book.price}</p>
            <p className="text-md text-gray-600">Category: {book.category}</p>

            <div className="flex flex-grow gap-5 mt-4">
              <Button>View</Button>
              <Button>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList