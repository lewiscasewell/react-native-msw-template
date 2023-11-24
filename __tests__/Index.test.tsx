import 'react-native';
import React from 'react';
import {server} from 'src/testUtils/setupTestServer';
import {it, describe, expect} from '@jest/globals';
import {
  act,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import Index from 'src';
import {renderWithReactQuery} from 'src/testUtils/render';
import {API_URL} from 'src/Constants';
import {HttpResponse, http} from 'msw';
import {errorMessage} from 'components/List';

describe('App', () => {
  it('renders correctly', async () => {
    renderWithReactQuery(<Index />);

    const title = screen.getByText('Currencies');

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(title).toBeDefined();
  });

  it('renders a list of currencies', async () => {
    renderWithReactQuery(<Index />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(screen.getByText('aave')).toBeDefined();
    expect(screen.getAllByTestId('card')).toHaveLength(10);
    act(() => {
      fireEvent.press(screen.getByText('No'));
    });

    expect(screen.queryByText('aave')).toBeDefined();
    expect(screen.queryByText('avax_cchain')).not.toBeTruthy();
  });

  it('renders error message when there is an error returning countries', async () => {
    server.use(
      http.get(API_URL, () => {
        return HttpResponse.json(undefined, {status: 500});
      }),
    );

    renderWithReactQuery(<Index />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    () => expect(screen.getByText(errorMessage)).toBeTruthy();
  });

  it('should change the sell supported filter when clicking on the filter buttons', async () => {
    renderWithReactQuery(<Index />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(screen.getByText('aave')).toBeDefined();
    expect(screen.getAllByTestId('card')).toHaveLength(10);

    act(() => {
      fireEvent.press(screen.getByText('No'));
    });

    expect(screen.queryByText('aave')).toBeDefined();
    expect(screen.queryByText('avax_cchain')).not.toBeTruthy();

    act(() => {
      fireEvent.press(screen.getByText('Yes'));
    });

    expect(screen.queryByText('aave')).not.toBeTruthy();
    expect(screen.queryByText('avax_cchain')).toBeDefined();

    act(() => {
      fireEvent.press(screen.getByText('Both'));
    });

    expect(screen.getByText('aave')).toBeDefined();
    expect(screen.getAllByTestId('card')).toHaveLength(10);
  });
});
