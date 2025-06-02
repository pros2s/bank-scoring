import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';

import { AppReducer } from '@/app/model/slice/AppSlice';
import { SymbolsReducer } from '@/features/choseCurrency';
import { $api } from '@/shared/api/api';
import { ResentRatesReducer } from '@/widgets/RecentRates';

import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  preloadedState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: Reducer<StateSchema> | ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    symbols: SymbolsReducer,
    recentRates: ResentRatesReducer,
    app: AppReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
