import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { FlexBox } from '../FlexBox';

import cls from './Label.module.scss';

interface LabelProps {
  label?: string;
  info?: string;
  isError?: boolean;
  isSuccess?: boolean;
}

export const Label = memo(({ label, info, isError, isSuccess }: LabelProps) => (
  <FlexBox align='center' gap={10}>
    {!!label && <p className={`${cls.label} ellipsis`}>{label}</p>}

    {!!info && (
      <p className={classNames(cls.info, [], { [cls.error]: isError, [cls.success]: isSuccess })}>
        {info}
      </p>
    )}
  </FlexBox>
));

Label.displayName = 'Label';
