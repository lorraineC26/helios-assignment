"use client";

import BooksList from "./_components/BooksList";
import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);

  // fetch all books data from /api/books
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/api/books");
      const data = await res.json();

      // set all books data to the books state
      setBooks(data);
    };

    fetchBooks();
  }, [])

  // delete book by id
  const deleteBookAPI = async (id) => {
    await fetch(`/api/books/${id}`, {
      method: "DELETE",
    });

    // filter out the deleted book
    setBooks(books.filter((book) => book.id !== id));
  }

  console.log(books.length);

  return (
    <div className="mt-24 px-4">
      {/* using the books array length to control the display of 'empty reminder' */}
      {books.length === 0 ? (
        <p className="text-2xl font-bold text-center">Oops, empty bookstore</p>
      ) : (
        <BooksList books={books} onDelete={deleteBookAPI} />
      )}
    </div>
  );
}
