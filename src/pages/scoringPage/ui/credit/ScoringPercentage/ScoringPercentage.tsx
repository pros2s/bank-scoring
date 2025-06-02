import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ScoringPercentageType } from '@/shared/lib/types/scoring';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { getScoringPercentage } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import selCls from '../../ScoringSelect.module.scss';

import cls from './ScoringPercentage.module.scss';

const defaultPercentages: ScoringPercentageType[] = ['5', '7.5', '10', '12.5', '15', '17.5', '20', '22.5', '25'];
const { setPercentage } = ScoringActions;

export const ScoringPercentage = () => {
  const { t } = useTranslation();

  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const percentage = useSelector(getScoringPercentage) ?? '';

  const handleChange = (value: ScoringPercentageType) => () => {
    dispatch(setPercentage(value));
    setIsShow(false);
  };

  return (
    <FlexBox className={selCls.container} direction='column' gap={5}>
      <Label label={`${t('percentage')} %`} />

      <Button className={selCls.trigger} onClick={handleShow} theme={ButtonThemes.CLEAR} tabIndex={0}>
        {percentage}

        <BsCaretDownFill className={classNames(selCls.arrow, [], { [selCls.rotate]: isShow })} />
      </Button>

      <div className={classNames(selCls.list, [], { [selCls.shown]: isShow, [cls.shown]: isShow })}>
        {defaultPercentages?.map((status) => (
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

ScoringPercentage.displayName = 'ScoringPercentage';
