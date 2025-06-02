import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const CreditorsLink = memo(() => {
  const { t } = useTranslation();

  return (
    <AppLink to={RoutesPaths.creditors} className='nav-link' theme={AppLinkTheme.SECONDARY}>
      {t('creditors')}
    </AppLink>
  );
});
