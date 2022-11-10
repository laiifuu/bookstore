// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookstore/books/SET_BOOKS';
const API_LINK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SkIm1AYHLLUUcuMDP8su/books';

// Reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload.book];

    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];

    case SET_BOOKS:
      return [...action.payload.books];

    default:
      return state;
  }
}

// Action Creators

const addBookAction = (book) => ({ type: ADD_BOOK, payload: { book } });

const removeBookAction = (id) => ({ type: REMOVE_BOOK, payload: { id } });

const setBooksAction = (books) => ({ type: SET_BOOKS, payload: { books } });

const fetchBooks = () => async (dispatch) => {
  await fetch(API_LINK)
    .then((result) => result.json())
    .then((res) => {
      const books = Object.entries(res).map((entry) => ({
        ...entry[1][0],
        id: entry[0],
      }));
      dispatch(setBooksAction(books));
    });
};

const setBook = (book) => async (dispatch) => {
  await fetch(API_LINK, {
    method: 'POST', // or 'PUT'
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then(() => {
      dispatch(addBookAction({
        id: book.item_id,
        author: book.author,
        title: book.title,
        category: book.category,

      }));
    });
};

const removeBook = (id) => async (dispatch) => {
  const link = `${API_LINK}/${id}`;

  await fetch(link, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      dispatch(removeBookAction(id));
    });
};

export {
  ADD_BOOK,
  REMOVE_BOOK,
  addBookAction,
  removeBookAction,
  setBooksAction,
  fetchBooks,
  setBook,
  removeBook,
};
