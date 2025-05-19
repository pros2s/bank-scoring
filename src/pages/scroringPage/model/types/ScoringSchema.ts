export type MaritalStatusType = 'single' | 'married' | 'divorced';
export type EducationLevelType = 'none' | 'secondary' | 'higher' | 'bachelor' | 'master' | 'phd';
export type AssetType = 'house' | 'apartment' | 'car';

export interface ScoringSchema {
  age: string;
  ageError?: string;

  income: string;
  incomeError?: string;

  maritalStatus: MaritalStatusType;

  existingDebt: number;
  existingDebtError?: string;

  hasCreditHistory: boolean;

  education: EducationLevelType;

  hasCriminalRecord: boolean;

  employmentYears: number;
  employmentYearsError?: string;

  savings: number;
  savingsError?: string;

  assets: AssetType[];

  childrenCount: number;
  childrenCountError?: string;

  score?: number;
}
