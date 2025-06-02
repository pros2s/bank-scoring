import { useTranslation } from 'react-i18next';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const LoginLink = () => {
  const { t } = useTranslation();

  return (
    <AppLink to={RoutesPaths.login} className='nav-link' theme={AppLinkTheme.SECONDARY}>
      {t('login')}
    </AppLink>
  );
};

LoginLink.displayName = 'LoginLink';
