import { RouteProps } from 'react-router-dom';

import { LoginPage } from '@/pages/loginPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { ScoringPage } from '@/pages/scoringPage';
import { AppRoutes, RoutesPaths } from '@/shared/lib/routes/routes';

export const loginRoutesConfig: Partial<Record<AppRoutes, RouteProps>> = {
  [AppRoutes.SCORING]: {
    path: RoutesPaths.scoring,
    element: <ScoringPage />,
  },

  [AppRoutes.LOGIN]: {
    path: RoutesPaths.login,
    element: <LoginPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutesPaths.notFound,
    element: <NotFoundPage />,
  },
};
