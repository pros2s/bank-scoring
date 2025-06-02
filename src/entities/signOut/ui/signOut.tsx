import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/app/providers/AuthProvider';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

export const SignOut = memo(() => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { changeAuth } = useAuth();

  const handleSignOut = () => {
    changeAuth(false);
    navigate('/login', { replace: true });
  };

  return (
    <Button className='nav-link' theme={ButtonThemes.CLEAR} onClick={handleSignOut}>
      {t('signOut')}
    </Button>
  );
});
