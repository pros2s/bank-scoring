import { RouteProps } from 'react-router-dom';

import { ConverterPage } from '@/pages/converterPage';
import { CreditorsPage } from '@/pages/creditorsPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { RatesPage } from '@/pages/ratesPage';
import { AppRoutes, RoutesPaths } from '@/shared/lib/routes/routes';

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.CONVERTER]: {
    path: RoutesPaths.converter,
    element: <ConverterPage />,
  },
  [AppRoutes.RATES]: {
    path: RoutesPaths.rates,
    element: <RatesPage />,
  },
  [AppRoutes.CREDITORS]: {
    path: RoutesPaths.creditors,
    element: <CreditorsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPaths.notFound,
    element: <NotFoundPage />,
  },
};
