import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBookAction(id));
  };

  return (
    <div className="book-card">
      <div className="book-info">
        <span>genre</span>
        <h2>{title}</h2>
        <span>{author}</span>
        <div className="book-controls">
          <button type="button">Comments</button>
          <button type="button" onClick={() => removeBook()}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-info">
        <div className="progress-percentage">100%</div>
        <div className="progress-chapter">
          <span>CURRENT CHAPTER</span>
          <span>Chapter 25</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
