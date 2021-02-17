import { Hit } from '@hacker-news-search-react-app/types';
export interface StoryRowProps {
  story: Hit;
  labels: {
    commentNumber: string;
    author: string;
  };
}
