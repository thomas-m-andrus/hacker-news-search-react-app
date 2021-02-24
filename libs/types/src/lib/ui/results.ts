import { SearchState } from '@hacker-news-search-react-app/types';
export interface ResultsProps
  extends Pick<SearchState, 'data' | 'error' | 'apiState'> {
  labels: { loading: string };
}
