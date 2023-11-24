import {UseQueryResult} from '@tanstack/react-query';
import {renderHookWithReactQuery} from '../src/tests/render';
import {Currency} from '../src/hooks/useCurrencyQuery';
import useCurrenciesQuery from '../src/hooks/useCurrencyQuery';

type UseCurrencyQuery = UseQueryResult<Currency[], Error>;

describe('useCurrenciesQuery', () => {
  it('returns a list of currencies', async () => {
    const {result, waitFor} = renderHookWithReactQuery<UseCurrencyQuery>(() =>
      useCurrenciesQuery({sellSupported: undefined}),
    );
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toBeDefined();
    expect(result.current.data?.length).toBeGreaterThan(0);
  });
  it('returns a list of currencies that dont support sell', async () => {
    const {result, waitFor} = renderHookWithReactQuery<UseCurrencyQuery>(() =>
      useCurrenciesQuery({sellSupported: false}),
    );
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toBeDefined();
    expect(result.current.data?.length).toBeGreaterThan(0);
    expect(result.current.data?.every(c => !c.isSellSupported)).toBeTruthy();
  });
  it('returns a list of currencies that support sell', async () => {
    const {result, waitFor} = renderHookWithReactQuery<UseCurrencyQuery>(() =>
      useCurrenciesQuery({sellSupported: true}),
    );
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toBeDefined();
    expect(result.current.data?.length).toBeGreaterThan(0);
    expect(result.current.data?.every(c => c.isSellSupported)).toBeTruthy();
  });
});
