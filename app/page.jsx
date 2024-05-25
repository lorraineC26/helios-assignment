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

      // debugging
      // console.log("books fetched: ", data);

      // set all books data to the books state
      setBooks(data);
    };

    fetchBooks();
  }, [])


  return (
    <>
      <BooksList books={books} />
    </>
  );
}
