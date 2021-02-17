import React from 'react';
import { StoryRow } from './story-row';
import data from '../../../../../mocks/stephen-hawking-has-died.json';

export default {
  component: StoryRow,
  title: 'StoryRow',
};

export const primary = () => {
  return <StoryRow story={data.hits[0]} />;
};
