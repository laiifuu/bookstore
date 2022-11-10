import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const returnState = (e) => {
    e.preventDefault();
    const obj = {
      item_id: uuidv4(),
      author,
      title,
      category,
    };
    dispatch(setBook(obj));
    e.target.reset();
  };

  return (
    <section className="add-book-form">
      <h2 className="form-heading">ADD NEW BOOK</h2>
      <form onSubmit={(e) => returnState(e)}>
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

        <select name="categories" id="categories" onChange={(e) => handleCategoryChange(e)}>
          <option value="Fiction">Fiction</option>
          <option value="Utopian">Utopian</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Crime">Crime</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Contemporary">Contemporary</option>
        </select>

        <button className="primary-btn" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBookForm;
