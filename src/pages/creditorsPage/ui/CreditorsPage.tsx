import { memo, useState, useEffect } from 'react';

const mainApi = 'http://localhost:8000';

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
    fetch(`${mainApi}/creditors`)
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
