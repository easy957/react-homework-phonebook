import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
