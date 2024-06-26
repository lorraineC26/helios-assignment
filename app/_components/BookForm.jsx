"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from "next/navigation"; // from next/Router -> unmounted issue; avoid to import from it if under side the app directory

const BookForm = ({ book, updateBookAPI }) => {
  // save the changed book details in the state
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  const router = useRouter();  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      price,
      category,
      description,
    };

    try {
      // pass to the PUT method to update in the db
      await updateBookAPI(updatedBook);

      // redirect to the home page
      router.push("/");

    } catch (error) {
      console.error("Error updating book:", error);
    }

  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="font-bold text-2xl">Edit the Details</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex gap-2">
          <label className="font-bold">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Category: </label>
          <input
            id="category"
            name="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-bold">Description: </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default BookForm