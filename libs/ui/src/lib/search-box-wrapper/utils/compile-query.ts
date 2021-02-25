import {
  SearchBoxReducer,
  Tags,
  Rank,
  FilterQueryKey,
  Time,
} from '@hacker-news-search-react-app/types';
import { transformTimeKey } from './date-time-functions';

export const mapTagToQuery = (key: Tags): string => {
  return {
    [FilterQueryKey.Tags.ALL]: '',
    [FilterQueryKey.Tags.COMMENTS]: 'comment',
    [FilterQueryKey.Tags.STORIES]: 'story',
  }[key];
};
export const encodeParameters = (
  parameters: Record<string, string>
): string => {
  return Object.keys(parameters)
    .map((p) => `${p}=${encodeURIComponent(parameters[p])}`)
    .join('&');
};
export const compileQuery = (values: SearchBoxReducer['values']): string => {
  const relivantApi = 'http://hn.algolia.com/api/v1/search?';
  const timeApi = 'http://hn.algolia.com/api/v1/search_by_date?';
  const tag = mapTagToQuery(values.type as Tags);
  const time = transformTimeKey(values.time as Time);
  const query = encodeParameters({ query: values.input });
  const tags = tag === '' ? '' : `&tags=${tag}`;
  const numericFilters =
    time === '' ? '' : `&numericFilters=created_at_i>${time}`;
  return `${
    (values.rank as Rank) === Rank.RELEVANCE ? relivantApi : timeApi
  }${query}${tags}${numericFilters}`;
};
