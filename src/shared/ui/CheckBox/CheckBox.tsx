import { ChangeEvent } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CheckBox.module.scss';

export type CheckBoxThemeType = 'default' | 'outline';

type CheckBoxSize = '22' | '24';

export interface CheckBoxProps {
  id: string;
  size?: CheckBoxSize;
  theme?: CheckBoxThemeType;
  onCheckBoxChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  text?: string;
  className?: string;
}

export const CheckBox = ({
  className,
  theme = 'default',
  id,
  size = '22',
  isChecked,
  text,
  onCheckBoxChange,
}: CheckBoxProps) => {
  const checkBoxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckBoxChange?.(e);
  };

  const checkBoxClassName = classNames(cls.check, [
    cls[theme],
    size === '22' ? cls['size-22'] : cls['size-24'],
    className,
  ]);

  return (
    <div className={checkBoxClassName} role='presentation'>
      <input id={id} onChange={checkBoxChangeHandler} type='CheckBox' checked={isChecked} />
      <label className='ellipsis' htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

CheckBox.displayName = 'CheckBox';
