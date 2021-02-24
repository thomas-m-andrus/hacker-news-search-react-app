import React from 'react';
import { Results as ResultsComponent } from '@hacker-news-search-react-app/pages';
import './results.module.scss';

/* eslint-disable-next-line */
export interface ResultsProps {}

export function Results(props: ResultsProps) {
  return (
    <div>
      <ResultsComponent></ResultsComponent>
    </div>
  );
}

export default Results;
