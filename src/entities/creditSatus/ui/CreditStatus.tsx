import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ScoreStatusType } from '@/shared/lib/types/scoring';

import cls from './CreditStatus.module.scss';

interface CreditStatusProps {
  status?: ScoreStatusType;
  className?: string;
}

export const CreditStatus = memo(({ status, className }: CreditStatusProps) => {
  if (!status) return null;

  return <span className={classNames(cls.status, [cls[status], className])}>{status}</span>;
});

CreditStatus.displayName = 'CreditStatus';
