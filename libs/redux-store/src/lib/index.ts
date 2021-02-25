import { searchSlice } from './search.slice';
import {
  configureStore,
  createSelector,
  Selector,
  Action,
} from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';

export const store = configureStore({
  reducer: { search: searchSlice.reducer },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, Action<string>>;
export const getUrl = (state: RootState): string | undefined =>
  state.search.url;
const getTotalPages = (state: RootState): number | undefined =>
  state.search.data?.nbPages;
export const getQueryToAddPageNumber: Selector<
  RootState,
  string | undefined
> = createSelector([getUrl, getTotalPages], (url, totalPages):
  | string
  | undefined => {
  if (![url, totalPages].includes(undefined) && 1 < totalPages) {
    return `${url}&page=`;
  } else {
    return undefined;
  }
});
