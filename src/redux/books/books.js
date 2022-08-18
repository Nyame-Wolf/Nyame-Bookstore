import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Learn React', author: 'Kent C Doods' },
  { id: 2, title: 'Do gooder', author: 'Vitor' },
  { id: 3, title: 'Best bestie', author: 'Karla' },
];

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
