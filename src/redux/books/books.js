// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload.book,
      ];

    case REMOVE_BOOK:
      return [...state.filter((book) => (book.id !== action.payload.id))];

    default:
      return state;
  }
}

// Action Creators

const addBookAction = (book) => ({ type: ADD_BOOK, payload: { book } });

const removeBookAction = (id) => ({ type: REMOVE_BOOK, payload: { id } });

export {
  ADD_BOOK, REMOVE_BOOK, addBookAction, removeBookAction,
};
