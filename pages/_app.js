/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../assets/styles/normalize.css';
import '../assets/styles/fonts.css';

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
