import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../types/UserType';

type initialState = {
  mode: string;
  isAuthenticated: boolean;
  authUser: UserType | null;
};

const initialState: initialState = {
  mode: 'light',
  authUser: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action: PayloadAction<{ user: UserType }>) => {
      state.authUser = action.payload.user;
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.authUser = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;

export const { setLogout, setLogin, setMode } = authSlice.actions;
