import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const BookForm = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [categorySelect, setCategory] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="add-books">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createBook({
            title: inputTitle,
            author: inputAuthor,
            category: categorySelect,
            item_id: uuidv4(),
          }));
          setInputTitle('');
          setInputAuthor('');
        }}
      >
        <input className="title" type="text" placeholder="Book Title" value={inputTitle} onInput={(e) => setInputTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={inputAuthor} onInput={(e) => setInputAuthor(e.target.value)} />
        <select
          className="form-control"
          name="list"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <option value="">Category</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Historical">Historical</option>
          <option value="Romance">Romance</option>
          <option value="Western">Western</option>
          <option value="Bildungsroman">Bildungsroman</option>
          <option value="Speculative Fiction">Speculative Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Magical Realism">Magical Realism</option>
          <option value="Realist Literature">Realist Literature</option>

        </select>
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
};
export default BookForm;
