import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <div id="books-list">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <BookForm />
      </div>

    </div>
  );
};

export default BookList;
