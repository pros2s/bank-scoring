import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchCurrencySchema } from '../types/SearchCurrencySchema';

const initialState: SearchCurrencySchema = {
  value: '',
  isFocused: false,
};

const searchFromCurrencySlice = createSlice({
  name: 'searchFromCurrency',
  initialState,
  reducers: {
    setFromValue(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
    setFromIsFocused(state, { payload }: PayloadAction<boolean>) {
      state.isFocused = payload;
    },
  },
});

export const { actions: SearchFromCurrencyActions } = searchFromCurrencySlice;
export const { reducer: SearchFromCurrencyReducer } = searchFromCurrencySlice;
