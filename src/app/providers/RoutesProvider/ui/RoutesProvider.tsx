import { memo, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { useRoutesConfig } from '../config/useRoutesConfig';

const RoutesProvider = memo(() => {
  const routesConfig = useRoutesConfig();

  return (
    <Routes>
      {Object.values(routesConfig)
        .filter(({ noRender }) => !noRender)
        .map(({ element, path }) => (
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
});

export default RoutesProvider;
