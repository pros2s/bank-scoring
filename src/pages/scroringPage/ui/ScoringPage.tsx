import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { useGetScoringErrorMessage } from '../hooks/useGetScoringErrorMessage';
import { ScoringReducer } from '../model/slice/ScoringSlice';

import cls from './ScoringPage.module.scss';
import { ScoringGauge } from './actions/ScoringGauge/ScoringGauge';
import { ScoringReset } from './actions/ScoringReset/ScoringReset';
import { ScoringSend } from './actions/ScoringSend/ScoringSend';
import { ScoringAssets } from './checkboxes/ScoringAssets/ScoringAssets';
import { ScoringEducation } from './checkboxes/ScoringEducation/ScoringEducation';
import { ScoringHasCreditHistory } from './checkboxes/ScoringHasCreditHistory/ScoringHasCreditHistory';
import { ScoringHasCriminalRecord } from './checkboxes/ScoringHasCriminalRecord/ScoringHasCriminalRecord';
import { ScoringEmploymentYears } from './money/ScoringEmploymentYears/ScoringEmploymentYears';
import { ScoringIncome } from './money/ScoringIncome/ScoringIncome';
import { ScoringSavings } from './money/ScoringSavings/ScoringSavings';
import { ScoringChildrenCount } from './personal/ScoringChildrenCount/ScoringChildrenCount';
import { ScoringExistingDebt } from './personal/ScoringExistingDebt/ScoringExistingDebt';
import { ScoringMaritalStatus } from './personal/ScoringMaritalStatus/ScoringMaritalStatus';
import { ScoringAge } from './required/ScoringAge/ScoringAge';
import { ScoringName } from './required/ScoringName/ScoringName';
import { ScoringSurname } from './required/ScoringSurname/ScoringSurname';

const reducers: ReducersList = {
  scoring: ScoringReducer,
};

const ScoringPage = memo(() => {
  const { t } = useTranslation();

  const errorMessage = useGetScoringErrorMessage();

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <section className={classNames(cls.content, ['content'])}>
        <FlexBox className={cls.header} align='center' direction='column' gap={10}>
          <h1>{t('bankScoring')}</h1>

          <p>{t('fillData')}</p>
        </FlexBox>

        <FlexBox gap={50} isWrap>
          <ScoringName />
          <ScoringSurname />
          <ScoringAge />
        </FlexBox>

        <FlexBox gap={50} isWrap>
          <ScoringIncome />
          <ScoringEmploymentYears />
          <ScoringSavings />
        </FlexBox>

        <FlexBox gap={50} isWrap>
          <ScoringMaritalStatus />
          <ScoringChildrenCount />
          <ScoringExistingDebt />
        </FlexBox>

        <FlexBox gap={50} isWrap>
          <ScoringAssets />
          <ScoringEducation />

          <FlexBox direction='column' gap={10}>
            <ScoringHasCreditHistory />
            <ScoringHasCriminalRecord />
          </FlexBox>
        </FlexBox>

        <Label className={cls.label} info={errorMessage} isError={!!errorMessage} />

        <FlexBox className={cls.actions} justify='between' gap={50} isWrap>
          <ScoringReset />
          <ScoringGauge />
          <ScoringSend />
        </FlexBox>
      </section>
    </DynamicReducerLoader>
  );
});

export default ScoringPage;
