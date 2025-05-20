import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ScoreStatusType } from '@/shared/lib/types/scoring';

import cls from './CreditStatus.module.scss';

interface CreditStatusProps {
  status?: ScoreStatusType;
  className?: string;
}

export const CreditStatus = memo(({ status, className }: CreditStatusProps) => {
  const { t } = useTranslation();

  if (!status) return null;

  return <span className={classNames(cls.status, [cls[status], className])}>{t(status)}</span>;
});

CreditStatus.displayName = 'CreditStatus';
