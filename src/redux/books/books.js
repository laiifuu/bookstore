//Actions
const ADD_BOOK = "redux/books/ADD_BOOK";
const REMOVE_BOOK = "redux/books/REMOVE_BOOK";

//Reducer
const books = (state=[], action) => {
  switch (action.type){
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

//Action Creators

const addBookAction = (book) => {
  return {type:ADD_BOOK, payload: {book: book}};
}

const removeBookAction = (id) => {
  return {type: REMOVE_BOOK, payload: {id: id}};
}

export default books;
export {ADD_BOOK, REMOVE_BOOK, addBookAction, removeBookAction};