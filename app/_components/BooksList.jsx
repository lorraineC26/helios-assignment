import { Button } from '@/components/ui/button';
import React from 'react'
import { Trash2, Pencil } from 'lucide-react';
import Link from 'next/link';

const BooksList = ({ books, onDelete }) => {
  return (
    <div className="mt-24 px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {books.map((book) => (
          <li
            key={book.id}
            className="p-4 border rounded-md bg-[#b8c1ec] flex flex-col "
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Title: {book.title}</h2>
              <p className="text-md text-gray-600">Price: ${book.price}</p>
              <p className="text-md text-gray-600">Category: {book.category}</p>
              <p className="text-md text-gray-600">
                Description: {book.description}
              </p>
            </div>

            <div className="flex flex-grow gap-5 mt-4">
              <Link href={`/edit/${book.id}`}>
                <Button className="flex gap-1 cursor-pointer">
                  <Pencil className="h-5 w-5" />
                  Edit
                </Button>
              </Link>

              <Button
                className="flex gap-1 cursor-pointer"
                onClick={() => onDelete(book.id)}
              >
                <Trash2 className="h-5 w-5" />
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList