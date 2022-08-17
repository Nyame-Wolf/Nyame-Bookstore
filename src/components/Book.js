/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div>

      <div className="book-arrange">
        <p>
          {book.title}
        </p>
        <p><small>{book.author}</small></p>
        <button type="button" onClick={() => { dispatch(removeBook(book)); }}>Remove Book</button>
      </div>
    </div>
  );
};
export default Book;
