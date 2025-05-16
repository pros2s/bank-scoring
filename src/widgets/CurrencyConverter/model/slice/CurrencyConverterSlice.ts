import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchRate } from '@/features/choseCurrency';
import { LOCALSTORAGE_INPUT_VALUE } from '@/shared/consts/localeStorage';

import { CurrencyConverterSchema } from '../types/CurrencyConverterSchema';

const initialState: CurrencyConverterSchema = {
  inputValue: '1.00',
  rateResult: undefined,
  isLoading: false,
  errorMessage: '',
  result: 0,
  isFlipped: false,
};

const currencyConverterSlice = createSlice({
  name: 'currencyConverter',
  initialState,
  reducers: {
    setInputValue(state, { payload }: PayloadAction<string>) {
      localStorage.setItem(LOCALSTORAGE_INPUT_VALUE, payload);
      state.inputValue = payload;
    },
    setDefaultInputValue(state) {
      const localeStorageValue = localStorage.getItem(LOCALSTORAGE_INPUT_VALUE);
      state.inputValue = localeStorageValue || '1.00';
    },
    setResult(state, { payload }: PayloadAction<number>) {
      state.result = payload;
    },
    setIsFlipped(state, { payload }: PayloadAction<boolean>) {
      state.isFlipped = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRate.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(fetchRate.fulfilled, (state, { payload }: PayloadAction<number>) => {
        state.rateResult = payload;
        state.errorMessage = '';
        state.isLoading = false;
      })
      .addCase(fetchRate.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: CurrencyConverterActions } = currencyConverterSlice;
export const { reducer: CurrencyConverterReducer } = currencyConverterSlice;
