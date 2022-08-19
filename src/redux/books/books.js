import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iSbJ6TI9jJNZyQ7363lB';
const addGetBook = `${api}/books`;
const initialState = [
  // { item_id: 1, title: 'Learn React', author: 'Kent C Doods' },
  // { item_id: 2, title: 'Do gooder', author: 'Vitor' },
  // { item_id: 3, title: 'Best bestie', author: 'Karla' },
];

// First, create the thunk
// export const createBook = createAsyncThunk(
//   'Book/createBook',
//   async (book) => {
//     const response = await axios.post(addGetBook, book);
//     console.log(response.data);
//     return response.data;
//   },
// );

export const createBook = createAsyncThunk(
  'book/createBook',
  async (book) => {
    const response = await fetch(addGetBook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        // item_id: book.item_id,
        // title: book.title,
        // author: book.author,
        // category: book.category,
        book,
      ),
    });
    if (response.ok) {
      return book;
    }
    throw response;
  },
);

export const removeBook = createAsyncThunk(
  'book/removeBook',
  async ({ book }) => {
    const response = await fetch(`${addGetBook}/${book.item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    if (response.ok) {
      return book;
    }
    throw response;
  },
);

export const getBook = createAsyncThunk(
  'book/getBook',
  async ({ book }) => {
    const response = await fetch(`${addGetBook}:/${book.item_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const getBooks = createAsyncThunk(
  'book/getBooks',
  async () => {
    const response = await fetch(addGetBook, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(createBook.fulfilled, (state, action) => {
      // Add user to the state array
      state.push(action.payload);
    })
      .addCase(removeBook.fulfilled, (state, action) => state.filter(
        (book) => book.item_id !== action.payload.item_id,
      ))
      .addCase(getBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(getBooks.fulfilled, (state, action) => action.payload);
  },

});

// export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
