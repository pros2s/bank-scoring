import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { nameRegex } from '../../../consts/regex';
import { getScoringName } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import scCls from '../../ScoringPage.module.scss';

const { setName, setNameError } = ScoringActions;

export const ScoringName = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const name = useSelector(getScoringName);

  const handleChange = (val: string) => {
    dispatch(setName(val));

    if (!!val && !nameRegex.test(val)) {
      dispatch(setNameError('nameError'));
      return;
    }

    dispatch(setNameError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('name')} *`} />

      <div className='input'>
        <Input placeholder={t('name')} value={name} onChange={handleChange} />
      </div>
    </FlexBox>
  );
};

ScoringName.displayName = 'ScoringName';
