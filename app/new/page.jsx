"use client";
import React from 'react'
import NewBookForm from '../_components/NewBookForm';


const AddNewBook = () => {

  // POST method to create a new book
  const addBookAPI = async (newBook) => {
    const response = await fetch(`/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
  
  }

  return (
    <div className="mt-24 px-4">
      <NewBookForm addBookAPI={addBookAPI} />
    </div>
  );
}

export default AddNewBook