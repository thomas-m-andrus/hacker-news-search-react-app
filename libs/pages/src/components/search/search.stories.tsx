import React from 'react';
import { Search, SearchProps } from './search';

export default {
  component: Search,
  title: 'Search',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SearchProps = {};

  return <Search />;
};
