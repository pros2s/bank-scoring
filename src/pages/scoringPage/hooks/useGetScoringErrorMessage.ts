import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getScoringAgeError,
  getScoringChildrenCountError,
  getScoringCreditAmountError,
  getScoringEmploymentYearsError,
  getScoringExistingDebtError,
  getScoringIncomeError,
  getScoringNameError,
  getScoringSavingsError,
  getScoringSurnameError,
} from '../model/selectors/scoringSelectors';

export const useGetScoringErrorMessage = () => {
  const { t } = useTranslation();

  const nameError = useSelector(getScoringNameError) ?? '';
  const surNameError = useSelector(getScoringSurnameError) ?? '';
  const ageError = useSelector(getScoringAgeError) ?? '';
  const incomeError = useSelector(getScoringIncomeError) ?? '';
  const existingDebtError = useSelector(getScoringExistingDebtError) ?? '';
  const savingsError = useSelector(getScoringSavingsError) ?? '';
  const scoringChildrenCountError = useSelector(getScoringChildrenCountError) ?? '';
  const scoringEmploymentYearsError = useSelector(getScoringEmploymentYearsError) ?? '';
  const scoringCreditAmountError = useSelector(getScoringCreditAmountError) ?? '';

  return t(
    scoringCreditAmountError ||
      nameError ||
      surNameError ||
      ageError ||
      incomeError ||
      existingDebtError ||
      savingsError ||
      scoringChildrenCountError ||
      scoringEmploymentYearsError ||
      '',
  );
};
