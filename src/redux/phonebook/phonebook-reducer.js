import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
import { fetchContacts } from './phonebook-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  isLoading,
  error,
  filter,
});
