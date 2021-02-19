import React, { useReducer } from 'react';
import { SearchBox } from '@hacker-news-search-react-app/ui';
import {
  SearchBoxState,
  FilterType,
  Trigger,
  TriggerType,
  FilterQueryKey,
  SearchBoxWrapperProps,
} from '@hacker-news-search-react-app/types';
import { compileQuery, initial } from './utils';
import { SearchBoxReducer as reducer } from './reducer';

import './search-box-wrapper.module.scss';

export function SearchBoxWrapper({
  trigger: triggerToParent,
  autoCompleteOptions: unfilteredAutoComplete,
}: SearchBoxWrapperProps) {
  const [{ state, values }, dispatch] = useReducer(reducer, initial);
  const trigger = (msg: Trigger): void => {
    if (msg.type === TriggerType.BUTTON) {
      triggerToParent({ link: compileQuery(values), searchTerm: values.input });
    } else {
      dispatch(msg);
    }
  };
  const autoCompleteOptions = unfilteredAutoComplete.filter((opt): boolean =>
    new RegExp(values.input.toLowerCase()).test(opt.toLowerCase())
  );
  const showAutoComplete = unfilteredAutoComplete.length > 0;
  return (
    <SearchBox
      disable={{ search: state === SearchBoxState.BUTTON_DISABLED }}
      trigger={trigger}
      show={{ autoComplete: showAutoComplete }}
      values={values}
      autoCompleteOptions={autoCompleteOptions}
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
