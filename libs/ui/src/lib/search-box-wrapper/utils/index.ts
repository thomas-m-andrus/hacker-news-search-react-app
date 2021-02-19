import {
  SearchBoxReducer as State,
  SearchBoxState,
  FilterQueryKey,
} from '@hacker-news-search-react-app/types';
export * from './date-time-functions';
export * from './compile-query';

export const initial: State = {
  state: SearchBoxState.BUTTON_DISABLED,
  values: {
    input: '',
    rank: FilterQueryKey.Rank.RELEVANCE,
    time: FilterQueryKey.Time.ALL_TIME,
    type: FilterQueryKey.Tags.ALL,
  },
};
