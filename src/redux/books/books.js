// Actions
const REMOVE = '/src/redux/books/REMOVE';
const ADD = '/src/redux/books/ADD';

// Reducer
export default function bookReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD:
      return state.concat(action.book);
    case REMOVE: return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
}

// Action Creators

export function addBook(book) {
  return { type: ADD, book };
}
export function removeBooks(book) {
  return { type: REMOVE, book };
}
