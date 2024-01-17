/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  filterProduct : {}
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setFilterProduct:(state,action)=>{
        state.filterProduct = action.payload
    }
  },

});
// eslint-disable-next-line no-empty-pattern
export const { setCategory ,setFilterProduct} = categorySlice.actions;

export default categorySlice.reducer;
