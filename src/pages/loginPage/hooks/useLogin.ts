import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppActions } from '@/app/model/slice/AppSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { users } from '../consts/users';
import { getLogin, getPassword } from '../model/selectors/loginPageSelectors';
import { LoginPageActions } from '../model/slice/LoginPageSlice';

const { setLoginError, setLogin, setPassword } = LoginPageActions;
const { setIsAuth } = AppActions;

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const login = useSelector(getLogin);
  const password = useSelector(getPassword);

  const navigate = useNavigate();

  return () => {
    const foundUser = users.find((user) => user.login === login && user.password === password);

    dispatch(setLogin(''));
    dispatch(setPassword(''));

    if (!foundUser) {
      dispatch(setLoginError('loginError'));
      return;
    }

    dispatch(setLoginError(''));
    dispatch(setIsAuth(true));
    navigate('/', { replace: true });
  };
};
