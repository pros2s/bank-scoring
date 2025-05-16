import { useState, useEffect } from 'react';

export const useSmallWidth = () => {
  const [isSmall, setIsSmall] = useState<boolean>(true);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 331) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [isSmall]);

  return isSmall;
};
