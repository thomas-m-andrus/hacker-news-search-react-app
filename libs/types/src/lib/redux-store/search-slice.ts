import {
  SearchBoxWrapperTriggerToParent,
  Response,
} from '@hacker-news-search-react-app/types';

export enum ApiState {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  ERRORED = 'ERRORED',
  INITIAL = 'INITIAL',
}

export interface SearchState {
  searchTerms: SearchBoxWrapperTriggerToParent['searchTerm'][];
  data?: Response;
  error?: string;
  apiState: ApiState;
}
