import { useTranslation } from 'react-i18next';

export const useGetDate = () => {
  const { t } = useTranslation();

  return (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const time = `${hours}:${minutes}`;

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const dateOnly = new Date(year, month, day);

    if (dateOnly.getTime() === today.getTime()) {
      return `${time}, ${t('today')}`;
    }
    if (dateOnly.getTime() === yesterday.getTime()) {
      return `${time}, ${t('yesterday')}`;
    }

    const dayStr = day.toString().padStart(2, '0');
    const monthStr = (month + 1).toString().padStart(2, '0');

    return `${time}, ${dayStr}.${monthStr}.${year}`;
  };
};
