import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CheckBox } from '@/shared/ui/CheckBox';

import { getScoringHasCriminalRecord } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';

const { setHasCriminalRecord } = ScoringActions;

export const ScoringHasCriminalRecord = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const hasCriminalRecord = useSelector(getScoringHasCriminalRecord);

  const handleChange = () => {
    dispatch(setHasCriminalRecord(!hasCriminalRecord));
  };

  return (
    <CheckBox
      id='has-criminal-record'
      text={t('criminalRecord')}
      isChecked={hasCriminalRecord}
      onCheckBoxChange={handleChange}
      size='24'
    />
  );
};

ScoringHasCriminalRecord.displayName = 'ScoringHasCriminalRecord';
