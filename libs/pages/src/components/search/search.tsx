import React from 'react';
import {
  getHackerNews,
  RootState,
  AppDispatch,
  searchSlice,
} from '@hacker-news-search-react-app/redux-store';
import { SearchBoxWrapperTriggerToParent as Trigger } from '@hacker-news-search-react-app/types';
import { useSelector, useDispatch } from 'react-redux';
import './search.module.scss';
import { SearchBoxWrapper } from '@hacker-news-search-react-app/ui';

export function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    search: { searchTerms },
  } = useSelector((state: RootState) => state);
  const handleTrigger = (msg: Trigger): void => {
    dispatch(searchSlice.actions.addSearchCase(msg.searchTerm));
    dispatch(getHackerNews(msg.link));
  };
  return (
    <div className="search-page">
      <div className="search-page__content">
        <h1 className="search-page__title">Search Hacker News</h1>
        <SearchBoxWrapper
          autoCompleteOptions={searchTerms}
          trigger={handleTrigger}
        ></SearchBoxWrapper>
      </div>
    </div>
  );
}

export default Search;
