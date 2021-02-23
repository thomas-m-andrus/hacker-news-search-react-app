import React, { useEffect } from 'react';
import {
  getHackerNews,
  RootState,
  AppDispatch,
  searchSlice,
  getNextPageQuery,
} from '@hacker-news-search-react-app/redux-store';
import { useSelector, useDispatch } from 'react-redux';
import './search.module.scss';
import { SearchBoxWrapper } from '@hacker-news-search-react-app/ui';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    search: { apiState, searchTerms, data },
  } = useSelector((state: RootState) => state);
  const nextPageQuery = useSelector(getNextPageQuery);
  useEffect((): void => {
    console.log(apiState, searchTerms, data);
    console.log('next page query:', nextPageQuery);
  }, [apiState, searchTerms, data, nextPageQuery]);
  return (
    <div>
      <h1>Welcome to search!</h1>
      <SearchBoxWrapper
        autoCompleteOptions={searchTerms}
        trigger={(msg): void => {
          dispatch(searchSlice.actions.addSearchCase(msg.searchTerm));
          dispatch(getHackerNews(msg.link));
        }}
      ></SearchBoxWrapper>
    </div>
  );
}

export default Search;
