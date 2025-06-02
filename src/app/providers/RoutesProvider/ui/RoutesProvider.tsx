import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useAuth } from '@/app/providers/AuthProvider';
import { PageLoader } from '@/widgets/PageLoader';

import { authRoutesConfig } from '../config/authRoutesConfig';
import { loginRoutesConfig } from '../config/loginRoutesConfig';

const RoutesProvider = () => {
  const { isAuth } = useAuth();

  const appRoutes = isAuth ? Object.values(authRoutesConfig) : Object.values(loginRoutesConfig);

  return (
    <Routes>
      {appRoutes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default RoutesProvider;
