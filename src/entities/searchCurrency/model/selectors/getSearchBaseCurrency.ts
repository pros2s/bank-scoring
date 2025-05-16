import { StateSchema } from '@/app/providers/StoreProvider';

export const getSearchBaseCurrencyValue = (state: StateSchema) => state.searchBaseCurrency?.value;
export const getSearchBaseIsFocused = (state: StateSchema) => state.searchBaseCurrency?.isFocused;
