import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringEmploymentYears } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import scCls from '../../ScoringPage.module.scss';

const { setEmploymentYears, setEmploymentYearsError } = ScoringActions;

export const ScoringEmploymentYears = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const employmentYears = useSelector(getScoringEmploymentYears);

  const handleChange = (val: string) => {
    dispatch(setEmploymentYears(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 0;

    if (!isNumber || isLess) {
      dispatch(setEmploymentYearsError('employmentError'));
      return;
    }

    dispatch(setEmploymentYearsError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('employmentYears')} (${t('years')})`} />

      <div className='input'>
        <Input
          placeholder={t('employmentYears')}
          value={employmentYears}
          onChange={handleChange}
          type='number'
          min={0}
        />
      </div>
    </FlexBox>
  );
};

ScoringEmploymentYears.displayName = 'ScoringEmploymentYears';
