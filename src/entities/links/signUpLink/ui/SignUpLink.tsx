import { useTranslation } from 'react-i18next';

import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';

export const SignUpLink = () => {
  const { t } = useTranslation();

  return (
    <AppLink to={RoutesPaths.signup} className='nav-link' theme={AppLinkTheme.SECONDARY}>
      {t('signUp')}
    </AppLink>
  );
};

SignUpLink.displayName = 'SignUpLink';
