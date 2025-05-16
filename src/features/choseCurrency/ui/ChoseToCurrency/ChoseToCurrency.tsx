import { memo } from 'react';

import { useSelector } from 'react-redux';

import { CurrencyToMenu } from '@/entities/currencyMenu';
import { SearchToCurrency } from '@/entities/searchCurrency';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

import { getToCurrentCurrency, getIsToCurMenu } from '../../model/selectors/getAllToCurrency';
import { ChoseToCurrencyReducer } from '../../model/slice/ChoseToCurrencySlice';
import { CurrencyName } from '../../model/types/Currency';

interface ChoseToCurrencyProps {
  currencyList?: CurrencyName[];
}

const reducers: ReducersList = {
  choseToCurrency: ChoseToCurrencyReducer,
};

export const ChoseToCurrency = memo(({ currencyList }: ChoseToCurrencyProps) => {
  const currentCurrency = useSelector(getToCurrentCurrency);
  const isCurMenu = useSelector(getIsToCurMenu);

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <SearchToCurrency currentCurrency={currentCurrency} isCurMenu={isCurMenu} />
      <CurrencyToMenu currencyList={currencyList} isCurMenu={isCurMenu} />
    </DynamicReducerLoader>
  );
});
