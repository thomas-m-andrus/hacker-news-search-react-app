import React from 'react';
import { Search, SearchProps } from './search';
import { store } from '@hacker-news-search-react-app/redux-store';
import { Provider } from 'react-redux';

export default {
  component: Search,
  title: 'Search',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SearchProps = {};

  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};
