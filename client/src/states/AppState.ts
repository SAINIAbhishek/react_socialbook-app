import { createSlice } from '@reduxjs/toolkit';
import { AppStateType } from '../types/AppStateType';
import { CONFIG } from '../config/Config';
import { UserType } from '../types/UserType';

const initialState: AppStateType = {
  mode: 'light',
  user: {} as UserType,
  accessToken: '',
};

export const APP_STATE_SLICE = createSlice({
  name: 'APP_STATE',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = {} as UserType;
      state.accessToken = '';
      sessionStorage.removeItem(CONFIG.ACCESS_TOKEN);
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends non-existent :(');
      }
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends } =
  APP_STATE_SLICE.actions;
export default APP_STATE_SLICE.reducer;
