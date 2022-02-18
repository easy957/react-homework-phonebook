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
  async (contact, { rejectWithValue }) => {
    try {
      const response = await mockAPI.addContact(contact);
      return response;
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
