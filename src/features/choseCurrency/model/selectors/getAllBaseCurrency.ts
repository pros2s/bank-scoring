import { StateSchema } from '@/app/providers/StoreProvider';

export const getBaseCurrentCurrency = (state: StateSchema) =>
  state.choseBaseCurrency?.currentCurrency;
export const getIsBaseCurMenu = (state: StateSchema) => state.choseBaseCurrency?.isCurMenu;
