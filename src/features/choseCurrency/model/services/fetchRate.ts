import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { ConvertParams } from '@/widgets/CurrencyConverter';

export const fetchRate = createAsyncThunk<number, ConvertParams, ThunkConfig<string>>(
  'choseCurrency/fetchRate',
  async ({ from, to }, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get(`/currency-api@latest/v1/currencies/${from}.min.json`);

      if (!response.data) {
        throw new Error();
      }

      return response.data[from][to];
    } catch {
      return rejectWithValue('error');
    }
  },
);
