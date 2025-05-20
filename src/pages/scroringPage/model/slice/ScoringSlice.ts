import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AssetType,
  EducationLevelType,
  MaritalStatusType,
  ScoringSchema,
} from '../types/ScoringSchema';

const initialState: ScoringSchema = {
  name: '',
  surname: '',
  age: '',
  income: '50000',
  maritalStatus: 'single',
  existingDebt: '',
  hasCreditHistory: false,
  education: 'none',
  hasCriminalRecord: false,
  employmentYears: '',
  savings: '',
  assets: [],
  childrenCount: '',
  score: 400,

  nameError: '',
  surnameError: '',
  ageError: '',
  incomeError: '',
  existingDebtError: '',
  childrenCountError: '',
  employmentYearsError: '',
  savingsError: '',
  requestError: '',
};

export const ScoringSlice = createSlice({
  name: 'Scoring',
  initialState,
  reducers: {
    // name
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setNameError: (state, action: PayloadAction<string>) => {
      state.nameError = action.payload;
    },
    // --------------------------------------------------------------
    // surname
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    setSurnameError: (state, action: PayloadAction<string>) => {
      state.surnameError = action.payload;
    },
    // --------------------------------------------------------------

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
    setExistingDebt: (state, action: PayloadAction<string>) => {
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

    setHasCriminalRecord: (state, action: PayloadAction<boolean>) => {
      state.hasCriminalRecord = action.payload;
    },

    // employmentYears
    setEmploymentYears: (state, action: PayloadAction<string>) => {
      state.employmentYears = action.payload;
    },
    setEmploymentYearsError: (state, action: PayloadAction<string>) => {
      state.employmentYearsError = action.payload;
    },
    // --------------------------------------------------------------

    // savings
    setSavings: (state, action: PayloadAction<string>) => {
      state.savings = action.payload;
    },
    setSavingsError: (state, action: PayloadAction<string>) => {
      state.savingsError = action.payload;
    },
    // --------------------------------------------------------------

    addAsset: (state, action: PayloadAction<AssetType>) => {
      state.assets.push(action.payload);
    },
    removeAsset: (state, action: PayloadAction<AssetType>) => {
      state.assets = state.assets.filter((asset) => asset !== action.payload);
    },

    // childrenCount
    setChildrenCount: (state, action: PayloadAction<string>) => {
      state.childrenCount = action.payload;
    },
    setChildrenCountError: (state, action: PayloadAction<string>) => {
      state.childrenCountError = action.payload;
    },
    // --------------------------------------------------------------

    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setRequestError: (state, action: PayloadAction<string>) => {
      state.requestError = action.payload;
    },
    setRequestLoading: (state, action: PayloadAction<boolean>) => {
      state.requestLoading = action.payload;
    },
  },
});

export const { actions: ScoringActions, reducer: ScoringReducer } = ScoringSlice;
