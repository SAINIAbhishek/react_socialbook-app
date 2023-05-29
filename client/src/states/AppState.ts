import { createSlice } from '@reduxjs/toolkit';
import { AppStateType } from '../types/AppStateType';
import { UserType } from '../types/UserType';

const initialState: AppStateType = {
  mode: 'light',
  user: {} as UserType,
  accessToken: '',
};

export const appStateSlice = createSlice({
  name: 'APP_STATE',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    setLogout: (state) => {
      state.user = {} as UserType;
      state.accessToken = '';
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
  appStateSlice.actions;

export default appStateSlice.reducer;
