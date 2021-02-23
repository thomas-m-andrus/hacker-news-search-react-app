import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  SearchState,
  SearchBoxWrapperTriggerToParent as SearchMessage,
  ApiState,
  Response,
} from '@hacker-news-search-react-app/types';
export const SEARCH_FEATURE_KEY = 'search';
export const initialState: SearchState = {
  searchTerms: [],
  apiState: ApiState.INITIAL,
};
export const getHackerNews = createAsyncThunk(
  `${SEARCH_FEATURE_KEY}/getHackerNews`,
  (url: string) => {
    return axios
      .get<Response>(url)
      .then((response) => response)
      .catch((error) => error);
  }
);

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState,
  reducers: {
    addSearchCase: (
      state,
      action: PayloadAction<SearchMessage['searchTerm']>
    ) => {
      state.searchTerms.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHackerNews.pending, (state) => {
      state.apiState = ApiState.PENDING;
    });
    builder.addCase(getHackerNews.rejected, (state, action) => {
      state.error =
        action.error.message ?? 'There was an error retrieving your request';
      state.apiState = ApiState.ERRORED;
    });
    builder.addCase(getHackerNews.fulfilled, (state, action) => {
      state.data = action.payload;
      state.apiState = ApiState.RESOLVED;
    });
  },
});
