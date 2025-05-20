import { useState } from 'react';

export const useCreditorSearch = () => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  return {
    search,
    handleChangeSearch,
  };
};
