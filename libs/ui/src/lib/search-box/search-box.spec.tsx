import React from 'react';
import { render } from '@testing-library/react';
import {
  SearchBoxProps,
  FilterType,
} from '@hacker-news-search-react-app/types';

import SearchBox from './search-box';

describe('SearchBox', () => {
  it('should render successfully', () => {
    const filters: SearchBoxProps['filters'] = [
      {
        type: FilterType.TYPE,
        label: 'Content Of',
        options: [
          { label: 'All', value: 'All' },
          { label: 'Stories', value: 'Stories' },
          { label: 'Comments', value: 'Comments' },
        ],
      },
      {
        type: FilterType.RANK,
        label: 'by',
        options: [
          { label: 'Date', value: 'Date' },
          { label: 'Popularity', value: 'Popularity' },
        ],
      },
      {
        type: FilterType.TIME,
        label: 'from',
        options: [
          { label: 'All time', value: 'All Time' },
          { label: 'Last 24h', value: 'Last 24h' },
          { label: 'Past Week', value: 'Past Week' },
          { label: 'Past Month', value: 'Past Month' },
          { label: 'Past Year', value: 'Past Year' },
        ],
      },
    ];
    const props: SearchBoxProps = {
      autoCompleteOptions: ['something', 'something else', 'tiger'],
      filters,
      show: { autoComplete: false },
      labels: {
        button: { search: 'Search' },
        input: 'Look for',
      },
      values: {
        input: '',
        type: filters[0].options[0].value,
        rank: filters[1].options[0].value,
        time: filters[2].options[0].value,
      },
      trigger: (msg) => {
        console.log(msg);
      },
      disable: { search: false },
    };
    const { baseElement } = render(<SearchBox {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
