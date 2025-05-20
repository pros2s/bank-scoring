import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { useGetScoringErrorMessage } from '../hooks/useGetScoringErrorMessage';
import { ScoringReducer } from '../model/slice/ScoringSlice';

import { ScoringAge } from './ScoringAge/ScoringAge';
import { ScoringAssets } from './ScoringAssets/ScoringAssets';
import { ScoringChildrenCount } from './ScoringChildrenCount/ScoringChildrenCount';
import { ScoringEducation } from './ScoringEducation/ScoringEducation';
import { ScoringEmploymentYears } from './ScoringEmploymentYears/ScoringEmploymentYears';
import { ScoringExistingDebt } from './ScoringExistingDebt/ScoringExistingDebt';
import { ScoringHasCreditHistory } from './ScoringHasCreditHistory/ScoringHasCreditHistory';
import { ScoringHasCriminalRecord } from './ScoringHasCriminalRecord/ScoringHasCriminalRecord';
import { ScoringIncome } from './ScoringIncome/ScoringIncome';
import { ScoringMaritalStatus } from './ScoringMaritalStatus/ScoringMaritalStatus';
import { ScoringName } from './ScoringName/ScoringName';
import cls from './ScoringPage.module.scss';
import { ScoringSavings } from './ScoringSavings/ScoringSavings';
import { ScoringSurname } from './ScoringSurname/ScoringSurname';

const reducers: ReducersList = {
  scoring: ScoringReducer,
};

const ScoringPage = memo(() => {
  const errorMessage = useGetScoringErrorMessage();

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <section className={classNames(cls.content, ['content'])}>
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

        <Label info={errorMessage} isError={!!errorMessage} />
      </section>
    </DynamicReducerLoader>
  );
});

export default ScoringPage;
