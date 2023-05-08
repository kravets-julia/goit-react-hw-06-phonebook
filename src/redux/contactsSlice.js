import { createSlice } from '@reduxjs/toolkit';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },

    removeContact(state, action) {
      // state.filter(contact => contact.id !== action.payload);
      // return state.filter((item, index) => index !== action.index)

      const newArray = state.slice();
      newArray.splice(action.index, 1);
      return newArray;
    },
  },
});

export const { addContact, removeContact } = ContactsSlice.actions;
export const contactsReducer = ContactsSlice.reducer;
