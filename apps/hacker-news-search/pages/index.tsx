import React from 'react';
import { Search } from '@hacker-news-search-react-app/pages';
import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <a href={'/results'}>results</a>
      <Search></Search>
    </div>
  );
}

export default Index;
