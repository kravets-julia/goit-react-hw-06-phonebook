import { createSlice } from '@reduxjs/toolkit';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],

    removeContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, removeContact } = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
