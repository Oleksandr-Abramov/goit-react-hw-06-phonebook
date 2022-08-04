// import { createReducer } from '@reduxjs/toolkit/dist/createReducer';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, findContact } from './contactsActions';

export const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export const filter = createReducer('', {
  [findContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
