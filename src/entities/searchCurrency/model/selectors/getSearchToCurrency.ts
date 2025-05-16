import { StateSchema } from '@/app/providers/StoreProvider';

export const getSearchToCurrencyValue = (state: StateSchema) => state.searchToCurrency?.value;
export const getSearchToIsFocused = (state: StateSchema) => state.searchToCurrency?.isFocused;
