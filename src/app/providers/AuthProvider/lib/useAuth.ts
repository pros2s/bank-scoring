import { useContext } from 'react';

import { LOCAL_STORAGE_AUTH_KEY, AuthContext } from './AuthContext';

interface UseAuthResults {
  changeAuth: (auth: boolean) => void;
  isAuth: boolean;
}

export const useAuth = (): UseAuthResults => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const changeAuth = (auth: boolean) => {
    setIsAuth?.(auth);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, auth ? '1' : '0');
  };

  return { isAuth, changeAuth };
};
