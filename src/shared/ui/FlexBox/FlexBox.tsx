import { ReactNode, HTMLAttributes, Ref } from 'react';

import { Classes, classNames } from '@/shared/lib/classNames/classNames';

import cls from './FlexBox.module.scss';

export type JustifyType = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type AlignType = 'start' | 'center' | 'end' | 'stretch';
export type DirectionType = 'row' | 'column';
export type OrientationType = 'normal' | 'reverse';

interface FlexBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  justify?: JustifyType;
  align?: AlignType;
  direction?: DirectionType;
  orientation?: OrientationType;
  gap?: number | string;
  isWrap?: boolean;
  ref?: Ref<HTMLDivElement>;
  className?: string;
}

export const justifyPos: Record<JustifyType, string> = {
  around: cls['justify-around'],
  between: cls['justify-between'],
  center: cls['justify-center'],
  end: cls['justify-end'],
  start: cls['justify-start'],
  evenly: cls['justify-evenly'],
};

export const alignPos: Record<AlignType, string> = {
  center: cls['align-center'],
  end: cls['align-end'],
  start: cls['align-start'],
  stretch: cls['align-stretch'],
};

export const flexDirection: Record<DirectionType, string> = {
  column: cls.column,
  row: cls.row,
};

export const flexOrientation: Record<OrientationType, string> = {
  normal: '',
  reverse: cls.reverse,
};

export const FlexBox = ({
  children,
  className,
  align = 'start',
  direction = 'row',
  gap,
  justify = 'start',
  orientation = 'normal',
  isWrap,
  style,
  ref,
  id,
  ...otherProps
}: FlexBoxProps) => {
  const classes: Classes = [
    className,
    justifyPos[justify],
    alignPos[align],
    flexDirection[direction],
    flexOrientation[orientation],
  ];

  return (
    <div
      id={id}
      ref={ref}
      style={{ flexWrap: isWrap ? 'wrap' : 'nowrap', gap, ...style }}
      className={classNames(cls['flex-box'], classes)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

FlexBox.displayName = 'FlexBox';
