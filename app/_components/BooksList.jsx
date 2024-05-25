import { Button } from '@/components/ui/button';
import React from 'react'

const BooksList = ({books}) => {

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