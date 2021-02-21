import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  SearchState,
  SearchBoxWrapperTriggerToParent as SearchMessage,
  ApiState,
} from '@hacker-news-search-react-app/types';
export const SEARCH_FEATURE_KEY = 'search';
export const initialState: SearchState = {
  searchTerms: [],
  apiState: ApiState.INITIAL,
};
export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState,
  reducers: {
    updateSearchTerms(
      state,
      action: PayloadAction<SearchMessage['searchTerm']>
    ) {
      state.searchTerms.push(action.payload);
    },
  },
});
