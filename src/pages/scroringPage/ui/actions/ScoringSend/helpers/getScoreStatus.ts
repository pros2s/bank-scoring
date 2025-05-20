type ScoreStatusType = 'Approved' | 'Pending' | 'Denied';

export const getScoreStatus = (score: number): ScoreStatusType => {
  if (score < 500) return 'Denied';

  if (Math.random() < 0.2) return 'Pending';

  return 'Approved';
};
