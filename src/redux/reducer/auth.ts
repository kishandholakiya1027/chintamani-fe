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
    },
    setUser(state, action) {
      state.user = action.payload
    }

  },
  
});
// eslint-disable-next-line no-empty-pattern
export const { handleLogin, handleLogout,setUser } = authSlice.actions;

export default authSlice.reducer;
