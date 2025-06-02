import { StateSchema } from '@/app/providers/StoreProvider';

export const getLogin = (state: StateSchema) => state.loginPage?.login;
export const getPassword = (state: StateSchema) => state.loginPage?.password;
export const getLoginError = (state: StateSchema) => state.loginPage?.loginError;
