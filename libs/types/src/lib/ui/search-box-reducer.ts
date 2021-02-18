import { SearchBoxProps } from '@hacker-news-search-react-app/types';
export enum SearchBoxState {
  BUTTON_DISABLED = 'BUTTON_DISABLED',
  BUTTON_ENABLED = 'BUTTON_ENABLED',
}
export interface SearchBoxReducer {
  values: SearchBoxProps['values'];
  state: SearchBoxState;
}
