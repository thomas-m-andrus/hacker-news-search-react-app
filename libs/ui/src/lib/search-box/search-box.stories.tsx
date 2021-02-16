import React from 'react';
import { SearchBox } from './search-box';
import {
  SearchBoxProps,
  FilterType,
} from '@hacker-news-search-react-app/types';

export default {
  component: SearchBox,
  title: 'SearchBox',
};

export const primary = () => {
  const props: SearchBoxProps = {
    autoCompleteOptions: [],
    filters: [
      {
        type: FilterType.TYPE,
        label: 'Search',
        options: [{ label: 'hey', value: 'hey' }],
      },
      {
        type: FilterType.RANK,
        label: 'by',
        options: [{ label: 'hey', value: 'hey' }],
      },
      {
        type: FilterType.TIME,
        label: 'from',
        options: [{ label: 'hey', value: 'hey' }],
      },
    ],
  };
  return <SearchBox {...props} />;
};
