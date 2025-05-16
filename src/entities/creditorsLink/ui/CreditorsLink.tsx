import { memo } from 'react';

import { useLocation } from 'react-router-dom';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const CreditorsLink = memo(() => {
  const { pathname } = useLocation();

  if (pathname === RoutesPaths.creditors) return null;

  return (
    <AppLink to={RoutesPaths.creditors} theme={AppLinkTheme.SECONDARY}>
      creditors
    </AppLink>
  );
});
