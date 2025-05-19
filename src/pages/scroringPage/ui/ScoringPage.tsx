import { memo } from 'react';

import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { useGetScoringErrorMessage } from '../hooks/useGetScoringErrorMessage';
import { ScoringReducer } from '../model/slice/ScoringSlice';

import { ScoringAge } from './ScoringAge/ScoringAge';
import { ScoringIncome } from './ScoringIncome/ScoringIncome';
import { ScoringMaritalStatus } from './ScoringMaritalStatus/ScoringMaritalStatus';

const reducers: ReducersList = {
  scoring: ScoringReducer,
};

const ScoringPage = memo(() => {
  const errorMessage = useGetScoringErrorMessage();

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <section className='content'>
        <FlexBox align='center' gap={20}>
          <ScoringAge />
          <ScoringIncome />
          <ScoringMaritalStatus />
        </FlexBox>


        <Label info={errorMessage} isError={!!errorMessage} />
      </section>
    </DynamicReducerLoader>
  );
});

export default ScoringPage;
