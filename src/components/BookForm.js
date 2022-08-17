import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="add-books">
      <h3>ADD NEW BOOK</h3>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({
            title: inputTitle,
            author: inputAuthor,
            id: uuidv4(),
          }));
          setInputTitle('');
          setInputAuthor('');
        }}
      >
        <input type="text" placeholder="Book Title" value={inputTitle} onInput={(e) => setInputTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={inputAuthor} onInput={(e) => setInputAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default BookForm;
