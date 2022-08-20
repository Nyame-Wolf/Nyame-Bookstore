import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { removeBook } from '../redux/books/books';

function CircularProgressWithLabel(props) {
  /* eslint-disable */
  return <CircularProgress variant="determinate" {...props} size={"80px"} />;
  /* eslint-enable */
}

export function CircularStatic() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30 + (Math.floor(Math.random() * 10)));
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

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
        <div className="middle-container">
          <CircularStatic />
          <div className="completed-progress">
            <span className="percentage">
              {Math.floor(Math.random() * 101)}
              %
            </span>
            <span className="text-complete">Completed</span>
          </div>
        </div>

        <div className="arrange-end">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="current-lesson">Chapter 3:&quot;A Lesson Learned&quot;</p>
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
