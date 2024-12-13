// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setCredentials, setError, logout } = authSlice.actions;
export default authSlice.reducer;