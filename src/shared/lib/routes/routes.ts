export enum AppRoutes {
  LOGIN = 'login',

  SCORING = 'scoring',
  CONVERTER = 'converter',
  RATES = 'rates',
  CREDITORS = 'creditors',
  NOT_FOUND = 'notFound',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: '/login',

  [AppRoutes.SCORING]: '/',
  [AppRoutes.CONVERTER]: '/converter',
  [AppRoutes.RATES]: '/rates',
  [AppRoutes.CREDITORS]: '/creditors',
  [AppRoutes.NOT_FOUND]: '*',
};
