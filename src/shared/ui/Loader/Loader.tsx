import { memo } from 'react';

import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  size?: string;
  borderWidth?: string;
  className?: string;
}

export const Loader = memo(({ size, borderWidth, className }: LoaderProps) => (
  <div
    style={{ height: size, width: size, borderWidth }}
    className={classNames('lds-ring', [className])}
  >
    <div style={{ height: size, width: size, borderWidth }} />
    <div style={{ height: size, width: size, borderWidth }} />
    <div style={{ height: size, width: size, borderWidth }} />
    <div style={{ height: size, width: size, borderWidth }} />
  </div>
));
