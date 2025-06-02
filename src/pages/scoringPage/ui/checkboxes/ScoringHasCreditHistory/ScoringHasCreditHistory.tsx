import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CheckBox } from '@/shared/ui/CheckBox';

import { getScoringHasCreditHistory } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';

import cls from './ScoringHasCreditHistory.module.scss';

const { setHasCreditHistory } = ScoringActions;

export const ScoringHasCreditHistory = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const hasCreditHistory = useSelector(getScoringHasCreditHistory);

  const handleChange = () => {
    dispatch(setHasCreditHistory(!hasCreditHistory));
  };

  return (
    <CheckBox
      id='has-credit-history'
      className={cls.credit}
      text={t('creditHistory')}
      isChecked={hasCreditHistory}
      onCheckBoxChange={handleChange}
      size='24'
    />
  );
};

ScoringHasCreditHistory.displayName = 'ScoringHasCreditHistory';
