import React from 'react';
import { Results } from './results';
import { Storybook_Many_Results_Data as Data } from '@hacker-news-search-react-app/mock';
import { ResultsProps, ApiState } from '@hacker-news-search-react-app/types';

export default {
  component: Results,
  title: 'Results',
};

export const resolved = () => {
  const stuff: ResultsProps['data'] = Data;
  return (
    <Results
      data={stuff}
      labels={{ loading: 'loading...' }}
      apiState={ApiState.RESOLVED}
    />
  );
};
export const initial = () => {
  const stuff: ResultsProps['data'] = Data;
  return (
    <Results
      data={stuff}
      labels={{ loading: 'loading...' }}
      apiState={ApiState.INITIAL}
    />
  );
};
export const pending = () => {
  const stuff: ResultsProps['data'] = Data;
  return (
    <Results
      data={stuff}
      labels={{ loading: 'loading...' }}
      apiState={ApiState.PENDING}
    />
  );
};
export const errored = () => {
  const stuff: ResultsProps['data'] = Data;
  return (
    <Results
      data={stuff}
      labels={{ loading: 'loading...' }}
      apiState={ApiState.ERRORED}
    />
  );
};
