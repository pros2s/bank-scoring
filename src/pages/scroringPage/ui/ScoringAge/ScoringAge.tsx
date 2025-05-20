import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringAge } from '../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../model/slice/ScoringSlice';

import cls from './ScoringAge.module.scss';

const { setAge, setAgeError } = ScoringActions;

export const ScoringAge = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const age = useSelector(getScoringAge);

  const handleChange = (val: string) => {
    dispatch(setAge(val));

    const numValue = Number(val);
    const isNumber = !Number.isNaN(numValue);
    const isLess = numValue < 0;
    const isMore = numValue > 100;

    if (!isNumber || isLess || isMore) {
      dispatch(setAgeError('ageError'));
      return;
    }

    dispatch(setAgeError(''));
  };
  return (
    <FlexBox direction='column' gap={5}>
      <Label label={t('age')} />
      <div className={classNames(cls.input, ['input'])}>
        <Input
          placeholder={t('age')}
          value={age}
          onChange={handleChange}
          type='number'
          min={0}
          max={100}
        />
      </div>
    </FlexBox>
  );
};

ScoringAge.displayName = 'ScoringAge';
