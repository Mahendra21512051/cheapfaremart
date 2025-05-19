// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../ReduxToolkit/userSlice';

export const store = configureStore({
  reducer: {
    counter: userReducer,

  },
});
