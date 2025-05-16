import { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

// eslint-disable-next-line pross-plugin/fsd-layer-imports
import {
  ChoseFromCurrencyActions,
  ChoseToCurrencyActions,
  CurrencyName,
} from '@/features/choseCurrency';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonThemes } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

import {
  getSearchToCurrencyValue,
  getSearchToIsFocused,
} from '../model/selectors/getSearchToCurrency';
import { SearchFromCurrencyActions } from '../model/slice/SearchFromCurrencySlice';
import {
  SearchToCurrencyActions,
  SearchToCurrencyReducer,
} from '../model/slice/SearchToCurrencySlice';

import cls from './SearchCurrency.module.scss';

interface SearchToCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

const reducers: ReducersList = {
  searchToCurrency: SearchToCurrencyReducer,
};

export const SearchToCurrency = memo(({ currentCurrency, isCurMenu }: SearchToCurrencyProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isFocused = useSelector(getSearchToIsFocused);

  const value = useSelector(getSearchToCurrencyValue);

  const placeholder = useMemo(
    () =>
      !currentCurrency
        ? t('currencyError')
        : `${currentCurrency?.abbr.toUpperCase()} - ${currentCurrency?.description}`,
    [currentCurrency, t],
  );

  const onChangeInput = useCallback(
    (val: string) => {
      dispatch(SearchToCurrencyActions.setToValue(val));
    },
    [dispatch],
  );

  const onInputClick = () => {
    dispatch(SearchToCurrencyActions.setToIsFocused(true));
    dispatch(ChoseToCurrencyActions.setIsToCurMenu(true));
    dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(false));
    dispatch(SearchFromCurrencyActions.setFromIsFocused(false));
  };

  const toggleCurMenu = () => {
    dispatch(SearchToCurrencyActions.setToIsFocused(!isFocused));
    dispatch(ChoseToCurrencyActions.setIsToCurMenu(!isCurMenu));
    dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(false));
    dispatch(SearchFromCurrencyActions.setFromIsFocused(false));
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
