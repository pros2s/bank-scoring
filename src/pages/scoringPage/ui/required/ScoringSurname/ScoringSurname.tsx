import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';

import { nameRegex } from '../../../consts/regex';
import { getScoringSurname } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import scCls from '../../ScoringPage.module.scss';

const { setSurname, setSurnameError } = ScoringActions;

export const ScoringSurname = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const surname = useSelector(getScoringSurname);

  const handleChange = (val: string) => {
    dispatch(setSurname(val));

    if (!!val && !nameRegex.test(val)) {
      dispatch(setSurnameError('surNameError'));
      return;
    }

    dispatch(setSurnameError(''));
  };

  return (
    <FlexBox className={scCls.container} direction='column' gap={5}>
      <Label label={`${t('surname')} *`} />

      <div className='input'>
        <Input placeholder={t('surname')} value={surname} onChange={handleChange} />
      </div>
    </FlexBox>
  );
};

ScoringSurname.displaySurname = 'ScoringSurname';
