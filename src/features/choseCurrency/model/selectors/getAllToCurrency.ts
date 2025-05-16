import { StateSchema } from '@/app/providers/StoreProvider';

export const getToCurrentCurrency = (state: StateSchema) => state.choseToCurrency?.currentCurrency;
export const getIsToCurMenu = (state: StateSchema) => state.choseToCurrency?.isCurMenu;
