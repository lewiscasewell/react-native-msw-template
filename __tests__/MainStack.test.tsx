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
import {renderWithReactQuery} from 'src/testUtils/render';
import {API_URL} from 'src/Constants';
import {HttpResponse, http} from 'msw';
import {errorMessage} from 'components/List';
import MainStack from 'src/stacks/MainStack';

describe('App', () => {
  it('renders correctly', () => {
    renderWithReactQuery(<MainStack />);

    // with the HeaderTitle component, we can use either the testID or the text
    const title = screen.getByTestId('header-title');
    const currenciesTitle = screen.getByText('Currencies');

    expect(title).toBeDefined();
    expect(currenciesTitle).toBeDefined();
  });

  it('renders a list of currencies', async () => {
    renderWithReactQuery(<MainStack />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
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

    renderWithReactQuery(<MainStack />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

    () => expect(screen.getByText(errorMessage)).toBeTruthy();
  });

  it('should change the sell supported filter when clicking on the filter buttons', async () => {
    renderWithReactQuery(<MainStack />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

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
