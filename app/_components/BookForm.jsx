"use client";
import { Button } from '@/components/ui/button';
import React from 'react'
import { useState } from 'react';

const BookForm = ({book}) => {

  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  // debugging
  // console.log(book);

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
            onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Description: </label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={(e) => setDescription(e.target.value)}
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