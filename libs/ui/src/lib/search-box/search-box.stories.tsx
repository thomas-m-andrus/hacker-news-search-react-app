import React from 'react';
import { SearchBox } from './search-box';

export default {
  component: SearchBox,
  title: 'SearchBox',
};

export const primary = () => {
  return <SearchBox options={['something', 'something else', 'hey']} />;
};
