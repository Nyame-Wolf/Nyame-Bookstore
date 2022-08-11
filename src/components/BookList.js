import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => (
  <>
    <Book title="Learn React" author="Kent C Doods" />
    <Book title="Learn React" author="Kent C Doods" />
    <BookForm />
  </>
);

export default BookList;
