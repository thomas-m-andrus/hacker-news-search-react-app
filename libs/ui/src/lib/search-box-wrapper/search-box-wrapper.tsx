import React, { useReducer } from 'react';
import { SearchBox } from '@hacker-news-search-react-app/ui';
import {
  SearchBoxReducer as State,
  SearchBoxState,
  FilterType,
  Trigger,
  TriggerType,
  FilterQueryKey,
  SearchBoxWrapperProps,
} from '@hacker-news-search-react-app/types';
import { compileQuery } from './utils';
import { SearchBoxReducer as reducer } from './reducer';

import './search-box-wrapper.module.scss';

const initial: State = {
  state: SearchBoxState.BUTTON_DISABLED,
  values: {
    input: '',
    rank: FilterQueryKey.Rank.RELEVANCE,
    time: FilterQueryKey.Time.ALL_TIME,
    type: FilterQueryKey.Tags.ALL,
  },
};

export function SearchBoxWrapper({
  trigger: triggerToParent,
}: SearchBoxWrapperProps) {
  const [{ state, values }, dispatch] = useReducer(reducer, initial);
  const trigger = (msg: Trigger): void => {
    if (msg.type === TriggerType.BUTTON) {
      triggerToParent(compileQuery(values));
    } else {
      dispatch(msg);
    }
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
          options: [
            { label: 'All', value: FilterQueryKey.Tags.ALL },
            { label: 'Stories', value: FilterQueryKey.Tags.STORIES },
            { label: 'Comments', value: FilterQueryKey.Tags.COMMENTS },
          ],
        },
        {
          type: FilterType.RANK,
          label: 'by',
          options: [
            { label: 'Relevance', value: FilterQueryKey.Rank.RELEVANCE },
            { label: 'Date', value: FilterQueryKey.Rank.DATE },
          ],
        },
        {
          type: FilterType.TIME,
          label: 'from',
          options: [
            { label: 'All time', value: FilterQueryKey.Time.ALL_TIME },
            { label: 'Last 24h', value: FilterQueryKey.Time.LAST_24H },
            { label: 'Past Week', value: FilterQueryKey.Time.PAST_WEEK },
            { label: 'Past Month', value: FilterQueryKey.Time.PAST_MONTH },
            { label: 'Past Year', value: FilterQueryKey.Time.PAST_YEAR },
          ],
        },
      ]}
    ></SearchBox>
  );
}

export default SearchBoxWrapper;
