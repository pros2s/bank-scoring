import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import {
  getScoringAge,
  getScoringAssets,
  getScoringChildrenCount,
  getScoringEducation,
  getScoringEmploymentYears,
  getScoringExistingDebt,
  getScoringHasCreditHistory,
  getScoringHasCriminalRecord,
  getScoringIncome,
  getScoringMaritalStatus,
  getScoringSavings,
} from '../../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../../model/slice/ScoringSlice';

const { setScore } = ScoringActions;

export const useScore = () => {
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    let score = 460;

    // age
    const age = Number(ageS);
    if (age >= 25 && age <= 35) score += 40;
    else if (age > 35 && age <= 50) score += 60;
    else if (age > 50 && age <= 60) score += 30;
    else score -= 20;

    // income
    const income = Number(incomeS);
    if (income >= 100000) score += 100;
    else if (income >= 60000) score += 70;
    else if (income >= 30000) score += 40;
    else score -= 10;

    // marital
    if (maritalStatus === 'married') score += 20;
    else if (maritalStatus === 'single') score += 10;
    else score += 0;

    // debt
    const existingDebt = Number(existingDebtS);
    const debtRatio = existingDebt / income;
    if (debtRatio > 0.5) score -= 50;
    else if (debtRatio > 0.3) score -= 30;
    else if (debtRatio <= 0.1) score += 30;
    else score += 10;

    // credit history
    if (hasCreditHistory) score += 50;
    else score -= 20;

    // education
    switch (education) {
      case 'bachelor':
        score += 10;
        break;
      case 'higher':
        score += 20;
        break;
      case 'secondary':
        score += 20;
        break;
      case 'master':
        score += 30;
        break;
      case 'phd':
        score += 30;
        break;
      case 'none':
        score -= 10;
        break;
      default:
        break;
    }

    // criminalRecord
    if (hasCriminalRecord) score -= 80;

    // employmentYears
    const employmentYears = Number(employmentYearsS);
    if (employmentYears >= 5) score += 40;
    else if (employmentYears >= 2) score += 20;
    else if (employmentYears >= 1) score += 10;
    else score -= 20;

    // savings
    const savings = Number(savingsS);
    if (savings > 50000) score += 40;
    else if (savings > 20000) score += 20;
    else if (savings > 0) score += 5;

    // assets
    const assetBonus = {
      house: 40,
      apartment: 30,
      car: 20,
    };
    assets?.forEach((asset) => {
      if (assetBonus[asset]) score += assetBonus[asset];
    });

    // children
    const childrenCount = Number(childrenCountS);
    if (childrenCount >= 3) score -= 20;
    else if (childrenCount === 2) score -= 10;
    else if (childrenCount === 1) score -= 5;

    // final
    const final = Math.max(300, Math.min(score, 850));
    dispatch(setScore(final));
  }, [
    ageS,
    assets,
    childrenCountS,
    dispatch,
    education,
    employmentYearsS,
    existingDebtS,
    hasCreditHistory,
    hasCriminalRecord,
    incomeS,
    maritalStatus,
    savingsS,
  ]);
};
