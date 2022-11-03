import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import BooksList from './BooksList';

const BooksPage = () => {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'The hunger games',
      author: 'Suzanne Collins',
    },
  ]);
  return (
    <>
      <BooksList booksList={list} />
      <AddBookForm />
    </>
  );
};

export default BooksPage;
