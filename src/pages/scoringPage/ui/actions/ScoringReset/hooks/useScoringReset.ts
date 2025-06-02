import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { ScoringActions } from '../../../../model/slice/ScoringSlice';

const {
  setChildrenCount,
  setAge,
  setName,
  setSurname,
  setIncome,
  setEmploymentYears,
  setSavings,
  setMaritalStatus,
  setExistingDebt,
  setHasCreditHistory,
  setHasCriminalRecord,
  removeAsset,
  setEducation,
} = ScoringActions;

export const useScoringReset = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(setAge(''));
    dispatch(setName(''));
    dispatch(setSurname(''));
    dispatch(setIncome(''));
    dispatch(setEmploymentYears(''));
    dispatch(setSavings(''));
    dispatch(setMaritalStatus('single'));
    dispatch(setChildrenCount(''));
    dispatch(setExistingDebt(''));
    dispatch(removeAsset('apartment'));
    dispatch(removeAsset('car'));
    dispatch(removeAsset('house'));
    dispatch(setEducation('none'));
    dispatch(setHasCreditHistory(false));
    dispatch(setHasCriminalRecord(false));
  };
};
