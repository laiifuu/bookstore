import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import BooksList from './BooksList';

const BooksPage = () => {
  const list = useSelector((state) => state.books);
  return (
    <>
      <BooksList booksList={list} />
      <AddBookForm />
    </>
  );
};

export default BooksPage;
