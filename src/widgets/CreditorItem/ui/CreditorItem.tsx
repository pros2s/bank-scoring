import { useTranslation } from 'react-i18next';
import { MdDelete } from 'react-icons/md';

import { CreditStatus } from '@/entities/creditSatus';
import { Gauge } from '@/entities/gauge';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AssetType, EducationLevelType, MaritalStatusType, ScoreStatusType } from '@/shared/lib/types/scoring';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { FlexBox } from '@/shared/ui/FlexBox';

import { useGetDate } from '../hooks/useGetDate';

import cls from './CreditorItem.module.scss';

export interface CreditorType {
  id: string;
  name: string;
  age: string;
  income: string;
  maritalStatus: MaritalStatusType;
  existingDebt: string;
  hasCreditHistory: false;
  hasCriminalRecord: false;
  education: EducationLevelType;
  applicationDate: number;
  employmentYears: string;
  savings: string;
  assets: AssetType[];
  childrenCount: string;
  score: number;
  status: ScoreStatusType;
}

interface CreditorItemProps {
  creditor: CreditorType;
  className?: string;
}

export const CreditorItem = ({ creditor, className }: CreditorItemProps) => {
  const { t } = useTranslation();

  const getDate = useGetDate();

  const {
    age,
    name,
    income,
    applicationDate,
    assets,
    childrenCount,
    education,
    employmentYears,
    existingDebt,
    hasCreditHistory,
    hasCriminalRecord,
    maritalStatus,
    savings,
    score,
    status,
  } = creditor;

  return (
    <FlexBox className={classNames(cls.item, [className])} direction='column' gap={20}>
      <FlexBox className='w-100' align='center' justify='between' gap={20}>
        <FlexBox align='center' gap={15}>
          <h3>{name}</h3>
          <p className={cls.label}>{getDate(applicationDate)}</p>
        </FlexBox>

        <Button theme={ButtonThemes.CLEAR}>
          <MdDelete className='size-20' />
        </Button>
      </FlexBox>

      <FlexBox className='w-100' align='center' justify='between' gap={20}>
        <FlexBox gap={30}>
          <FlexBox direction='column' gap={10}>
            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('age')}:</p>
              <p className={cls.info}>{age}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('income')}:</p>
              <p className={cls.info}>{income ? `${income}₽` : t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('maritalStatus')}:</p>
              <p className={cls.info}>{t(maritalStatus) || t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('debt')}:</p>
              <p className={cls.info}>{existingDebt ? `${existingDebt}₽` : t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('creditHistory')}:</p>
              <p className={cls.info}>{hasCreditHistory ? t('yes') : t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('criminalRecord')}:</p>
              <p className={cls.info}>{hasCriminalRecord ? t('yes') : t('none')}</p>
            </FlexBox>
          </FlexBox>

          <span className={cls.sep} />

          <FlexBox direction='column' gap={10}>
            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('education')}:</p>
              <p className={cls.info}>{t(education) || t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('employmentYears')}:</p>
              <p className={cls.info}>{employmentYears || t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('savings')}:</p>
              <p className={cls.info}>{savings ? `${savings}₽` : t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('scoringAssets')}:</p>
              <p className={cls.info}>{assets.length ? assets.map((asset) => t(asset)).join(', ') : t('none')}</p>
            </FlexBox>

            <FlexBox align='center' gap={5}>
              <p className={cls.label}>{t('children')}:</p>
              <p className={cls.info}>{childrenCount || t('none')}</p>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox className={cls.stats} direction='column' align='center'>
          <Gauge className={cls.gauge} score={score} tickFontSize={10} />

          <CreditStatus status={status} />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

CreditorItem.displayName = 'CreditorItem';
