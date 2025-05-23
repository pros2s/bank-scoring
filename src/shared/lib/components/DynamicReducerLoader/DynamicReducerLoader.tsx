import { FC, ReactNode, useEffect } from 'react';

import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import { ReduxStoreWithManger, StateSchemaFields } from '@/app/providers/StoreProvider';

import { useAppDispatch } from '../../hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaFields]?: Reducer;
};

interface DynamicReducerLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManger;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaFields, reducer);
      dispatch({ type: `@Init ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaFields);
          dispatch({ type: `@Destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   
  return <>{children}</>;
};
