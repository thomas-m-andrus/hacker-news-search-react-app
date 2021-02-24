import { searchSlice } from './search.slice';
import { configureStore, createSelector, Selector } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { search: searchSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const getUrl = (state: RootState): string | undefined => state.search.url;
const getCurrentPage = (state: RootState): number | undefined =>
  state.search.data?.page;
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
export const getNextPageQuery: Selector<
  RootState,
  string | undefined
> = createSelector(
  [getUrl, getCurrentPage, getTotalPages],
  (url, currentPage, totalPages): string | undefined => {
    if (
      ![url, currentPage, totalPages].includes(undefined) &&
      currentPage < totalPages
    ) {
      return `${url}&page=${currentPage + 1}`;
    } else {
      return undefined;
    }
  }
);
