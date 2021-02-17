import React from 'react';
import { StoryRow } from './story-row';
import data from '../../../../../mocks/stephen-hawking-has-died.json';
import { List } from '@material-ui/core';

export default {
  component: StoryRow,
  title: 'StoryRow',
};
const labels = { author: 'author', commentNumber: 'number of comments' };
export const titleMatched = () => {
  return (
    <List>
      <StoryRow story={data.hits[0]} labels={labels} />
    </List>
  );
};
export const titleNotMatched = () => {
  return (
    <List>
      <StoryRow story={data.hits[1]} labels={labels} />
    </List>
  );
};
