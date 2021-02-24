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
      <Search
        trigger={(_): void => {
          window.location.href = '/results';
        }}
      ></Search>
    </div>
  );
}

export default Index;
