"use client";
import { Button } from '@/components/ui/button';
import React from 'react'
import { useState } from 'react';

const BookForm = () => {
  // mock
  const book = {
    id: 1,
    title: "The Book of Bill",
    price: 35.99,
    category: "fiction",
    description:
      "The demon that terrorized Gravity Falls is back from the great beyond to finally tell his side of the story in The Book of Bill, written by none other than Bill Cipher himself. Inside, Bill sheds light on his bizarre origins, his sinister effects on human history, the Pines family’s most embarrassing secrets, and the key to overthrowing the world (laid out in a handy step-by-step guide). This chaotic and beautifully illustrated tome contains baffling riddles, uncrackable ciphers, lost Journal 3 pages, ways to cheat death, the meaning of life, and a whole chapter on Silly Straws. But most importantly, The Book of Bill is deeply, deeply cursed.",
  };

  const [title, setTitle] = useState(book.title);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="font-bold text-2xl">Edit the Details</h1>

      <form className='flex flex-col gap-5'>
        <div className="flex gap-2">
          <label className="font-bold">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            value={book.title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            value={book.price}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Category: </label>
          <input
            id="category"
            name="category"
            type="text"
            value={book.category}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Description: </label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
      </form>

      <div>
        <Button type="submit">Save</Button>
      </div>
    </div>
  );
}

export default BookForm