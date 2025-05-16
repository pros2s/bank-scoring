import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LOCALSTORAGE_TO_CURRENT_CURRENCY_ABBR,
  LOCALSTORAGE_TO_CURRENT_CURRENCY_DESC,
} from '@/shared/consts/localeStorage';

import { ChoseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChoseCurrencySchema = {
  currentCurrency: {
    abbr: '',
    description: '',
  },
  isCurMenu: false,
};

const choseToCurrencySlice = createSlice({
  name: 'choseToCurrency',
  initialState,
  reducers: {
    setToCurrentCurrency(state, { payload }: PayloadAction<CurrencyName>) {
      localStorage.setItem(LOCALSTORAGE_TO_CURRENT_CURRENCY_ABBR, payload.abbr);
      localStorage.setItem(LOCALSTORAGE_TO_CURRENT_CURRENCY_DESC, payload.description);
      state.currentCurrency = payload;
    },
    setIsToCurMenu(state, { payload }: PayloadAction<boolean>) {
      state.isCurMenu = payload;
    },
    setDefaultToCurrentCurrency(state) {
      const localeStorageCurrentCurrencyAbbr = localStorage.getItem(
        LOCALSTORAGE_TO_CURRENT_CURRENCY_ABBR,
      );
      const localeStorageCurrentCurrencyDesc = localStorage.getItem(
        LOCALSTORAGE_TO_CURRENT_CURRENCY_DESC,
      );
      state.currentCurrency.abbr = localeStorageCurrentCurrencyAbbr || 'rub';
      state.currentCurrency.description = localeStorageCurrentCurrencyDesc || 'Russian Ruble';
    },
  },
});

export const { actions: ChoseToCurrencyActions } = choseToCurrencySlice;
export const { reducer: ChoseToCurrencyReducer } = choseToCurrencySlice;
