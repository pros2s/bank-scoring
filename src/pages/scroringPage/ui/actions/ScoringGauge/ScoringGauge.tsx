import GaugeComponent from 'react-gauge-component';
import { useSelector } from 'react-redux';

import { getScoringScore } from '../../../model/selectors/scoringSelectors';

import { useScore } from './hooks/useScore';

export const ScoringGauge = () => {
  const score = useSelector(getScoringScore);
  useScore();

  return (
    <GaugeComponent
      value={score}
      minValue={300}
      maxValue={850}
      type='radial'
      arc={{
        width: 0.4,
        padding: 0.005,
        cornerRadius: 1,
        colorArray: ['#5BE12C', '#EA4228'],
        subArcs: [
          {
            limit: 300,
            color: '#EA4228',
            showTick: true,
          },
          {
            limit: 400,
            color: '#F5CD19',
            showTick: true,
          },
          {
            limit: 500,
            color: '#EA4228',
            showTick: true,
          },

          {
            limit: 600,
            color: '#5BE12C',
            showTick: true,
          },
          {
            limit: 700,
            color: '#F5CD19',
            showTick: true,
          },
          {
            color: '#F5CD19',
          },
        ],
      }}
      pointer={{
        color: 'var(--secondary-color)',
        length: 0.5,
        animationDelay: 0,
        animationDuration: 500,
      }}
      labels={{
        valueLabel: {
          formatTextValue: (value) => value,
          style: {
            color: 'var(--secondary-color)',
            fill: 'var(--secondary-color)',
            textShadow: 'none',
          },
        },
        tickLabels: {
          type: 'outer',
          defaultTickValueConfig: {
            formatTextValue: (value: string) => value,
            style: { fontSize: 12 },
          },
          ticks: [{ value: 300 }, { value: 400 }, { value: 500 }, { value: 600 }, { value: 700 }],
        },
      }}
    />
  );
};

ScoringGauge.displayName = 'ScoringGauge';
