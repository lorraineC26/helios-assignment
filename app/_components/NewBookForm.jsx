"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const NewBookForm = ({ addBookAPI }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title,
      price,
      category,
      description,
    };

    try {
      // pass to the POST method to create a new book in the db
      await addBookAPI(newBook);
      // redirect to the home page
      router.push("/");

    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="font-bold text-2xl">Add a New Book</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex gap-2">
          <label className="font-bold">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            required
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
            value={price}
            required
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
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
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

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default NewBookForm;
