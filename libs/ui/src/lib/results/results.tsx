import React from 'react';
import { StoryRow } from '@hacker-news-search-react-app/ui';
import { Storybook_Many_Results_Data as Data } from '@hacker-news-search-react-app/mock';
import './results.module.scss';
import { List } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

/* eslint-disable-next-line */
export interface ResultsProps {}

export function Results(props: ResultsProps) {
  return (
    <div>
      <h1>Welcome to results!</h1>
      <List>
        {Data.hits.map((element, idx) => (
          <StoryRow
            key={`story_result_${element.story_id}_${idx}`}
            story={element}
            labels={{ author: 'Author:', commentNumber: 'Number of comments:' }}
          ></StoryRow>
        ))}
      </List>
      <Pagination {...{ count: Data.nbPages }}></Pagination>
    </div>
  );
}

export default Results;
