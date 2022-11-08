import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addBookAction } from '../redux/books/books';

const AddBookForm = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const returnState = (e) => {
    e.preventDefault();
    const authorInput = e.target.querySelector('.authorInput');
    const titleInput = e.target.querySelector('.titleInput');
    const obj = {
      id: books.length,
      author: authorInput.value,
      title: titleInput.value,
    };
    dispatch(addBookAction(obj));
  };

  return (
    <section className="add-book-form">
      <h2>ADD NEW BOOK</h2>
      <form className="books-list" onSubmit={(e) => returnState(e)}>
        <input className="titleInput" type="text" placeholder="Book title" required />
        <input className="authorInput" type="text" placeholder="Book author" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBookForm;
