import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = {
  books: bookReducer,
  categories: categoryReducer,
};

const store = configureStore(rootReducer);

export default store;
