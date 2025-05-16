import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchSymbols } from '../services/fetchSymbols';
import { CurrencyName } from '../types/Currency';
import { SymbolsSchema } from '../types/SymbolsSchema';

const initialState: SymbolsSchema = {
  data: [],
  isLoading: false,
  errorMessage: '',
};

const symbolsSlice = createSlice({
  name: 'symbolsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSymbols.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchSymbols.fulfilled,
        (state, { payload }: PayloadAction<CurrencyName[]>) => {
          state.data = payload.sort((elem) => {
            if (
              elem.abbr === 'rub' ||
              elem.abbr === 'eur' ||
              elem.abbr === 'usd' ||
              elem.abbr === 'gbp'
            ) {
              return -1;
            }
            return 1;
          });
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchSymbols.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: SymbolsActions } = symbolsSlice;
export const { reducer: SymbolsReducer } = symbolsSlice;
