import React from 'react';
import { Results as ResultsUI } from '@hacker-news-search-react-app/ui';
import { ResultAction } from '@hacker-news-search-react-app/types';
import {
  getHackerNews,
  getQueryToAddPageNumber,
  RootState,
  AppDispatch,
  searchSlice,
} from '@hacker-news-search-react-app/redux-store';
import { useSelector, useDispatch } from 'react-redux';
import './results.module.scss';

export function Results() {
  const queryWithoutPageNumber = useSelector(getQueryToAddPageNumber);
  const apiState = useSelector((state: RootState) => state.search.apiState);
  const data = useSelector((state: RootState) => state.search.data);
  const error = useSelector((state: RootState) => state.search.error);
  const dispatch = useDispatch<AppDispatch>();
  const trigger = ({ paylaod: { page } }: ResultAction): void => {
    if (queryWithoutPageNumber) {
      dispatch(getHackerNews(`${queryWithoutPageNumber}${page}`));
    }
  };
  return (
    <div>
      <div>{apiState}</div>
      <ResultsUI
        data={data}
        apiState={apiState}
        labels={{ loading: 'loading' }}
        error={error}
        trigger={trigger}
      ></ResultsUI>
    </div>
  );
}

export default Results;
