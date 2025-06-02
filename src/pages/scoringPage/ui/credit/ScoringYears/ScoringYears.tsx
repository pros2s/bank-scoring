import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ScoringYearsType } from '@/shared/lib/types/scoring';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { getScoringYears } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import selCls from '../../ScoringSelect.module.scss';

import cls from './ScoringYears.module.scss';

const defaultYears: ScoringYearsType[] = ['5', '10', '15', '20', '25', '30'];
const { setYears } = ScoringActions;

export const ScoringYears = () => {
  const { t } = useTranslation();

  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const years = useSelector(getScoringYears) ?? '';

  const handleChange = (value: ScoringYearsType) => () => {
    dispatch(setYears(value));
    setIsShow(false);
  };

  return (
    <FlexBox className={selCls.container} direction='column' gap={5}>
      <Label label={`${t('creditYears')} (${t('years')})`} />

      <Button className={selCls.trigger} onClick={handleShow} theme={ButtonThemes.CLEAR} tabIndex={0}>
        {years}

        <BsCaretDownFill className={classNames(selCls.arrow, [], { [selCls.rotate]: isShow })} />
      </Button>

      <div className={classNames(selCls.list, [], { [selCls.shown]: isShow, [cls.shown]: isShow })}>
        {defaultYears?.map((status) => (
          <Button
            key={status}
            className={selCls.item}
            onClick={handleChange(status)}
            theme={ButtonThemes.CLEAR}
            tabIndex={0}
          >
            {t(status)}
          </Button>
        ))}
      </div>
    </FlexBox>
  );
};

ScoringYears.displayName = 'ScoringYears';
