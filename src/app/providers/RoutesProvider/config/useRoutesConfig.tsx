import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router-dom';

import { getIsAuth } from '@/app/model/selectors/getAppSelectors';
import { ConverterPage } from '@/pages/converterPage';
import { CreditorsPage } from '@/pages/creditorsPage';
import { LoginPage } from '@/pages/loginPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { RatesPage } from '@/pages/ratesPage';
import { ScoringPage } from '@/pages/scroringPage';
import { SignUpPage } from '@/pages/signUpPage';
import { AppRoutes, RoutesPaths } from '@/shared/lib/routes/routes';

type RoutesConfig = RouteProps & {
  noRender?: boolean;
};

export const useRoutesConfig = (): Record<AppRoutes, RoutesConfig> => {
  const isAuth = useSelector(getIsAuth);

  return {
    [AppRoutes.LOGIN]: {
      path: RoutesPaths.login,
      element: <LoginPage />,
      noRender: false,
    },
    [AppRoutes.SIGNUP]: {
      path: RoutesPaths.signup,
      element: <SignUpPage />,
      noRender: false,
    },

    [AppRoutes.SCORING]: {
      path: RoutesPaths.scoring,
      element: <ScoringPage />,
      noRender: !isAuth,
    },
    [AppRoutes.CONVERTER]: {
      path: RoutesPaths.converter,
      element: <ConverterPage />,
      noRender: !isAuth,
    },
    [AppRoutes.RATES]: {
      path: RoutesPaths.rates,
      element: <RatesPage />,
      noRender: !isAuth,
    },
    [AppRoutes.CREDITORS]: {
      path: RoutesPaths.creditors,
      element: <CreditorsPage />,
      noRender: !isAuth,
    },
    [AppRoutes.NOT_FOUND]: {
      path: RoutesPaths.notFound,
      element: <NotFoundPage />,
    },
  };
};
