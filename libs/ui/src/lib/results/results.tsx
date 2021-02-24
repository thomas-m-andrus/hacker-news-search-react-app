import React from 'react';
import { StoryRow } from '@hacker-news-search-react-app/ui';
import { ResultsProps, ApiState } from '@hacker-news-search-react-app/types';
import './results.module.scss';
import { List } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';

export function Results({ data, apiState, error, labels }: ResultsProps) {
  const dataExists = data !== undefined;
  const showLoading = apiState === ApiState.PENDING;
  const showRows = apiState === ApiState.RESOLVED && dataExists;
  const showPagination = apiState !== ApiState.INITIAL && dataExists;
  return (
    <div>
      <h1>Welcome to results!</h1>
      {showLoading && <CircularProgress></CircularProgress>}
      {showRows && (
        <List>
          {data.hits.map((element, idx) => (
            <StoryRow
              key={`story_result_${element.story_id}_${idx}`}
              story={element}
              labels={{
                author: 'Author:',
                commentNumber: 'Number of comments:',
              }}
            ></StoryRow>
          ))}
        </List>
      )}
      {showPagination && <Pagination {...{ count: data.nbPages }}></Pagination>}
    </div>
  );
}

export default Results;
