import { SearchBoxProps } from '@hacker-news-search-react-app/types';
export enum Tags {
  ALL = 'ALL',
  STORIES = 'STORIES',
  COMMENTS = 'COMMENTS',
}
export enum Rank {
  RELEVANCE = 'RELEVANCE',
  DATE = 'DATE',
}
export enum Time {
  ALL_TIME = 'ALL_TIME',
  LAST_24H = 'LAST_24H',
  PAST_WEEK = 'PAST_WEEK',
  PAST_MONTH = 'PAST_MONTH',
  PAST_YEAR = 'PAST_YEAR',
}
export const FilterQueryKey = {
  Tags: Tags,
  Rank: Rank,
  Time: Time,
};

export interface SearchBoxWrapperProps
  extends Pick<SearchBoxProps, 'autoCompleteOptions'> {
  trigger: (msg: { link: string; searchTerm: string }) => void;
}
