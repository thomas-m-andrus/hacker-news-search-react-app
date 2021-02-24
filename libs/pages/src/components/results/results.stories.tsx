import React, { ReactElement, useEffect } from 'react';
import { Results } from './results';
import {
  store,
  AppDispatch,
  getHackerNews,
} from '@hacker-news-search-react-app/redux-store';
import { Provider, useDispatch } from 'react-redux';

export default {
  component: Results,
  title: 'Results',
};

const GetInitial = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect((): void => {
    dispatch(
      getHackerNews(
        'http://hn.algolia.com/api/v1/search?query=something%20else'
      )
    );
  }, [dispatch]);
  return <Results />;
};

export const primary = () => {
  return (
    <Provider store={store}>
      <GetInitial></GetInitial>
    </Provider>
  );
};
