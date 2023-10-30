import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },

      prepare: ({ id, name, number }) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});


const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);