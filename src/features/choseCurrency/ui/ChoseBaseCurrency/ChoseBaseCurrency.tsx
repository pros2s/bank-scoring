import { memo } from 'react';

import { useSelector } from 'react-redux';

import { CurrencyBaseMenu } from '@/entities/currencyMenu';
import { SearchBaseCurrency } from '@/entities/searchCurrency';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

import { getIsBaseCurMenu } from '../../model/selectors/getAllBaseCurrency';
import { ChoseBaseCurrencyReducer } from '../../model/slice/ChoseBaseCurrencySlice';
import { CurrencyName } from '../../model/types/Currency';

interface ChoseBaseCurrencyProps {
  currencyList?: CurrencyName[];
  currentCurrency?: CurrencyName;
}

const reducers: ReducersList = {
  choseBaseCurrency: ChoseBaseCurrencyReducer,
};

export const ChoseBaseCurrency = memo(
  ({ currencyList, currentCurrency }: ChoseBaseCurrencyProps) => {
    const isCurMenu = useSelector(getIsBaseCurMenu);

    return (
      <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
        <SearchBaseCurrency currentCurrency={currentCurrency} isCurMenu={isCurMenu} />
        <CurrencyBaseMenu currencyList={currencyList} isCurMenu={isCurMenu} />
      </DynamicReducerLoader>
    );
  },
);
