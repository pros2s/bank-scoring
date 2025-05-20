import { memo, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useSearch } from '@/shared/lib/hooks/useSearch';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Input } from '@/shared/ui/Input/Input';
import { Label } from '@/shared/ui/Label';
import { CreditorItem } from '@/widgets/CreditorItem';

import { useCreditorDelete } from '../hooks/useCreditorDelete';
import { useCreditorSearch } from '../hooks/useCreditorSearch';
import { useCreditorsFetch } from '../hooks/useCreditorsFetch';

import cls from './CreditorsPage.module.scss';

const CreditorsPage = memo(() => {
  const { t } = useTranslation();

  const { creditors, handleFetchCreditors } = useCreditorsFetch();

  const isFetch = useRef(false);

  useEffect(() => {
    if (isFetch.current) return;
    isFetch.current = true;

    handleFetchCreditors();
  }, [handleFetchCreditors]);

  const handleDelete = useCreditorDelete(handleFetchCreditors);

  const { handleChangeSearch, search } = useCreditorSearch();
  const searchedCreditors = useSearch(search, creditors, { keys: ['name', 'age', 'status'] });

  return (
    <section className={classNames(cls.content, ['content'])}>
      <FlexBox className='w-100' direction='column' gap={5}>
        <Label className={cls.label} info={t('search')} />

        <div className={classNames(cls.input, ['input'])}>
          <Input placeholder={t('searchCreditors')} value={search} onChange={handleChangeSearch} />
        </div>
      </FlexBox>

      {searchedCreditors?.map((cr) => (
        <CreditorItem key={cr.id} creditor={cr} onDelete={handleDelete(cr.id, cr.name)} />
      ))}
    </section>
  );
});

export default CreditorsPage;
