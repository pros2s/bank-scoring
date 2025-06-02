import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringIncome } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import scCls from '../../ScoringPage.module.scss';

const { setIncome, setIncomeError } = ScoringActions;

export const ScoringIncome = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const income = useSelector(getScoringIncome);

  const handleChange = (val: string) => {
    dispatch(setIncome(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 0;

    if (!isNumber || isLess) {
      dispatch(setIncomeError('incomeError'));
      return;
    }

    dispatch(setIncomeError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('income')}, ₽`} />

      <div className='input'>
        <Input
          placeholder={t('income')}
          value={income}
          onChange={handleChange}
          type='number'
          min={0}
          step={10000}
        />
      </div>
    </FlexBox>
  );
};

ScoringIncome.displayName = 'ScoringIncome';
