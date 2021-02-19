import React from 'react';
import { SearchBoxWrapper } from './search-box-wrapper';

export default {
  component: SearchBoxWrapper,
  title: 'SearchBoxWrapper',
};

export const primary = () => {
  return (
    <SearchBoxWrapper
      autoCompleteOptions={[]}
      trigger={(msg): void => {
        console.log('parent trigger: ', msg);
      }}
    />
  );
};
export const options = () => {
  return (
    <SearchBoxWrapper
      autoCompleteOptions={[
        'something',
        'something else',
        'something new',
        'platipus',
      ]}
      trigger={(msg): void => {
        console.log('parent trigger: ', msg);
      }}
    />
  );
};
