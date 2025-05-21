import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { __BASE_FAKE_API__ } from '@/shared/api/api';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { useGetScoringErrorMessage } from '../../../../hooks/useGetScoringErrorMessage';
import {
  getScoringAge,
  getScoringAssets,
  getScoringChildrenCount,
  getScoringCreditAmount,
  getScoringEducation,
  getScoringEmploymentYears,
  getScoringExistingDebt,
  getScoringHasCreditHistory,
  getScoringHasCriminalRecord,
  getScoringIncome,
  getScoringMaritalStatus,
  getScoringName,
  getScoringPercentage,
  getScoringRequestLoading,
  getScoringSavings,
  getScoringScore,
  getScoringSurname,
  getScoringYears,
} from '../../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../../model/slice/ScoringSlice';
import { useScoringReset } from '../../ScoringReset/hooks/useScoringReset';
import { getScoreStatus } from '../helpers/getScoreStatus';

const { setRequestError, setRequestLoading } = ScoringActions;

export const useScoringSend = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const nameS = useSelector(getScoringName);
  const surNameS = useSelector(getScoringSurname);
  const ageS = useSelector(getScoringAge);
  const incomeS = useSelector(getScoringIncome);
  const existingDebtS = useSelector(getScoringExistingDebt);
  const employmentYearsS = useSelector(getScoringEmploymentYears);
  const savingsS = useSelector(getScoringSavings);
  const assets = useSelector(getScoringAssets);
  const childrenCountS = useSelector(getScoringChildrenCount);
  const education = useSelector(getScoringEducation);
  const hasCreditHistory = useSelector(getScoringHasCreditHistory);
  const hasCriminalRecord = useSelector(getScoringHasCriminalRecord);
  const maritalStatus = useSelector(getScoringMaritalStatus);

  const creditScore = useSelector(getScoringCreditAmount);
  const percentage = useSelector(getScoringPercentage);
  const years = useSelector(getScoringYears);

  const score = useSelector(getScoringScore) ?? 300;

  const handleReset = useScoringReset();

  const handleSend = () => {
    dispatch(setRequestLoading(true));

    fetch(`${__BASE_FAKE_API__}/creditors`, {
      method: 'POST',
      body: JSON.stringify({
        id: v4(),
        name: `${nameS} ${surNameS}`,
        age: ageS,
        income: incomeS,
        maritalStatus,
        existingDebt: existingDebtS,
        hasCreditHistory,
        hasCriminalRecord,
        education,
        applicationDate: new Date().getTime(),
        employmentYears: employmentYearsS,
        savings: savingsS,
        assets,
        childrenCount: childrenCountS,
        score,
        creditScore,
        percentage,
        years,
        status: getScoreStatus(score),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status >= 500) throw new Error(t('serverError'));
          if (response.status >= 400) throw new Error(t('clientError'));
        }
        return response.json();
      })
      .then(() => handleReset())
      .catch((error) => {
        dispatch(setRequestError(error.message));
      })
      .finally(() => dispatch(setRequestLoading(false)));
  };

  const errorMessage = useGetScoringErrorMessage();

  const isDisabled = !nameS || !surNameS || !ageS || !!errorMessage;
  const isLoading = useSelector(getScoringRequestLoading);

  return {
    handleSend,
    isDisabled,
    isLoading,
  };
};
