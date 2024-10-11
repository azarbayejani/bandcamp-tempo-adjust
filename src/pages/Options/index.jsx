import React from 'react';
import { render } from 'react-dom';

import Options from './Options';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

render(
  <QueryClientProvider client={queryClient}>
    <Options />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  window.document.querySelector('#app-container')
);
