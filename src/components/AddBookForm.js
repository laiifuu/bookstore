import React from 'react';

const AddBookForm = () => (
  <section className="add-book-form">
    <h2>ADD NEW BOOK</h2>
    <form className="books-list">
      <input type="text" placeholder="Book title" />

      <button type="button">ADD BOOK</button>
    </form>
  </section>
);

export default AddBookForm;
