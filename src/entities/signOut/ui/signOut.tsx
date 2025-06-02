import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AppActions } from '@/app/model/slice/AppSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

const { setIsAuth } = AppActions;

export const SignOut = memo(() => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(setIsAuth(false));

    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 100);
  };

  return (
    <Button className='nav-link' theme={ButtonThemes.CLEAR} onClick={handleSignOut}>
      {t('signOut')}
    </Button>
  );
});
