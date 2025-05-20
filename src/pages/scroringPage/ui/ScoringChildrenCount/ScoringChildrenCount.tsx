import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringChildrenCount } from '../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../model/slice/ScoringSlice';
import scCls from '../ScoringPage.module.scss';

const { setChildrenCount, setChildrenCountError } = ScoringActions;

export const ScoringChildrenCount = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const childrenCount = useSelector(getScoringChildrenCount);

  const handleChange = (val: string) => {
    dispatch(setChildrenCount(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 0;
    const isMore = numValue > 20;

    if (!isNumber || isLess || isMore) {
      dispatch(setChildrenCountError('childrenError'));
      return;
    }

    dispatch(setChildrenCountError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={t('children')} />

      <div className='input'>
        <Input
          placeholder={t('children')}
          value={childrenCount}
          onChange={handleChange}
          type='number'
          min={0}
          max={20}
        />
      </div>
    </FlexBox>
  );
};

ScoringChildrenCount.displayName = 'ScoringChildrenCount';
