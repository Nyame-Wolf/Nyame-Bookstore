/* eslint-disable react/prop-types */

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <span>
        {title}
        {' '}
      </span>
      <span><small>{author}</small></span>
    </div>
  );
};
export default Book;
