import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import { store } from '@hacker-news-search-react-app/redux-store';
import { Provider } from 'react-redux';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to hacker-news-search!</title>
      </Head>
      <div className="app">
        <Provider store={store}>
          <main>
            <Component {...pageProps} />
          </main>
        </Provider>
      </div>
    </>
  );
}

export default CustomApp;
