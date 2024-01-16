/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: "",
  user: {}
}

const authSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.token = action.payload?.accessToken
      state.user = action.payload?.qurey||action.payload?.data
    },
    handleLogout: (state) => {
      state.token = ""
      state.user = {}
    }
  },
  
});
// eslint-disable-next-line no-empty-pattern
export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;
