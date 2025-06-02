import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringCreditAmount } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import scCls from '../../ScoringPage.module.scss';

const { setCreditAmount, setCreditAmountError } = ScoringActions;

export const ScoringCredit = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const credit = useSelector(getScoringCreditAmount);

  const handleChange = (val: string) => {
    dispatch(setCreditAmount(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 10_000;
    const isMore = numValue > 10_000_000;

    if (!isNumber || isLess || isMore) {
      dispatch(setCreditAmountError('creditError'));
      return;
    }

    dispatch(setCreditAmountError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('credit')}, ₽`} />

      <div className='input'>
        <Input placeholder={t('credit')} value={credit} onChange={handleChange} type='number' min={0} step={10000} />
      </div>
    </FlexBox>
  );
};

ScoringCredit.displayName = 'ScoringCredit';
