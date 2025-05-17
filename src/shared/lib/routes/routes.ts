export enum AppRoutes {
  SCORING = 'scoring',
  CONVERTER = 'converter',
  RATES = 'rates',
  CREDITORS = 'creditors',
  NOT_FOUND = 'notFound',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.SCORING]: '/',
  [AppRoutes.CONVERTER]: '/converter',
  [AppRoutes.RATES]: '/rates',
  [AppRoutes.CREDITORS]: '/creditors',
  [AppRoutes.NOT_FOUND]: '*',
};
