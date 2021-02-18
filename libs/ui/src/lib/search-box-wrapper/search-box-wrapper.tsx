import React, { useReducer, ReducerState } from 'react';
import { SearchBox } from '@hacker-news-search-react-app/ui';
import {
  SearchBoxReducer as State,
  SearchBoxState,
  FilterType,
  Trigger,
} from '@hacker-news-search-react-app/types';
import { SearchBoxReducer as reducer } from './reducer';

import './search-box-wrapper.module.scss';

/* eslint-disable-next-line */
export interface SearchBoxWrapperProps {}

const initial: State = {
  state: SearchBoxState.BUTTON_DISABLED,
  values: { input: '', rank: '', time: '', type: '' },
};
export function SearchBoxWrapper(props: SearchBoxWrapperProps) {
  const [{ state, values }, dispatch] = useReducer(reducer, initial);
  const trigger = (msg: Trigger): void => {
    dispatch(msg);
  };
  return (
    <SearchBox
      disable={{ search: state === SearchBoxState.BUTTON_DISABLED }}
      trigger={trigger}
      show={{ autoComplete: false }}
      values={values}
      autoCompleteOptions={[]}
      labels={{ button: { search: 'Search' }, input: 'Look for' }}
      filters={[
        {
          type: FilterType.TYPE,
          label: 'find in',
          options: [{ label: 'All', value: 'all' }],
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
      ]}
    ></SearchBox>
  );
}

export default SearchBoxWrapper;
