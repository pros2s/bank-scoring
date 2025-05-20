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
import { ScoringEducation } from './ScoringEducation/ScoringEducation';
import { ScoringExistingDebt } from './ScoringExistingDebt/ScoringExistingDebt';
import { ScoringHasCreditHistory } from './ScoringHasCreditHistory/ScoringHasCreditHistory';
import { ScoringIncome } from './ScoringIncome/ScoringIncome';
import { ScoringMaritalStatus } from './ScoringMaritalStatus/ScoringMaritalStatus';
import cls from './ScoringPage.module.scss';

const reducers: ReducersList = {
  scoring: ScoringReducer,
};

const ScoringPage = memo(() => {
  const errorMessage = useGetScoringErrorMessage();

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <section className={classNames(cls.content, ['content'])}>
        <FlexBox align='center' gap={50}>
          <ScoringAge />
          <ScoringIncome />
          <ScoringMaritalStatus />
        </FlexBox>

        <FlexBox align='center' gap={50}>
          <ScoringExistingDebt />
          <ScoringEducation />
        </FlexBox>

        <ScoringHasCreditHistory />

        <Label info={errorMessage} isError={!!errorMessage} />
      </section>
    </DynamicReducerLoader>
  );
});

export default ScoringPage;
