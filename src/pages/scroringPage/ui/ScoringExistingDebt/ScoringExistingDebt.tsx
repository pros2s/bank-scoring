import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringExistingDebt } from '../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../model/slice/ScoringSlice';
import scCls from '../ScoringPage.module.scss';

const { setExistingDebt, setExistingDebtError } = ScoringActions;

export const ScoringExistingDebt = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const existingDebt = useSelector(getScoringExistingDebt);

  const handleChange = (val: string) => {
    dispatch(setExistingDebt(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 0;

    if (!isNumber || isLess) {
      dispatch(setExistingDebtError('existingDebtError'));
      return;
    }

    dispatch(setExistingDebtError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('debt')}, ₽`} />

      <div className='input'>
        <Input
          placeholder={t('debt')}
          value={existingDebt}
          onChange={handleChange}
          type='number'
          min={0}
          step={10000}
        />
      </div>
    </FlexBox>
  );
};

ScoringExistingDebt.displayName = 'ScoringExistingDebt';
