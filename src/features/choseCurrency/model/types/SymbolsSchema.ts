import { CurrencyName } from './Currency';

export interface SymbolsSchema {
  errorMessage?: string;
  isLoading: boolean;
  data: CurrencyName[];
}
