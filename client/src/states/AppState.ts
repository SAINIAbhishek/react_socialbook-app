import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../types/UserType';
import { AppStateType } from '../types/AppStateType';

const initialState: AppStateType = {
  mode: 'light',
  user: {} as UserType,
  token: '',
  posts: [],
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
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = {} as UserType;
      state.token = '';
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends non-existent :(');
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  APP_STATE_SLICE.actions;
export default APP_STATE_SLICE.reducer;
