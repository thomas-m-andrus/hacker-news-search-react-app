import { TriggerType } from '@hacker-news-search-react-app/types';
export interface SearchPageProps {
  trigger: (msg: { type: TriggerType.BUTTON }) => void;
}
