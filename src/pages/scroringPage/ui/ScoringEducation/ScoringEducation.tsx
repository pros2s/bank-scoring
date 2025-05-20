import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { getScoringEducation } from '../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../model/slice/ScoringSlice';
import { EducationLevelType } from '../../model/types/ScoringSchema';
import selCls from '../ScoringSelect.module.scss';

import cls from './ScoringEducation.module.scss';

const defaultStatuses: EducationLevelType[] = [
  'secondary',
  'bachelor',
  'higher',
  'master',
  'phd',
  'none',
];
const { setEducation } = ScoringActions;

export const ScoringEducation = () => {
  const { t } = useTranslation();

  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const education = useSelector(getScoringEducation) ?? '';

  const handleChange = (value: EducationLevelType) => () => {
    dispatch(setEducation(value));
    setIsShow(false);
  };

  return (
    <FlexBox className={selCls.container} direction='column' gap={5}>
      <Label label={`${t('education')}`} />

      <Button
        className={selCls.trigger}
        onClick={handleShow}
        theme={ButtonThemes.CLEAR}
        tabIndex={0}
      >
        {t(education)}

        <BsCaretDownFill className={classNames(selCls.arrow, [], { [selCls.rotate]: isShow })} />
      </Button>

      <div className={classNames(selCls.list, [], { [selCls.shown]: isShow, [cls.shown]: isShow })}>
        {defaultStatuses?.map((status) => (
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

ScoringEducation.displayName = 'ScoringEducation';
