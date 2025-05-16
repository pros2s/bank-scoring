import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { ResentRatesActions } from '../slice/ResentRatesSlice';
import { ResentRatesParams } from '../types/ResentRatesSchema';

export const fetchRecentRates = createAsyncThunk<
  Record<string, number>,
  ResentRatesParams,
  ThunkConfig<string>
>('recentRates/fetchRecentRates', async ({ base }, { rejectWithValue, extra, dispatch }) => {
  try {
    if (!base) {
      throw new Error();
    }

    const response = await extra.api.get(`/currency-api@latest/v1/currencies/${base}.min.json`);

    if (!response || !response.data) {
      throw new Error();
    }

    const values = Object.values(response.data);
    dispatch(ResentRatesActions.setRecentRatesDate(values[0] as string));

    return values[1] as Record<string, number>;
  } catch {
    return rejectWithValue('error');
  }
});
