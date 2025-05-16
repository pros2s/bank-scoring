import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchRecentRates } from '../services/fetchRecentRates';
import { fetchYesterdayRates } from '../services/fetchYesterdayRates';
import { ResentRatesSchema } from '../types/ResentRatesSchema';

const initialState: ResentRatesSchema = {
  inputValue: '',
  isLoading: false,
  recentRatesDate: '',
  errorMessage: '',
  yesterdayRates: {},
  recentRates: {},
};

const resentRatesSlice = createSlice({
  name: 'resentRates',
  initialState,
  reducers: {
    setInputValue(state, { payload }: PayloadAction<string>) {
      state.inputValue = payload;
    },
    setRecentRatesDate(state, { payload }: PayloadAction<string>) {
      state.recentRatesDate = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentRates.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchRecentRates.fulfilled,
        (state, { payload }: PayloadAction<Record<string, number>>) => {
          state.recentRates = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchRecentRates.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      })
      .addCase(fetchYesterdayRates.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchYesterdayRates.fulfilled,
        (state, { payload }: PayloadAction<Record<string, number>>) => {
          state.yesterdayRates = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchYesterdayRates.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: ResentRatesActions } = resentRatesSlice;
export const { reducer: ResentRatesReducer } = resentRatesSlice;
