import { StateSchema } from '@/app/providers/StoreProvider';

export const getRecentRatesError = (state: StateSchema) => state.recentRates?.errorMessage;
export const getRecentRatesIsLoading = (state: StateSchema) => state.recentRates?.isLoading;

export const getRecentRatesInputValue = (state: StateSchema) => state.recentRates?.inputValue;

export const getRecentRates = (state: StateSchema) => state.recentRates?.recentRates;
export const getYesterDayRates = (state: StateSchema) => state.recentRates?.yesterdayRates;
export const getRecentRatesDate = (state: StateSchema) => state.recentRates?.recentRatesDate;
