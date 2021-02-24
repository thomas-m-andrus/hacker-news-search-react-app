import React from 'react';
import styles from './app.module.scss';
import { ReactComponent as Logo } from './logo.svg';
import {
  Search,
  Results as ResultsComponent,
} from '@hacker-news-search-react-app/pages';
import { Route, Link, Switch, Router, useHistory } from 'react-router-dom';

export function App() {
  const history = useHistory();
  return (
    <div className={styles.app}>
      <Link to={'/results'}>go to results</Link>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Search
                trigger={(_): void => {
                  history.push('/results');
                }}
              ></Search>
            </div>
          )}
        />
        <Route
          path="/results"
          exact
          render={() => (
            <div>
              <ResultsComponent></ResultsComponent>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
