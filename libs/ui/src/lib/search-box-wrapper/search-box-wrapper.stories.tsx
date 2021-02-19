import React from 'react';
import { SearchBoxWrapper } from './search-box-wrapper';

export default {
  component: SearchBoxWrapper,
  title: 'SearchBoxWrapper',
};

export const primary = () => {
  return (
    <SearchBoxWrapper
      trigger={(msg): void => {
        console.log('parent trigger: ', msg);
      }}
    />
  );
};
