import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AssetType,
  EducationLevelType,
  MaritalStatusType,
  ScoringSchema,
} from '../types/ScoringSchema';

const initialState: ScoringSchema = {
  age: '',
  income: '',
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

  ageError: '',
  incomeError: '',
  existingDebtError: '',
  childrenCountError: '',
  employmentYearsError: '',
  savingsError: '',
};

export const ScoringSlice = createSlice({
  name: 'Scoring',
  initialState,
  reducers: {
    // age
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setAgeError: (state, action: PayloadAction<string>) => {
      state.ageError = action.payload;
    },
    // --------------------------------------------------------------

    // income
    setIncome: (state, action: PayloadAction<string>) => {
      state.income = action.payload;
    },
    setIncomeError: (state, action: PayloadAction<string>) => {
      state.incomeError = action.payload;
    },
    // --------------------------------------------------------------
    setMaritalStatus: (state, action: PayloadAction<MaritalStatusType>) => {
      state.maritalStatus = action.payload;
    },

    // existingDebt
    setExistingDebt: (state, action: PayloadAction<number>) => {
      state.existingDebt = action.payload;
    },
    setExistingDebtError: (state, action: PayloadAction<string>) => {
      state.existingDebtError = action.payload;
    },
    // --------------------------------------------------------------

    setHasCreditHistory: (state, action: PayloadAction<boolean>) => {
      state.hasCreditHistory = action.payload;
    },
    setEducation: (state, action: PayloadAction<EducationLevelType>) => {
      state.education = action.payload;
    },

    //     existingDebtError: '',
    // childrenCountError: '',
    // employmentYearsError: '',
    // savingsError: '',

    setHasCriminalRecord: (state, action: PayloadAction<boolean>) => {
      state.hasCriminalRecord = action.payload;
    },

    // employmentYears
    setEmploymentYears: (state, action: PayloadAction<number>) => {
      state.employmentYears = action.payload;
    },
    setEmploymentYearsError: (state, action: PayloadAction<string>) => {
      state.employmentYearsError = action.payload;
    },
    // --------------------------------------------------------------

    // savings
    setSavings: (state, action: PayloadAction<number>) => {
      state.savings = action.payload;
    },
    setSavingsError: (state, action: PayloadAction<string>) => {
      state.savingsError = action.payload;
    },
    // --------------------------------------------------------------

    setAssets: (state, action: PayloadAction<AssetType[]>) => {
      state.assets = action.payload;
    },

    // childrenCount
    setChildrenCount: (state, action: PayloadAction<number>) => {
      state.childrenCount = action.payload;
    },
    setChildrenCountError: (state, action: PayloadAction<string>) => {
      state.childrenCountError = action.payload;
    },
    // --------------------------------------------------------------

    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
  },
});

export const { actions: ScoringActions, reducer: ScoringReducer } = ScoringSlice;
