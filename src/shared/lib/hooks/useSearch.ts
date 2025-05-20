import { useMemo } from 'react';

import Fuse from 'fuse.js';

export const useSearch = <T>(value: string, items: T[], fuseOptions?: Fuse.IFuseOptions<T>) =>
  useMemo(() => {
    if (value && items) {
      const fuse = new Fuse(items, fuseOptions);

      return fuse.search(value).map((res) => res.item);
    }

    return items;
  }, [fuseOptions, items, value]);
