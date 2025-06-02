import { ScoreStatusType } from '@/shared/lib/types/scoring';

export const getScoreStatus = (score: number): ScoreStatusType => {
  if (score < 500) return 'Denied';

  if (Math.random() < 0.2) return 'Pending';

  return 'Approved';
};
