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
import { ScoringEducation } from './ScoringEducation/ScoringEducation';
import { ScoringExistingDebt } from './ScoringExistingDebt/ScoringExistingDebt';
import { ScoringHasCreditHistory } from './ScoringHasCreditHistory/ScoringHasCreditHistory';
import { ScoringIncome } from './ScoringIncome/ScoringIncome';
import { ScoringMaritalStatus } from './ScoringMaritalStatus/ScoringMaritalStatus';
import cls from './ScoringPage.module.scss';
import { ScoringSavings } from './ScoringSavings/ScoringSavings';

const reducers: ReducersList = {
  scoring: ScoringReducer,
};

const ScoringPage = memo(() => {
  const errorMessage = useGetScoringErrorMessage();

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <section className={classNames(cls.content, ['content'])}>
        <FlexBox align='center' gap={50} isWrap>
          <ScoringAge />
          <ScoringIncome />
          <ScoringMaritalStatus />
        </FlexBox>

        <FlexBox align='center' gap={50} isWrap>
          <ScoringExistingDebt />
          <ScoringEducation />
          <ScoringSavings />
        </FlexBox>

        <FlexBox align='center' gap={50} isWrap>
          <ScoringAssets />
          <ScoringHasCreditHistory />
        </FlexBox>

        <Label info={errorMessage} isError={!!errorMessage} />
      </section>
    </DynamicReducerLoader>
  );
});

export default ScoringPage;
