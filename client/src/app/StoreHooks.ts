import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './Store';

/**
 * By using useAppDispatch instead of useDispatch and useAppSelector instead of useSelector,
 * we ensure that the dispatched actions and state access adhere to the types defined in
 * the RootState and AppDispatch. This way, TypeScript can provide type checking and
 * autocompletion support, helping us catch errors and write more robust code.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
