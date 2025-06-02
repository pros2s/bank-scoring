import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/app/providers/AuthProvider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { RoutesPaths } from '@/shared/lib/routes/routes';

import { users } from '../consts/users';
import { getLogin, getPassword } from '../model/selectors/loginPageSelectors';
import { LoginPageActions } from '../model/slice/LoginPageSlice';

const { setLoginError, setLogin, setPassword } = LoginPageActions;

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { changeAuth } = useAuth();
  const navigate = useNavigate();

  const login = useSelector(getLogin);
  const password = useSelector(getPassword);

  return () => {
    const foundUser = users.find((user) => user.login === login && user.password === password);

    if (!foundUser) {
      dispatch(setLoginError('loginError'));
      return;
    }

    dispatch(setLogin(''));
    dispatch(setPassword(''));
    dispatch(setLoginError(''));

    changeAuth(true);
    navigate(RoutesPaths.creditors, { replace: true });
  };
};
