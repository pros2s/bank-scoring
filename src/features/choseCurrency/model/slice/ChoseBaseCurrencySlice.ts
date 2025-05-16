import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LOCALSTORAGE_BASE_CURRENT_CURRENCY_ABBR,
  LOCALSTORAGE_BASE_CURRENT_CURRENCY_DESC,
} from '@/shared/consts/localeStorage';

import { ChoseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChoseCurrencySchema = {
  currentCurrency: {
    abbr: 'rub',
    description: 'Russian Ruble',
  },
  isCurMenu: false,
};

const choseBaseCurrencySlice = createSlice({
  name: 'choseBaseCurrency',
  initialState,
  reducers: {
    setBaseCurrentCurrency(state, { payload }: PayloadAction<CurrencyName>) {
      localStorage.setItem(LOCALSTORAGE_BASE_CURRENT_CURRENCY_ABBR, payload.abbr);
      localStorage.setItem(LOCALSTORAGE_BASE_CURRENT_CURRENCY_DESC, payload.description);
      state.currentCurrency = payload;
    },
    setIsBaseCurMenu(state, { payload }: PayloadAction<boolean>) {
      state.isCurMenu = payload;
    },
    setDefaultBaseCurrentCurrency(state) {
      const localeStorageCurrentCurrencyAbbr = localStorage.getItem(
        LOCALSTORAGE_BASE_CURRENT_CURRENCY_ABBR,
      );
      const localeStorageCurrentCurrencyDesc = localStorage.getItem(
        LOCALSTORAGE_BASE_CURRENT_CURRENCY_DESC,
      );
      state.currentCurrency.abbr = localeStorageCurrentCurrencyAbbr || 'rub';
      state.currentCurrency.description = localeStorageCurrentCurrencyDesc || 'Russian Ruble';
    },
  },
});

export const { actions: ChoseBaseCurrencyActions } = choseBaseCurrencySlice;
export const { reducer: ChoseBaseCurrencyReducer } = choseBaseCurrencySlice;
