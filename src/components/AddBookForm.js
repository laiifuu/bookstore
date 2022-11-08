import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { addBookAction } from '../redux/books/books';

const AddBookForm = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const returnState = (e) => {
    e.preventDefault();
    const obj = {
      id: books.length,
      author,
      title,
    };
    dispatch(addBookAction(obj));
    e.target.reset();
  };

  return (
    <section className="add-book-form">
      12,n
      <h2>ADD NEW BOOK</h2>
      <form className="books-list" onSubmit={(e) => returnState(e)}>
        <input
          className="titleInput"
          type="text"
          placeholder="Book title"
          onChange={(e) => handleTitleChange(e)}
          required
        />
        <input
          className="authorInput"
          type="text"
          placeholder="Book author"
          onChange={(e) => handleAuthorChange(e)}
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBookForm;
