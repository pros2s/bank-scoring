import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useSmallWidth } from '@/shared/lib/hooks/useSmallWidth';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const isSmall = useSmallWidth();

  const onToggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={classNames('', [className])} onClick={onToggle} theme={ButtonThemes.CLEAR}>
      {isSmall ? t('smallLanguage') : t('Language')}
    </Button>
  );
});
