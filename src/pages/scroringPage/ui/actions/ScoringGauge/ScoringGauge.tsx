import GaugeComponent from 'react-gauge-component';
import { useSelector } from 'react-redux';

import { getScoringScore } from '../../../model/selectors/scoringSelectors';

import cls from './ScoringGauge.module.scss';
import { useScore } from './hooks/useScore';

export const ScoringGauge = () => {
  const score = useSelector(getScoringScore);
  useScore();

  return (
    <GaugeComponent
      className={cls.gauge}
      value={score}
      minValue={300}
      maxValue={850}
      type='radial'
      arc={{
        width: 0.4,
        padding: 0.005,
        cornerRadius: 1,
        // gradient: true,
        subArcs: [
          {
            limit: 300,
            showTick: true,
            color: '#ff3232',
          },
          {
            limit: 400,
            showTick: true,
            color: '#ff3232',
          },
          {
            limit: 500,
            showTick: true,
            color: '#fa7630',
          },

          {
            limit: 600,
            showTick: true,
            color: '#f4b82f',
          },
          {
            limit: 700,
            showTick: true,
            color: '#cbee2d',
          },
          {
            color: '#5BE12C',
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
