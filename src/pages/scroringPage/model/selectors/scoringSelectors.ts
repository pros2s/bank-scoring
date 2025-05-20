import { StateSchema } from '@/app/providers/StoreProvider';

export const getScoringName = (state: StateSchema) => state.scoring?.name;
export const getScoringSurname = (state: StateSchema) => state.scoring?.surname;
export const getScoringAge = (state: StateSchema) => state.scoring?.age;
export const getScoringIncome = (state: StateSchema) => state.scoring?.income;
export const getScoringMaritalStatus = (state: StateSchema) => state.scoring?.maritalStatus;
export const getScoringExistingDebt = (state: StateSchema) => state.scoring?.existingDebt;
export const getScoringHasCreditHistory = (state: StateSchema) => state.scoring?.hasCreditHistory;
export const getScoringEducation = (state: StateSchema) => state.scoring?.education;
export const getScoringHasCriminalRecord = (state: StateSchema) => state.scoring?.hasCriminalRecord;
export const getScoringEmploymentYears = (state: StateSchema) => state.scoring?.employmentYears;
export const getScoringSavings = (state: StateSchema) => state.scoring?.savings;
export const getScoringAssets = (state: StateSchema) => state.scoring?.assets;
export const getScoringChildrenCount = (state: StateSchema) => state.scoring?.childrenCount;
export const getScoringScore = (state: StateSchema) => state.scoring?.score;

export const getScoringNameError = (state: StateSchema) => state.scoring?.nameError;
export const getScoringSurnameError = (state: StateSchema) => state.scoring?.surnameError;
export const getScoringAgeError = (state: StateSchema) => state.scoring?.ageError;
export const getScoringIncomeError = (state: StateSchema) => state.scoring?.incomeError;
export const getScoringExistingDebtError = (state: StateSchema) => state.scoring?.existingDebtError;
export const getScoringSavingsError = (state: StateSchema) => state.scoring?.savingsError;
export const getScoringChildrenCountError = (state: StateSchema) =>
  state.scoring?.childrenCountError;
export const getScoringEmploymentYearsError = (state: StateSchema) =>
  state.scoring?.employmentYearsError;

export const getScoringRequestError = (state: StateSchema) => state.scoring?.requestError;
export const getScoringRequestLoading = (state: StateSchema) => state.scoring?.requestLoading;
