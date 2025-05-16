import { StateSchema } from '@/app/providers/StoreProvider';

export const getFromCurrentCurrency = (state: StateSchema) =>
  state.choseFromCurrency?.currentCurrency;
export const getIsFromCurMenu = (state: StateSchema) => state.choseFromCurrency?.isCurMenu;
