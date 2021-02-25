import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '@hacker-news-search-react-app/redux-store';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

ReactDOM.render(
  // <React.StrictMode>//MUI's components cause an issue
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);
