import { SearchState } from '@hacker-news-search-react-app/types';
export enum ResultTriggerType {
  PAGINATE = 'PAGINATE',
}
export interface ResultAction {
  type: ResultTriggerType.PAGINATE;
  paylaod: { page: number };
}
export interface ResultsProps
  extends Pick<SearchState, 'data' | 'error' | 'apiState'> {
  labels: { loading: string };
  trigger: (msg: ResultAction) => void;
}
