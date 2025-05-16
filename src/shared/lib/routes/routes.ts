export enum AppRoutes {
  MAIN = 'main',
  RATES = 'rates',
  CREDITORS = 'creditors',
  NOT_FOUND = 'notFound',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RATES]: '/rates',
  [AppRoutes.CREDITORS]: '/creditors',
  [AppRoutes.NOT_FOUND]: '*',
};
