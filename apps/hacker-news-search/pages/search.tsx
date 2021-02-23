import React from 'react';

import './search.module.scss';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  return (
    <div>
      <a href={'/'}>back</a>
      <h1>Welcome to search!</h1>
    </div>
  );
}

export default Search;
