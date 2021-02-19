import React from 'react';
import { SearchBox } from './search-box';
import {
  SearchBoxProps,
  FilterType,
} from '@hacker-news-search-react-app/types';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  component: SearchBox,
  title: 'SearchBox',
};

export const primary = () => {
  const filters: SearchBoxProps['filters'] = [
    {
      type: FilterType.TYPE,
      label: text('Search Content Of', 'Content Of'),
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
    show: { autoComplete: boolean('show auto complete', false) },
    labels: {
      button: { search: text('search button', 'Search') },
      input: text('input label', 'Look for'),
    },
    values: {
      input: 'something',
      type: filters[0].options[0].value,
      rank: filters[1].options[0].value,
      time: filters[2].options[0].value,
    },
    trigger: (msg) => {
      console.log(msg);
    },
    disable: { search: boolean('disable button', false) },
  };
  return <SearchBox {...props} />;
};
