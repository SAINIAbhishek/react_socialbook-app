import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import authReducer from '../slices/AuthSlice';

const persistConfig = { key: 'root', storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

/**
 * The RootState type definition represents the overall state shape of our Redux store.
 * It is inferred from the store object's getState() method, which returns the current
 * state of the store. In the provided code, RootState is defined as the return type of
 * typeof store.getState(), which means it will match the state structure defined by the reducers.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The AppDispatch type definition represents the dispatch function of the Redux store.
 * AppDispatch is defined as typeof store.dispatch, which means
 * it matches the type of the dispatch method of the store object.
 * The dispatch function is used to send actions to the Redux store, triggering the
 * state updates. With AppDispatch defined, we can use it to provide type annotations
 * when dispatching actions in our codebase.
 */
export type AppDispatch = typeof store.dispatch;
