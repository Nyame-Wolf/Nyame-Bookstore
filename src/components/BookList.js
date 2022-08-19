import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <div id="books-list">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
        <BookForm />
      </div>

    </div>
  );
};

export default BookList;
