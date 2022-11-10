import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const delBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-card">
      <div className="book-info">
        <div className="info">
          <span className="category">{category}</span>
          <h2 className="book-title">{title}</h2>
          <span className="book-author">{author}</span>
        </div>

        <div className="book-controls">
          <button className="secondary-btn" type="button">
            Comments
          </button>
          <button
            className="secondary-btn"
            type="button"
            onClick={() => delBook()}
          >
            Remove
          </button>
          <button className="secondary-btn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-info">
        <div className="progress-percentage">
          <div className="circle-progress" />
          <div className="percentage-div">
            <span className="percentage">100%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="divider" />
        <div className="progress-chapter">
          <div className="progress">
            <span className="current-chapter-title">CURRENT CHAPTER</span>
            <span className="current-chapter">Chapter 25</span>
          </div>
          <button className="primary-btn update-progress" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
