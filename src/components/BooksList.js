import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { booksList } = props;
  return (
    <section className="books-list">
      {booksList.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </section>
  );
};

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksList;
