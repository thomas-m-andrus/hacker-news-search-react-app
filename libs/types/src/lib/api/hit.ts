import { HighlightResult } from '@hacker-news-search-react-app/types';
export interface Hit {
  created_at: string;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text: string | null;
  comment_text: string | null;
  num_comments: number;
  story_id: string | null;
  story_title: string | null;
  story_url: string | null;
  parent_id: string | null;
  created_at_i: number;
  relevancy_score: number;
  _tags: string[];
  objectID: string;
  _highlightResult: Record<string, HighlightResult>;
}
