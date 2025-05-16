import { memo, useCallback, useState, useEffect } from 'react';

import { AiOutlineArrowUp } from 'react-icons/ai';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { RecentRates } from '@/widgets/RecentRates';

import cls from './RatesPage.module.scss';

const RatesPage = memo(() => {
  const [isScrollButton, setIsScrollButton] = useState<boolean>(false);
  const [isClickedScroll, setIsClickedScroll] = useState<boolean>(false);

  useEffect(() => {
    const setScroll = () => {
      if (window.scrollY > 500 && !isClickedScroll) {
        setIsScrollButton(true);
      } else if (window.scrollY <= 500) {
        setIsClickedScroll(false);
        setIsScrollButton(false);
      } else {
        setIsScrollButton(false);
      }
    };
    window.addEventListener('scroll', setScroll);
    return () => window.removeEventListener('scroll', setScroll);
  }, [isClickedScroll]);

  const scrollUp = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setIsClickedScroll(true);
  }, []);

  return (
    <div className={cls.RatesPage}>
      <RecentRates />
      <Button
        className={classNames(cls['scroll-up'], [], {
          [cls['scroll-visible']]: isScrollButton,
        })}
        theme={ButtonThemes.CLEAR}
        onClick={scrollUp}
      >
        <AiOutlineArrowUp />
      </Button>
    </div>
  );
});

export default RatesPage;
