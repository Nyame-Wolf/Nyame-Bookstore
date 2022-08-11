/* eslint-disable react/prop-types */

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <div className="book-arrange">
        <p>
          {title}
        </p>
        <p><small>{author}</small></p>
        <button type="button">Remove Book</button>
      </div>
    </div>
  );
};
export default Book;
