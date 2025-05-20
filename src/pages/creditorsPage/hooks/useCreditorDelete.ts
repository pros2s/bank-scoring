import { useTranslation } from 'react-i18next';

import { __BASE_FAKE_API__ } from '@/shared/api/api';

export const useCreditorDelete = (handleFetchCreditors: () => void) => {
  const { t } = useTranslation();

  return (id: string, name: string) => () => {
    const isDelete = window.confirm(`${t('deleteCreditor')} ${name}?`);
    if (isDelete) {
      fetch(`${__BASE_FAKE_API__}/creditors/${id}`, {
        method: 'DELETE',
      }).then((json) => {
        if (json.ok) {
          handleFetchCreditors();
        }
      });
    }
  };
};
