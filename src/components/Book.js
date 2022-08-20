import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-arrange">
        <div className="book-arrange-header">
          <p>{book.category}</p>
          <h2 className="book-title">{book.title}</h2>
          <p className="author-p"><small className="book-author">{book.author}</small></p>
          <div className="btns">
            <button className="btn" type="button">Comments</button>
            <button className="btn remove" type="button" onClick={() => { dispatch(removeBook({ book })); }}>Remove Book</button>
            <button className="btn" type="button">Edit</button>
          </div>
        </div>
        <p className="progress-circle" />
        <div className="arrange-end">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 3:&quot;A Lesson Learned&quot;</p>
          <button className="update-btn" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape(
    { title: PropTypes.string, author: PropTypes.string, category: PropTypes.string },
  ).isRequired,
};
export default Book;
