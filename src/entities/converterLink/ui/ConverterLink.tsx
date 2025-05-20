import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const ConverterLink = memo(() => {
  const { t } = useTranslation();

  return (
    <AppLink className='nav-link' to={RoutesPaths.converter} theme={AppLinkTheme.SECONDARY}>
      {t('converter')}
    </AppLink>
  );
});
