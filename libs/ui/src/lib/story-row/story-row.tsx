import React from 'react';
import { StoryRowProps } from '@hacker-news-search-react-app/types';
import './story-row.module.scss';

export function StoryRow({ story }: StoryRowProps) {
  return (
    <div>
      <h1>Welcome to story-row!</h1>
    </div>
  );
}

export default StoryRow;
