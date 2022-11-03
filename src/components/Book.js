import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-card">
      <div className="book-info">
        <span>genre</span>
        <h2>{title}</h2>
        <span>{author}</span>
        <div className="book-controls">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
