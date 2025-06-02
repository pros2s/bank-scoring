import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginPageSchema } from '../types/LoginPageSchema';

const initialState: LoginPageSchema = {
  login: '',
  password: '',
  loginError: '',
};

export const LoginPageSlice = createSlice({
  name: 'LoginPage',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoginError: (state, action: PayloadAction<string>) => {
      state.loginError = action.payload;
    },
  },
});

export const { actions: LoginPageActions, reducer: LoginPageReducer } = LoginPageSlice;
