import { memo, useEffect, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { CreditorItem } from '@/widgets/CreditorItem';

import { useCreditorDelete } from '../hooks/useCreditorDelete';
import { useCreditorsFetch } from '../hooks/useCreditorsFetch';

import cls from './CreditorsPage.module.scss';

const CreditorsPage = memo(() => {
  const { creditors, handleFetchCreditors } = useCreditorsFetch();

  const isFetch = useRef(false);

  useEffect(() => {
    if (isFetch.current) return;
    isFetch.current = true;

    handleFetchCreditors();
  }, [handleFetchCreditors]);

  const handleDelete = useCreditorDelete(handleFetchCreditors);

  return (
    <section className={classNames(cls.content, ['content'])}>
      {creditors?.map((cr) => (
        <CreditorItem key={cr.id} creditor={cr} onDelete={handleDelete(cr.id, cr.name)} />
      ))}
    </section>
  );
});

export default CreditorsPage;
