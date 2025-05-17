import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AssetType, EducationLevel, MaritalStatus, ScoringSchema } from '../types/ScoringSchema';

const initialState: ScoringSchema = {
  age: '',
  income: 0,
  maritalStatus: 'single',
  existingDebt: 0,
  hasCreditHistory: false,
  education: 'none',
  hasCriminalRecord: false,
  employmentYears: 0,
  savings: 0,
  assets: [],
  childrenCount: 0,
  score: 0,
};

export const ScoringSlice = createSlice({
  name: 'Scoring',
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setIncome: (state, action: PayloadAction<number>) => {
      state.income = action.payload;
    },
    setMaritalStatus: (state, action: PayloadAction<MaritalStatus>) => {
      state.maritalStatus = action.payload;
    },
    setExistingDebt: (state, action: PayloadAction<number>) => {
      state.existingDebt = action.payload;
    },
    setHasCreditHistory: (state, action: PayloadAction<boolean>) => {
      state.hasCreditHistory = action.payload;
    },
    setEducation: (state, action: PayloadAction<EducationLevel>) => {
      state.education = action.payload;
    },
    setHasCriminalRecord: (state, action: PayloadAction<boolean>) => {
      state.hasCriminalRecord = action.payload;
    },
    setEmploymentYears: (state, action: PayloadAction<number>) => {
      state.employmentYears = action.payload;
    },
    setSavings: (state, action: PayloadAction<number>) => {
      state.savings = action.payload;
    },
    setAssets: (state, action: PayloadAction<AssetType[]>) => {
      state.assets = action.payload;
    },
  },
});

export const { actions: ScoringActions, reducer: ScoringReducer } = ScoringSlice;
