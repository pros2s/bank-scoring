import { useLocation } from 'react-router-dom';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const ScoringLink = () => {
  const { pathname } = useLocation();

  if (pathname === RoutesPaths.scoring) return null;

  return (
    <AppLink to={RoutesPaths.scoring} theme={AppLinkTheme.SECONDARY}>
      Scoring
    </AppLink>
  );
};

ScoringLink.displayName = 'ScoringLink';
