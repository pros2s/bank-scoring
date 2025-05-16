export interface CurrencyName {
  abbr: string;
  description: string;
}

export interface ChoseCurrencySchema {
  isCurMenu: boolean;
  currentCurrency: CurrencyName;
}
