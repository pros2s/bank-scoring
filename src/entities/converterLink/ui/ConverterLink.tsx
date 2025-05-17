import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { useSmallWidth } from '@/shared/lib/hooks/useSmallWidth';
import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

import cls from './ConverterLink.module.scss';

export const ConverterLink = memo(() => {
  const { pathname } = useLocation();

  const isSmall = useSmallWidth();
  const { t } = useTranslation();

  return (
    <div>
      {pathname !== RoutesPaths.converter && (
        <AppLink
          className={cls.converterLink}
          to={RoutesPaths.converter}
          theme={AppLinkTheme.SECONDARY}
        >
          {isSmall ? t('goConverterSmall') : t('goConverter')}
        </AppLink>
      )}
    </div>
  );
});
