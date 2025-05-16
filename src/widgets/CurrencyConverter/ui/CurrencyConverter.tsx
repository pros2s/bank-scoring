import { KeyboardEvent, memo, ReactNode, useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { CgArrowsExchange } from 'react-icons/cg';
import { useSelector } from 'react-redux';

import { SearchFromCurrencyActions, SearchToCurrencyActions } from '@/entities/searchCurrency';
import {
  ChoseFromCurrency,
  ChoseFromCurrencyActions,
  ChoseToCurrency,
  ChoseToCurrencyActions,
  fetchRate,
  fetchSymbols,
  getSymbols,
 getFromCurrentCurrency , getToCurrentCurrency } from '@/features/choseCurrency';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { RoutesPaths } from '@/shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text, TextAlign, TextThemes } from '@/shared/ui/Text/Text';

import {
  getConverterError,
  getConverterInputValue,
  getConverterIsFlipped,
  getConverterIsLoading,
  getConverterRate,
  getConverterResult,
} from '../model/selectors/getAllCurrencyConverter';
import {
  CurrencyConverterActions,
  CurrencyConverterReducer,
} from '../model/slice/CurrencyConverterSlice';

import cls from './CurrencyConverter.module.scss';

const reducers: ReducersList = {
  currencyConverter: CurrencyConverterReducer,
};

export const CurrencyConverter = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const currencyList = useSelector(getSymbols);
  const errorMessage = useSelector(getConverterError);
  const isLoading = useSelector(getConverterIsLoading);
  const inputValue = useSelector(getConverterInputValue);

  const toCurrentCur = useSelector(getToCurrentCurrency);
  const fromCurrentCur = useSelector(getFromCurrentCurrency);
  const rate = useSelector(getConverterRate);
  const result = useSelector(getConverterResult);
  const isFlipped = useSelector(getConverterIsFlipped);

  const inputChange = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9.]/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  const onConvert = useCallback(() => {
    if (inputValue !== '' && rate) {
      dispatch(CurrencyConverterActions.setResult(Number(inputValue) * rate));
    }
  }, [dispatch, inputValue, rate]);

  useEffect(() => {
    dispatch(fetchSymbols());
    dispatch(ChoseFromCurrencyActions.setDefaultFromCurrentCurrency());
    dispatch(ChoseToCurrencyActions.setDefaultToCurrentCurrency());
    dispatch(CurrencyConverterActions.setDefaultInputValue());
  }, [dispatch]);

  useEffect(() => {
    onConvert();

    if (fromCurrentCur?.abbr && toCurrentCur?.abbr) {
      dispatch(fetchRate({ from: fromCurrentCur?.abbr, to: toCurrentCur?.abbr }));
    }
  }, [dispatch, fromCurrentCur?.abbr, onConvert, toCurrentCur?.abbr]);

  const onInputClick = useCallback(() => {
    dispatch(ChoseToCurrencyActions.setIsToCurMenu(false));
    dispatch(SearchToCurrencyActions.setToIsFocused(false));
    dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(false));
    dispatch(SearchFromCurrencyActions.setFromIsFocused(false));
  }, [dispatch]);

  const onChangeInput = useCallback(
    (val: string) => {
      if (val.length < 16) {
        dispatch(CurrencyConverterActions.setInputValue(val));
      }
    },
    [dispatch],
  );

  const onExchange = useCallback(() => {
    dispatch(ChoseToCurrencyActions.setToCurrentCurrency(fromCurrentCur!));
    dispatch(ChoseFromCurrencyActions.setFromCurrentCurrency(toCurrentCur!));
    dispatch(CurrencyConverterActions.setIsFlipped(!isFlipped));
    onConvert();
  }, [dispatch, fromCurrentCur, isFlipped, onConvert, toCurrentCur]);

  let element: ReactNode;
  if (errorMessage) {
    element = <Text align={TextAlign.CENTER} theme={TextThemes.ERROR} title={t('symbolsError')} />;
  } else {
    element = (
      <div className={cls.inner}>
        <section className={cls.tools}>
          <div>
            <h3 className={cls.label}>{t('convert')}</h3>
            <div className='input'>
              <Input
                placeholder={t('amount')}
                value={inputValue}
                onChange={onChangeInput}
                onKeyPress={inputChange}
                onClick={onInputClick}
              />
              {isLoading && <Loader size='20px' borderWidth='4px' />}
            </div>
          </div>
          <div className={cls.currencyLists}>
            <div className={cls.from}>
              <h3 className={cls.label}>{t('fromCurrency')}</h3>
              <ChoseFromCurrency currencyList={currencyList} />
            </div>
            <Button className={cls.exchange} theme={ButtonThemes.CLEAR} onClick={onExchange}>
              <CgArrowsExchange className={classNames('', [], { [cls.flipped]: isFlipped })} />
            </Button>
            <div className={cls.to}>
              <h3 className={cls.label}>{t('toCurrency')}</h3>
              <ChoseToCurrency currencyList={currencyList} />
            </div>
          </div>
        </section>

        <div className={cls.info}>
          <div className={cls.result}>
            <h3>
              {`${inputValue} `}
              <span className={cls.currency}>
                {!fromCurrentCur ? t('currencyError') : `${fromCurrentCur?.description}s =`}
              </span>
            </h3>
            <h1>
              {`${result?.toFixed(2)} `}
              <span className={cls.currency}>
                {!toCurrentCur ? t('currencyError') : `${toCurrentCur?.description}s`}
              </span>
            </h1>
            <div>
              {`1.00 ${fromCurrentCur?.abbr.toUpperCase()} = `}
              <span>
                {!rate ? <Loader size='14px' borderWidth='2px' /> : `${rate?.toFixed(2)}`}
              </span>
              {`${toCurrentCur?.abbr.toUpperCase()}`}
            </div>
          </div>

          <div>
            <AppLink to={RoutesPaths.rates} theme={AppLinkTheme.SECONDARY}>
              <Button className={cls.linkButton} theme={ButtonThemes.CLEAR}>
                {t('recentRates')}
              </Button>
            </AppLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <section className='content'>{element}</section>
    </DynamicReducerLoader>
  );
});
