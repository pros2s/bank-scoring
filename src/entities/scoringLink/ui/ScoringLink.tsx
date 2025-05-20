import { useTranslation } from 'react-i18next';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const ScoringLink = () => {
  const { t } = useTranslation();

  return (
    <AppLink to={RoutesPaths.scoring} className='nav-link' theme={AppLinkTheme.SECONDARY}>
      {t('scoring')}
    </AppLink>
  );
};

ScoringLink.displayName = 'ScoringLink';
