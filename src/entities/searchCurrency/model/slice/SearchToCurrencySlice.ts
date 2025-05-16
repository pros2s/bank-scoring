import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SearchCurrencySchema } from '../types/SearchCurrencySchema';

const initialState: SearchCurrencySchema = {
  value: '',
  isFocused: false,
};

const searchToCurrencySlice = createSlice({
  name: 'searchToCurrency',
  initialState,
  reducers: {
    setToValue(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
    setToIsFocused(state, { payload }: PayloadAction<boolean>) {
      state.isFocused = payload;
    },
  },
});

export const { actions: SearchToCurrencyActions } = searchToCurrencySlice;
export const { reducer: SearchToCurrencyReducer } = searchToCurrencySlice;
