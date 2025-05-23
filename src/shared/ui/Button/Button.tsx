import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export enum ButtonSizes {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: ButtonSizes;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonThemes.OUTLINE,
    size = ButtonSizes.M,
    children,
    isDisabled,
    isLoading,
    ...restProps
  } = props;

  const mods: Mode = {
    [cls.disabled]: isDisabled,
    [cls.loading]: isLoading,
  };

  return (
    <button
      type='button'
      disabled={isDisabled}
      className={classNames(cls.Button, [className, cls[theme], cls[size]], mods)}
      {...restProps}
    >
      {children}
    </button>
  );
});
