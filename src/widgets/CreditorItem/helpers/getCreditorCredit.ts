export const getCreditorCredit = (credit: string) => credit.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
