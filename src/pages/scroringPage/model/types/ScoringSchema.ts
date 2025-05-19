export type MaritalStatus = 'single' | 'married' | 'divorced';
export type EducationLevel = 'none' | 'secondary' | 'higher' | 'bachelor' | 'master' | 'phd';
export type AssetType = 'house' | 'apartment' | 'car';

export interface ScoringSchema {
  age: string;
  ageError?: string;

  income: string;
  incomeError?: string;

  maritalStatus: MaritalStatus;

  existingDebt: number;
  existingDebtError?: string;

  hasCreditHistory: boolean;

  education: EducationLevel;

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
