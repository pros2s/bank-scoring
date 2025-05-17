import { memo } from 'react';

import { useSelector } from 'react-redux';

import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Input } from '@/shared/ui/Input/Input';

import { getScoringAge } from '../model/selectors/scoringSelectors';
import { ScoringActions, ScoringReducer } from '../model/slice/ScoringSlice';

const { setAge } = ScoringActions;

const reducers: ReducersList = {
  scoring: ScoringReducer,
};

const ScoringPage = memo(() => {
  const dispatch = useAppDispatch();
  const age = useSelector(getScoringAge);

  const handleChange = (val: string) => {
    dispatch(setAge(val));
  };

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <section className='content'>
        <div className='input'>
          <Input
            placeholder='age'
            value={age}
            onChange={handleChange}
            type='number'
            min={0}
            max={100}
          />
        </div>
      </section>
    </DynamicReducerLoader>
  );
});

export default ScoringPage;
