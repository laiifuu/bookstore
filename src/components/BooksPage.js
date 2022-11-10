import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from './AddBookForm';
import BooksList from './BooksList';
import { fetchBooks } from '../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <BooksList booksList={list} />
      <AddBookForm />
    </>
  );
};

export default BooksPage;
