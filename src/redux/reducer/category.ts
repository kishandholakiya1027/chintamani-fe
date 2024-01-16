/* eslint-disable no-undef */
import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
  setCategory: (state, action) => {
      state.category = action.payload
    },
},
  
  });
  // eslint-disable-next-line no-empty-pattern
  export const {setCategory } = categorySlice.actions;
  
  export default categorySlice.reducer;
