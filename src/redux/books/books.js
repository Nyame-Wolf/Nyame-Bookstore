// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

// Reducer
export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.concat(action.book)];
    case REMOVE_BOOK: return [...state.filter((book) => book.id !== action.book.id)];
    default: return state;
  }
}

// Action Creators

export function addBook(book) {
  return { type: ADD_BOOK, book };
}
export function removeBooks(book) {
  return { type: REMOVE_BOOK, book };
}
