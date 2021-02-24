import React from 'react';
import { Results, ResultsProps } from './results';

export default {
  component: Results,
  title: 'Results',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ResultsProps = {};

  return <Results />;
};
