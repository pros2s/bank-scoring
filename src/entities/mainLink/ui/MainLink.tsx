import { useLocation } from 'react-router-dom';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const MainLink = () => {
  const { pathname } = useLocation();

  if (pathname === RoutesPaths.main) return null;

  return (
    <AppLink to={RoutesPaths.main} theme={AppLinkTheme.SECONDARY}>
      main
    </AppLink>
  );
};

MainLink.displayName = 'MainLink';
