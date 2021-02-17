import { HighlightResult } from '@hacker-news-search-react-app/types';
export interface Response {
  hits: HighlightResult[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}
