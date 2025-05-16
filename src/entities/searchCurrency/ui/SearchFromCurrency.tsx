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
  getSearchFromCurrencyValue,
  getSearchFromIsFocused,
} from '../model/selectors/getSearchFromCurrency';
import {
  SearchFromCurrencyActions,
  SearchFromCurrencyReducer,
} from '../model/slice/SearchFromCurrencySlice';
import { SearchToCurrencyActions } from '../model/slice/SearchToCurrencySlice';

import cls from './SearchCurrency.module.scss';

interface SearchCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

const reducers: ReducersList = {
  searchFromCurrency: SearchFromCurrencyReducer,
};

export const SearchFromCurrency = memo(({ currentCurrency, isCurMenu }: SearchCurrencyProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isFocused = useSelector(getSearchFromIsFocused);

  const value = useSelector(getSearchFromCurrencyValue);

  const placeholder = useMemo(
    () =>
      !currentCurrency
        ? t('currencyError')
        : `${currentCurrency?.abbr.toUpperCase()} - ${currentCurrency?.description}`,
    [currentCurrency, t],
  );

  const onChangeInput = useCallback(
    (val: string) => {
      dispatch(SearchFromCurrencyActions.setFromValue(val));
    },
    [dispatch],
  );

  const onInputClick = () => {
    dispatch(SearchFromCurrencyActions.setFromIsFocused(true));
    dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(true));
    dispatch(ChoseToCurrencyActions.setIsToCurMenu(false));
    dispatch(SearchToCurrencyActions.setToIsFocused(false));
  };

  const toggleCurMenu = () => {
    dispatch(SearchFromCurrencyActions.setFromIsFocused(!isFocused));
    dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(!isCurMenu));
    dispatch(ChoseToCurrencyActions.setIsToCurMenu(false));
    dispatch(SearchToCurrencyActions.setToIsFocused(false));
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
