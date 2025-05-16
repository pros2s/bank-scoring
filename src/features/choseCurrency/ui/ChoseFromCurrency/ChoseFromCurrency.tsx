import { memo } from 'react';

import { useSelector } from 'react-redux';

import { CurrencyFromMenu } from '@/entities/currencyMenu';
import { SearchFromCurrency } from '@/entities/searchCurrency';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

import { getFromCurrentCurrency, getIsFromCurMenu } from '../../model/selectors/getAllFromCurrency';
import { ChoseFromCurrencyReducer } from '../../model/slice/ChoseFromCurrencySlice';
import { CurrencyName } from '../../model/types/Currency';

interface ChoseFromCurrencyProps {
  currencyList?: CurrencyName[];
}

const reducers: ReducersList = {
  choseFromCurrency: ChoseFromCurrencyReducer,
};

export const ChoseFromCurrency = memo(({ currencyList }: ChoseFromCurrencyProps) => {
  const currentCurrency = useSelector(getFromCurrentCurrency);
  const isCurMenu = useSelector(getIsFromCurMenu);

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <SearchFromCurrency currentCurrency={currentCurrency} isCurMenu={isCurMenu} />
      <CurrencyFromMenu currencyList={currencyList} isCurMenu={isCurMenu} />
    </DynamicReducerLoader>
  );
});
