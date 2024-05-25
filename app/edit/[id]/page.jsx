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

  // debugging
  // console.log("book id:", params);
  useEffect(() => {
    if (id) {
      const fetchSingleBook = async () => {
        // fetch the selected book details from the API
        const response = await fetch(`/api/books/${id}`);
        
        const data = await response.json();

        // debugging
        // console.log("Selected book details: ", data);

        setBook(data);
      };

      fetchSingleBook();
    }
  }, [id]);  


  return (
    <div className="mt-24 px-4">
      {/* wait till receive the book info and then render the form component */}
      {book ? <BookForm book={book} /> : <p>Loading...</p>}
    </div>
  );
}


export default BookDetails