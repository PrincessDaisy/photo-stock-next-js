/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import '../assets/styles/normalize.css';
import '../assets/styles/fonts.css';

export default function App({ Component, pageProps }) {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
