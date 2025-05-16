import { StateSchema } from '@/app/providers/StoreProvider';

export const getSearchFromCurrencyValue = (state: StateSchema) => state.searchFromCurrency?.value;
export const getSearchFromIsFocused = (state: StateSchema) => state.searchFromCurrency?.isFocused;
