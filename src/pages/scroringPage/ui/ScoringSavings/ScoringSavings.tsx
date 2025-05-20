import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringSavings } from '../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../model/slice/ScoringSlice';
import scCls from '../ScoringPage.module.scss';

const { setSavings, setSavingsError } = ScoringActions;

export const ScoringSavings = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const Savings = useSelector(getScoringSavings);

  const handleChange = (val: string) => {
    dispatch(setSavings(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 0;

    if (!isNumber || isLess) {
      dispatch(setSavingsError('savingsError'));
      return;
    }

    dispatch(setSavingsError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('yourSavings')}, ₽`} />

      <div className='input'>
        <Input
          placeholder={t('savings')}
          value={Savings}
          onChange={handleChange}
          type='number'
          min={0}
        />
      </div>
    </FlexBox>
  );
};

ScoringSavings.displayName = 'ScoringSavings';
