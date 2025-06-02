import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getIsAuth } from '@/app/model/selectors/getAppSelectors';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutesPaths } from '@/shared/lib/routes/routes';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate(RoutesPaths.login, { replace: true });
  }, [isAuth, navigate]);

  return <div className={classNames(cls.NotFoundPage, [className])}>{t('notFoundPage')}</div>;
});

export default NotFoundPage;
