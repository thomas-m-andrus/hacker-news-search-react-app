import React, { useEffect } from 'react';
import {
  getHackerNews,
  RootState,
  AppDispatch,
  searchSlice,
} from '@hacker-news-search-react-app/redux-store';
import { useSelector, useDispatch } from 'react-redux';
import './search.module.scss';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    search: { apiState, searchTerms, data },
  } = useSelector((state: RootState) => state);
  useEffect((): void => {
    dispatch(
      getHackerNews(
        'http://hn.algolia.com/api/v1/search_by_date?query=hawking%20died&tags=story&numericFilters=created_at_i>1582080785'
      )
    );
  }, []);
  useEffect((): void => {
    console.log(apiState, searchTerms, data);
  }, [apiState, searchTerms, data]);
  return (
    <div>
      <h1>Welcome to search!</h1>
    </div>
  );
}

export default Search;
