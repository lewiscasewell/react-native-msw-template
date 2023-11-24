import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

export function renderWithReactQuery(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  queryClient.clear();

  function Wrapper({children}: {children: React.ReactNode}) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return {...render(ui, {wrapper: Wrapper}), queryClient};
}

export function renderHookWithReactQuery<HookType>(useHook: () => HookType) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  function Wrapper({children}: {children: React.ReactNode}) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return {...renderHook(useHook, {wrapper: Wrapper}), queryClient};
}
