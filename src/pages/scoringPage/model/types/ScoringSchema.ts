import {
  AssetType,
  EducationLevelType,
  MaritalStatusType,
  ScoringPercentageType,
  ScoringYearsType,
} from '@/shared/lib/types/scoring';

export interface ScoringSchema {
  name: string;
  nameError?: string;
  surname: string;
  surnameError?: string;

  age: string;
  ageError?: string;

  income: string;
  incomeError?: string;

  maritalStatus: MaritalStatusType;

  existingDebt: string;
  existingDebtError?: string;

  hasCreditHistory: boolean;

  education: EducationLevelType;

  hasCriminalRecord: boolean;

  employmentYears: string;
  employmentYearsError?: string;

  savings: string;
  savingsError?: string;

  assets: AssetType[];

  childrenCount: string;
  childrenCountError?: string;

  creditAmount: string;
  creditAmountError: string;

  percentage?: ScoringPercentageType;
  years?: ScoringYearsType;

  score?: number;
  requestError?: string;
  requestLoading?: boolean;
}
