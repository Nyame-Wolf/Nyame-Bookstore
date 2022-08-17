// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  { id: 1, title: 'Learn React', author: 'Kent C Doods' },
  { id: 2, title: 'Do gooder', author: 'Vitor' },
  { id: 3, title: 'Best bestie', author: 'Karla' },
];

// Reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.book);
    case REMOVE_BOOK: return [...state.filter((book) => book.id !== action.book.id)];
    default: return state;
  }
}

// Action Creators

export function addBook(book) {
  return { type: ADD_BOOK, book };
}
export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}
