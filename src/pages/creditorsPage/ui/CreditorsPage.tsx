import { memo, useState, useEffect } from 'react';

import { __BASE_FAKE_API__ } from '@/shared/api/api';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CreditorItem, CreditorType } from '@/widgets/CreditorItem';

import cls from './CreditorsPage.module.scss';

const CreditorsPage = memo(() => {
  const [creditors, setCreditors] = useState<CreditorType[] | null>(null);

  useEffect(() => {
    fetch(`${__BASE_FAKE_API__}/creditors`)
      .then((res) => res.json())
      .then((data) => {
        setCreditors(data);
      });
  }, []);

  return (
    <section className={classNames(cls.content, ['content'])}>
      {creditors?.map((cr) => (
        <CreditorItem key={cr.id} creditor={cr} />
      ))}
    </section>
  );
});

export default CreditorsPage;
