import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { Label } from '@/shared/ui/Label';
import { Loader } from '@/shared/ui/Loader/Loader';

import { getScoringRequestError } from '../../../model/selectors/scoringSelectors';
import cls from '../ScoringActions.module.scss';

import { useScoringSend } from './hooks/useScoringSend';

export const ScoringSend = () => {
  const { t } = useTranslation();

  const requestError = useSelector(getScoringRequestError) ?? '';

  const { handleSend, isDisabled, isLoading } = useScoringSend();

  return (
    <Button
      className={cls.button}
      theme={ButtonThemes.OUTLINE}
      onClick={handleSend}
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      <Label className={cls.label} info={requestError} isError={!!requestError} />

      {t('sendData')}

      {isLoading && <Loader className={cls.loader} size='20px' borderWidth='4px' />}
    </Button>
  );
};

ScoringSend.displayName = 'ScoringSend';
