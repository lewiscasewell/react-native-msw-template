import {useQuery} from '@tanstack/react-query';
import {API_URL} from '../Constants';

export interface Currency {
  decimals: number | null;
  maxAmount: number | null;
  minAmount: number | null;
  minBuyAmount: number;
  maxBuyAmount: number | null;
  addressTagRegex?: null | string;
  notAllowedUSStates?: string[];
  notAllowedCountries?: any[];
  confirmationsRequired?: number | null;
  minSellAmount?: number;
  maxSellAmount?: number | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  name: string;
  code: string;
  precision: number;
  isSellSupported: boolean;
  addressRegex?: string;
  testnetAddressRegex?: string;
  supportsAddressTag?: boolean;
  supportsTestMode?: boolean;
  supportsLiveMode?: boolean;
  isSuspended?: boolean;
  isSupportedInUS?: boolean;
  metadata?: Metadata;
}

export interface Metadata {
  contractAddress: null | string;
  coinType: null | string;
  chainId: null | string;
  networkCode: string;
}

type Options = {
  sellSupported?: boolean;
};

const useCurrencyQuery = (options: Options) => {
  return useQuery<Currency[]>({
    queryKey: ['currencies'],
    queryFn: () => fetch(API_URL).then(res => res.json()),
    staleTime: 1000 * 60,
    select: data => {
      if (options.sellSupported === true) {
        return data.filter(currency => currency.isSellSupported);
      } else if (options.sellSupported === false) {
        return data.filter(currency => !currency.isSellSupported);
      } else {
        return data;
      }
    },
  });
};

export default useCurrencyQuery;
