import { FC, useState, useMemo, ReactNode } from 'react';

import { AuthContext, LOCAL_STORAGE_AUTH_KEY, AuthContextProps } from '../lib/AuthContext';

const defaultAuth = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) === '1' || false;

interface AuthProviderProps {
  children: ReactNode;
  initialAuth?: boolean;
}

const AuthProvider: FC<AuthProviderProps> = ({ children, initialAuth }) => {
  const [isAuth, setIsAuth] = useState<boolean>(initialAuth || defaultAuth);

  const defaultValue = useMemo(
    (): AuthContextProps => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth],
  );

  return <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
