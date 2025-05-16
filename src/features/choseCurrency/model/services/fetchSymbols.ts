import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { CurrencyName } from '../..';

export const fetchSymbols = createAsyncThunk<CurrencyName[], void, ThunkConfig<string>>(
  'choseCurrency/fetchSymbols',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get('/currency-api@latest/v1/currencies.min.json');

      if (!response.data) {
        throw new Error();
      }

      return Object.entries(response.data).map(
        (arr): CurrencyName => ({
          abbr: arr[0],
          description: arr[1] as string,
        }),
      );
    } catch {
      return rejectWithValue('error');
    }
  },
);
