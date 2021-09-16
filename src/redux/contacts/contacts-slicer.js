import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
    }),
    [addContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    [deleteContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(contact => contact.id !== payload),
    }),
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;


