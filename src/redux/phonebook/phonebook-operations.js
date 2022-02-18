import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'services/mockAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await mockAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const newContact = await mockAPI.addContact(name, phone);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const deletedContact = await mockAPI.deleteContact(id);
      return deletedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
