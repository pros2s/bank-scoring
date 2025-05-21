import { useTranslation } from 'react-i18next';
import { MdDelete } from 'react-icons/md';

import { CreditStatus } from '@/entities/creditStatus';
import { Gauge } from '@/entities/gauge';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AssetType, EducationLevelType, MaritalStatusType, ScoreStatusType } from '@/shared/lib/types/scoring';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { FlexBox } from '@/shared/ui/FlexBox';

import { getCreditorCredit } from '../helpers/getCreditorCredit';
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
  creditScore: string;
  percentage: string;
  years: string;
}

interface CreditorItemProps {
  creditor: CreditorType;
  onDelete?: () => void;
  className?: string;
}

export const CreditorItem = ({ creditor, className, onDelete }: CreditorItemProps) => {
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
    creditScore,
    percentage,
    years,
  } = creditor;

  return (
    <FlexBox className={classNames(cls.item, [className])} direction='column' gap={10}>
      <FlexBox className='w-100' align='center' justify='between' gap={20}>
        <FlexBox align='center' gap={15}>
          <h3>{name}</h3>
          <p className={cls.label}>{getDate(applicationDate)}</p>
        </FlexBox>

        <Button theme={ButtonThemes.CLEAR} onClick={onDelete}>
          <MdDelete className='size-20' />
        </Button>
      </FlexBox>

      <FlexBox className={cls.credit} align='center' gap={10}>
        <FlexBox align='center' gap={5}>
          <p className={cls.label}>{t('credit')}:</p>
          <p className={cls.info}>{`${getCreditorCredit(creditScore)}₽`}</p>
        </FlexBox>

        <span className={cls.dot} />

        <FlexBox align='center' gap={5}>
          <p className={cls.label}>{t('percentage')}:</p>
          <p className={cls.info}>{`${percentage}%`}</p>
        </FlexBox>

        <span className={cls.dot} />

        <FlexBox align='center' gap={5}>
          <p className={cls.label}>{t('creditYears')}:</p>
          <p className={cls.info}>{years}</p>
        </FlexBox>
      </FlexBox>

      <FlexBox className='w-100' align='center' justify='between' gap={20} isWrap>
        <FlexBox gap={30} isWrap>
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
