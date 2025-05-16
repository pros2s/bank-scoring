import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LOCALSTORAGE_FROM_CURRENT_CURRENCY_ABBR,
  LOCALSTORAGE_FROM_CURRENT_CURRENCY_DESC,
} from '@/shared/consts/localeStorage';

import { ChoseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChoseCurrencySchema = {
  currentCurrency: { abbr: '', description: '' },
  isCurMenu: false,
};

const choseFromCurrencySlice = createSlice({
  name: 'choseFromCurrency',
  initialState,
  reducers: {
    setFromCurrentCurrency(state, { payload }: PayloadAction<CurrencyName>) {
      localStorage.setItem(LOCALSTORAGE_FROM_CURRENT_CURRENCY_ABBR, payload.abbr);
      localStorage.setItem(LOCALSTORAGE_FROM_CURRENT_CURRENCY_DESC, payload.description);
      state.currentCurrency = payload;
    },
    setIsFromCurMenu(state, { payload }: PayloadAction<boolean>) {
      state.isCurMenu = payload;
    },
    setDefaultFromCurrentCurrency(state) {
      const localeStorageCurrentCurrencyAbbr = localStorage.getItem(
        LOCALSTORAGE_FROM_CURRENT_CURRENCY_ABBR,
      );
      const localeStorageCurrentCurrencyDesc = localStorage.getItem(
        LOCALSTORAGE_FROM_CURRENT_CURRENCY_DESC,
      );
      state.currentCurrency.abbr = localeStorageCurrentCurrencyAbbr || 'usd';
      state.currentCurrency.description =
        localeStorageCurrentCurrencyDesc || 'United States Dollar';
    },
  },
});

export const { actions: ChoseFromCurrencyActions } = choseFromCurrencySlice;
export const { reducer: ChoseFromCurrencyReducer } = choseFromCurrencySlice;
