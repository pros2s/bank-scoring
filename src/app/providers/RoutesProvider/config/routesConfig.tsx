import { RouteProps } from 'react-router-dom';

import { ConverterPage } from '@/pages/converterPage';
import { CreditorsPage } from '@/pages/creditorsPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { RatesPage } from '@/pages/ratesPage';
import { ScoringPage } from '@/pages/scroringPage';
import { AppRoutes, RoutesPaths } from '@/shared/lib/routes/routes';

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.SCORING]: {
    path: RoutesPaths.scoring,
    element: <ScoringPage />,
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
