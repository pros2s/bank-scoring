export interface ResentRatesParams {
  date?: string;
  base?: string;
}

export interface ResentRatesSchema {
  errorMessage?: string;
  inputValue: string;
  recentRatesDate: string;
  recentRates: Record<string, number>;
  yesterdayRates: Record<string, number>;
  isLoading: boolean;
}
