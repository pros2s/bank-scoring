import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

// eslint-disable-next-line pross-plugin/fsd-layer-imports
import { ChoseBaseCurrencyActions, CurrencyName } from '@/features/choseCurrency';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonThemes } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import {
  getSearchBaseCurrencyValue,
  getSearchBaseIsFocused,
} from '../model/selectors/getSearchBaseCurrency';
import {
  SearchBaseCurrencyActions,
  SearchBaseCurrencyReducer,
} from '../model/slice/SearchBaseCurrencySlice';

import cls from './SearchCurrency.module.scss';

interface SearchCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

const reducers: ReducersList = {
  searchBaseCurrency: SearchBaseCurrencyReducer,
};

export const SearchBaseCurrency = memo(({ currentCurrency, isCurMenu }: SearchCurrencyProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isFocused = useSelector(getSearchBaseIsFocused);

  const value = useSelector(getSearchBaseCurrencyValue);

  const placeholder = useMemo(
    () =>
      !currentCurrency
        ? t('currencyError')
        : `${currentCurrency?.abbr.toUpperCase()} - ${currentCurrency?.description}`,
    [currentCurrency, t],
  );

  const onChangeInput = useCallback(
    (val: string) => {
      dispatch(SearchBaseCurrencyActions.setBaseValue(val));
    },
    [dispatch],
  );

  const onInputClick = () => {
    dispatch(SearchBaseCurrencyActions.setBaseIsFocused(true));
    dispatch(ChoseBaseCurrencyActions.setIsBaseCurMenu(true));
  };

  const toggleCurMenu = () => {
    dispatch(SearchBaseCurrencyActions.setBaseIsFocused(!isFocused));
    dispatch(ChoseBaseCurrencyActions.setIsBaseCurMenu(!isCurMenu));
  };

  return (
    <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
      <div
        className={classNames(cls.searchCurrency, [], {
          [cls.focused]: isFocused,
        })}
      >
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
          onClick={onInputClick}
        />
        <Button
          className={classNames(cls.button, [], { [cls.rotate]: isCurMenu })}
          theme={ButtonThemes.CLEAR}
          size={ButtonSizes.S}
          onClick={toggleCurMenu}
        >
          <BsCaretDownFill />
        </Button>
      </div>
    </DynamicReducerLoader>
  );
});
