import { ChangeEvent, memo, InputHTMLAttributes, useEffect, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type DefaultInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends DefaultInputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  isAutoFocus?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({ className, value, onChange, type, placeholder, isAutoFocus, ...otherProps }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (isAutoFocus) {
        inputRef.current?.focus();
      }
    }, [isAutoFocus]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classNames(cls.InputWrapper, [className])}>
        <input
          placeholder={placeholder}
          ref={inputRef}
          className={cls.input}
          value={value ?? ''}
          onChange={changeHandler}
          type={type}
          {...otherProps}
        />
      </div>
    );
  },
);
