import { StateSchema } from '@/app/providers/StoreProvider';

export const getSymbols = (state: StateSchema) => state.symbols.data;
