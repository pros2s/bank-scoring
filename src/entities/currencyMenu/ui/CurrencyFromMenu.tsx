import { memo, useMemo } from 'react';

import Fuse from 'fuse.js';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { getSearchFromCurrencyValue, SearchFromCurrencyActions } from '@/entities/searchCurrency';
// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { ChoseFromCurrencyActions, CurrencyName } from '@/features/choseCurrency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';


import cls from './CurrencyMenu.module.scss';

interface CurrencyMenuProps {
  currencyList?: CurrencyName[];
  isCurMenu?: boolean;
}

export const CurrencyFromMenu = memo(({ currencyList, isCurMenu }: CurrencyMenuProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(getSearchFromCurrencyValue);

  const setNewCurrency = (currency: CurrencyName) => {
    dispatch(ChoseFromCurrencyActions.setFromCurrentCurrency(currency));
    dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(false));
    dispatch(SearchFromCurrencyActions.setFromIsFocused(false));
    dispatch(SearchFromCurrencyActions.setFromValue(''));
  };

  const searchedCurrency = useMemo(() => {
    if (currencyList && searchValue) {
      const fuse = new Fuse(currencyList, {
        keys: ['abbr', 'description'],
      });

      return fuse.search(searchValue).map((res) => res.item);
    }
    return currencyList;
  }, [currencyList, searchValue]);

  return (
    <div className={classNames(cls.curList, [], { [cls.shown]: isCurMenu })}>
      {searchedCurrency?.map((cur) => (
        <Button
          className={classNames(cls.curName, [], {
            [cls.top]:
              cur.abbr === 'rub' || cur.abbr === 'eur' || cur.abbr === 'usd' || cur.abbr === 'gbp',
          })}
          key={v4()}
          onClick={() => setNewCurrency(cur)}
          theme={ButtonThemes.CLEAR}
          tabIndex={0}
        >
          <p className={cls.abbr}>{cur.abbr.toUpperCase()}</p>
          <span>-</span>
          <p className={cls.description}>{cur.description}</p>
        </Button>
      ))}
    </div>
  );
});
