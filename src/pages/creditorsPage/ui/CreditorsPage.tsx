import { memo, useState, useEffect } from 'react';

import { __BASE_FAKE_API__ } from '@/shared/api/api';

interface CreditorType {
  id: number;
  name: string;
  age: number;
  income: number;
  maritalStatus: string;
  existingDebt: number;
  hasCreditHistory: boolean;
  creditScore: number;
  status: string;
  applicationDate: string;
}

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
    <div>
      {creditors?.map((cr) => (
        <div key={cr.id}>{JSON.stringify(cr)}</div>
      ))}
    </div>
  );
});

export default CreditorsPage;
