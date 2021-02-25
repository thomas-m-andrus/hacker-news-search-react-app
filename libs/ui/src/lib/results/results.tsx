import React from 'react';
import { StoryRow } from '../story-row/story-row';
import {
  ResultsProps,
  ApiState,
  ResultTriggerType,
} from '@hacker-news-search-react-app/types';
import './results.module.scss';
import { List, Box, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

export function Results({
  data,
  apiState,
  error,
  labels,
  trigger,
}: ResultsProps) {
  const dataExists = data !== undefined;
  const showLoading = apiState === ApiState.PENDING;
  const showRows = apiState === ApiState.RESOLVED && dataExists;
  const showPagination =
    [ApiState.PENDING, ApiState.RESOLVED].includes(apiState) &&
    dataExists &&
    data.nbPages > 1;
  const showError = ApiState.ERRORED === apiState;
  const pageLabel = dataExists
    ? `Page ${data.page + 1} of ${data.nbPages}`
    : '';
  return (
    <div className={`results`}>
      {showError && (
        <Alert severity="error">
          {error ?? `Something has gone wrong, try reloading the page!`}
        </Alert>
      )}
      {showLoading && (
        <Box
          display="flex"
          justifyContent="center"
          className="results__progress"
          position="relative"
        >
          <CircularProgress aria-label={labels.loading}></CircularProgress>
          <Box
            left={0}
            bottom={-30}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">
              {dataExists ? `Loading ${pageLabel}` : labels.loading}
            </Typography>
          </Box>
        </Box>
      )}
      {showRows && (
        <>
          <h1>{pageLabel}</h1>
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
        </>
      )}
      {showPagination && (
        <Box display="flex" justifyContent="center">
          <Pagination
            {...{
              count: data.nbPages,
              disabled: apiState === ApiState.PENDING,
              page: data.page + 1,
              onChange: (_, newPage): void => {
                trigger({
                  type: ResultTriggerType.PAGINATE,
                  paylaod: { page: newPage - 1 },
                });
              },
            }}
          ></Pagination>
        </Box>
      )}
    </div>
  );
}

export default Results;
