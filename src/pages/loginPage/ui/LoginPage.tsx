import { FormEvent } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { useLogin } from '../hooks/useLogin';
import { getLogin, getLoginError, getPassword } from '../model/selectors/loginPageSelectors';
import { LoginPageActions, LoginPageReducer } from '../model/slice/LoginPageSlice';

import cls from './LoginPage.module.scss';

const { setLogin, setLoginError, setPassword } = LoginPageActions;

const reducers: ReducersList = {
  loginPage: LoginPageReducer,
};

export const LoginPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const login = useSelector(getLogin);
  const password = useSelector(getPassword);
  const loginError = useSelector(getLoginError);

  const handleChangeLogin = (val: string) => {
    dispatch(setLogin(val));
    dispatch(setLoginError(''));
  };

  const handleChangePassword = (val: string) => {
    dispatch(setPassword(val));
    dispatch(setLoginError(''));
  };

  const handleLogin = useLogin();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };
  const isLoginDisabled = !login || !password || !!loginError;

  return (
    <DynamicReducerLoader reducers={reducers}>
      <form className={classNames(cls.content, ['content'])} onSubmit={handleSubmit}>
        {/* login */}
        <FlexBox direction='column' gap={5}>
          <Label label={`${t('yourLogin')}:`} />

          <div className='input'>
            <Input placeholder={t('yourLogin')} value={login} onChange={handleChangeLogin} />
          </div>
        </FlexBox>
        {/* // -------------------------------------------------------------- */}

        {/* password */}
        <FlexBox direction='column' gap={5}>
          <Label label={`${t('yourPassword')}:`} />

          <div className='input'>
            <Input placeholder={t('yourPassword')} value={password} onChange={handleChangePassword} />
          </div>
        </FlexBox>
        {/* // -------------------------------------------------------------- */}

        <Label info={t(loginError ?? '')} isError={!!loginError} />

        <Button
          className={cls.button}
          type='submit'
          theme={ButtonThemes.OUTLINE}
          onClick={handleLogin}
          isDisabled={isLoginDisabled}
        >
          {t('login')}
        </Button>
      </form>
    </DynamicReducerLoader>
  );
};

LoginPage.displayName = 'LoginPage';
