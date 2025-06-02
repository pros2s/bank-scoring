import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppSliceSchema } from '@/app/model/types/AppSliceSchema';

const isAuth = localStorage.getItem('auth') === '1';

const initialState: AppSliceSchema = {
  isAuth,
};

const AppSlice = createSlice({
  name: 'searchBaseCurrency',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      localStorage.setItem('auth', action.payload ? '1' : '0');
    },
  },
});

export const { actions: AppActions } = AppSlice;
export const { reducer: AppReducer } = AppSlice;
