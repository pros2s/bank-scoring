import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getScoringAgeError,
  getScoringChildrenCountError,
  getScoringEmploymentYearsError,
  getScoringExistingDebtError,
  getScoringIncomeError,
  getScoringSavingsError,
} from '../model/selectors/scoringSelectors';

export const useGetScoringErrorMessage = () => {
  const { t } = useTranslation();

  const incomeError = useSelector(getScoringIncomeError) ?? '';
  const ageError = useSelector(getScoringAgeError) ?? '';
  const existingDebtError = useSelector(getScoringExistingDebtError) ?? '';
  const savingsError = useSelector(getScoringSavingsError) ?? '';
  const scoringChildrenCountError = useSelector(getScoringChildrenCountError) ?? '';
  const scoringEmploymentYearsError = useSelector(getScoringEmploymentYearsError) ?? '';

  return t(
    ageError ||
      incomeError ||
      existingDebtError ||
      savingsError ||
      scoringChildrenCountError ||
      scoringEmploymentYearsError ||
      '',
  );
};
