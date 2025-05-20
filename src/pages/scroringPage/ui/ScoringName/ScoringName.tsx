import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { getScoringName } from '../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../model/slice/ScoringSlice';
import scCls from '../ScoringPage.module.scss';

const { setName } = ScoringActions;

export const ScoringName = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const name = useSelector(getScoringName);

  const handleChange = (val: string) => {
    dispatch(setName(val));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={t('name')} />

      <div className='input'>
        <Input placeholder={t('name')} value={name} onChange={handleChange} type='number' min={0} />
      </div>
    </FlexBox>
  );
};

ScoringName.displayName = 'ScoringName';
