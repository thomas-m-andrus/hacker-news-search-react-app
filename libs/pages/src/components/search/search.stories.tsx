import React from 'react';
import { Search } from './search';
import { store } from '@hacker-news-search-react-app/redux-store';
import { Provider } from 'react-redux';

export default {
  component: Search,
  title: 'Search',
};

export const primary = () => {
  return (
    <Provider store={store}>
      <Search
        trigger={(): void => {
          console.log('the search button was triggered');
        }}
      />
    </Provider>
  );
};
