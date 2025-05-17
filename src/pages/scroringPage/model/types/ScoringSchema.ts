export type MaritalStatus = 'single' | 'married' | 'divorced';
export type EducationLevel = 'none' | 'secondary' | 'higher' | 'bachelor' | 'master' | 'phd';
export type AssetType = 'house' | 'apartment' | 'car';

export interface ScoringSchema {
  age: string;
  income: number;
  maritalStatus: MaritalStatus;
  existingDebt: number;
  hasCreditHistory: boolean;
  education: EducationLevel;
  hasCriminalRecord: boolean;
  employmentYears: number;
  savings: number;
  assets: AssetType[];
  childrenCount: number;
  score?: number;
}
