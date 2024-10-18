import React from 'react';
import { createRoot } from 'react-dom/client';

import Options from './OptionsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

createRoot(window.document.getElementById('app-container')).render(
  <QueryClientProvider client={queryClient}>
    <Options />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
