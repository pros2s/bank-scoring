import { useTranslation } from 'react-i18next';

import { Button, ButtonThemes } from '@/shared/ui/Button/Button';

import cls from '../ScoringActions.module.scss';

import { useScoringReset } from './hooks/useScoringReset';

export const ScoringReset = () => {
  const { t } = useTranslation();

  const handleReset = useScoringReset();

  return (
    <Button className={cls.button} theme={ButtonThemes.OUTLINE} onClick={handleReset}>
      {t('resetData')}
    </Button>
  );
};

ScoringReset.displayName = 'ScoringReset';
