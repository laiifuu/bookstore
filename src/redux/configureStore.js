import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import books from "./books/books";
import categories from "./categories/categories";

const rootReducer = combineReducers({
  booksReducer: books,
  categoriesReducer : categories,
});

const store = configureStore(rootReducer);