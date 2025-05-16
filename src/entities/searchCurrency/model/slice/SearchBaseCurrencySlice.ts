import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchCurrencySchema } from '../types/SearchCurrencySchema';

const initialState: SearchCurrencySchema = {
  value: '',
  isFocused: false,
};

const searchBaseCurrencySlice = createSlice({
  name: 'searchBaseCurrency',
  initialState,
  reducers: {
    setBaseValue(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
    setBaseIsFocused(state, { payload }: PayloadAction<boolean>) {
      state.isFocused = payload;
    },
  },
});

export const { actions: SearchBaseCurrencyActions } = searchBaseCurrencySlice;
export const { reducer: SearchBaseCurrencyReducer } = searchBaseCurrencySlice;
