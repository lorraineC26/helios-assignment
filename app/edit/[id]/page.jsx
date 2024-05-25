"use client";
import BookForm from '@/app/_components/BookForm';
import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

const BookDetails = () => {
  
  // get the id from the URL
  const params= useParams();
  const id = params.id;

  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchSingleBook = async () => {
        // fetch the selected book details from the API
        const response = await fetch(`/api/books/${id}`);
        
        const data = await response.json();

        // set the book state with the received data --> pass to the BookForm
        setBook(data);
      };

      fetchSingleBook();
    }
  }, [id]); 
  

  // PUT method to update the book details
  const updateBook = async (updatedBook) => {
    const response = await fetch(`/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
  };


  return (
    <div className="mt-24 px-4">
      {/* wait till receiving the book info and then render the form component */}
      {book ? (
        <BookForm book={book} updateBookAPI={updateBook} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetails