import { useState } from 'react';

import { __BASE_FAKE_API__ } from '@/shared/api/api';
import { CreditorType } from '@/widgets/CreditorItem';

export const useCreditorsFetch = () => {
  const [creditors, setCreditors] = useState<CreditorType[] | null>(null);

  const handleFetchCreditors = () => {
    fetch(`${__BASE_FAKE_API__}/creditors`)
      .then((res) => res.json())
      .then((data) => {
        setCreditors(data);
      });
  };

  return {
    creditors,
    handleFetchCreditors,
  };
};
