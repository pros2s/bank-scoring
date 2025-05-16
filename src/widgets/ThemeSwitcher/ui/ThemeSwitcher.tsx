import { memo } from 'react';

import { MdLightMode, MdNightlight } from 'react-icons/md';

import { Themes, useThemes } from '@/app/providers/ThemesProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useThemes();

  return (
    <Button
      className={classNames(cls.Switcher, [className])}
      theme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Themes.DARK ? <MdLightMode /> : <MdNightlight />}
    </Button>
  );
});
