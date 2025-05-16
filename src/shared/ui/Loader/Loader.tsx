import { memo } from 'react';

import './Loader.scss';

interface LoaderProps {
  size?: string;
  borderWidth?: string;
}

export const Loader = memo(({ size, borderWidth }: LoaderProps) => (
  <div style={{ height: size, width: size, borderWidth }} className='lds-ring'>
    <div style={{ height: size, width: size, borderWidth }} />
    <div style={{ height: size, width: size, borderWidth }} />
    <div style={{ height: size, width: size, borderWidth }} />
    <div style={{ height: size, width: size, borderWidth }} />
  </div>
));
