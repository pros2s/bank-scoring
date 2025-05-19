export type MaritalStatusType = 'single' | 'married' | 'divorced';
export type EducationLevelType = 'none' | 'secondary' | 'higher' | 'bachelor' | 'master' | 'phd';
export type AssetType = 'house' | 'apartment' | 'car';

export interface ScoringSchema {
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

  score?: string;
}
