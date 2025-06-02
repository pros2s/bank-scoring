import { createContext } from 'react';

const isAuth = localStorage.getItem('auth') === '1';

export interface AuthContextProps {
  isAuth: boolean;
  setIsAuth?: (isAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({ isAuth });

export const LOCAL_STORAGE_AUTH_KEY = 'auth';
