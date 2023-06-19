import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../types/UserType';
import { PostType } from '../types/PostType';

type initialState = {
  mode: string;
  isAuthenticated: boolean;
  user: UserType | null;
  posts: PostType[];
};

const initialState: initialState = {
  mode: 'light',
  user: null,
  isAuthenticated: false,
  posts: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setFriends: (state, action: PayloadAction<{ friends: UserType[] }>) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('User friends non-existent :(');
      }
    },
    setPosts: (state, action: PayloadAction<{ posts: PostType[] }>) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action: PayloadAction<{ post: PostType }>) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
    },
  },
});

export default authSlice.reducer;

export const {
  setLogout,
  setLogin,
  setPosts,
  setFriends,
  setThemeMode,
  setPost,
} = authSlice.actions;
