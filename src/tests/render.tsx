import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        // set cache time to 0 to allow jest to exit cleanly after tests finish
        gcTime: 0,
      },
    },
  });
};

export function renderWithReactQuery(ui: React.ReactElement) {
  const queryClient = createQueryClient();

  function Wrapper({children}: {children: React.ReactNode}) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return {...render(ui, {wrapper: Wrapper}), queryClient};
}

export function renderHookWithReactQuery<HookType>(useHook: () => HookType) {
  const queryClient = createQueryClient();

  function Wrapper({children}: {children: React.ReactNode}) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  }

  return {...renderHook(useHook, {wrapper: Wrapper}), queryClient};
}
