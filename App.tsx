/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Index from './src';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
}

export default App;
