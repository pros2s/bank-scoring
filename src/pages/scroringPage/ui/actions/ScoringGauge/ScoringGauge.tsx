import { useSelector } from 'react-redux';

import { Gauge } from '@/entities/gauge';

import { getScoringScore } from '../../../model/selectors/scoringSelectors';

import { useScore } from './hooks/useScore';

export const ScoringGauge = () => {
  const score = useSelector(getScoringScore) ?? 300;
  useScore();

  return <Gauge score={score} />;
};

ScoringGauge.displayName = 'ScoringGauge';
