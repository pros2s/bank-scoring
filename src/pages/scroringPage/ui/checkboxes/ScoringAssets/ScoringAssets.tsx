import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CheckBox } from '@/shared/ui/CheckBox';
import { FlexBox } from '@/shared/ui/FlexBox';
import { Label } from '@/shared/ui/Label';

import { getScoringAssets } from '../../../model/selectors/scoringSelectors';
import { ScoringActions } from '../../../model/slice/ScoringSlice';
import { AssetType } from '../../../model/types/ScoringSchema';

const { addAsset, removeAsset } = ScoringActions;

export const ScoringAssets = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const assets = useSelector(getScoringAssets);

  const isHouse = assets?.includes('house');
  const isCar = assets?.includes('car');
  const isApartment = assets?.includes('apartment');

  const handleChange = (val: AssetType) => () => {
    if (isHouse && val === 'house') {
      dispatch(removeAsset('house'));
    } else if (isCar && val === 'car') {
      dispatch(removeAsset('car'));
    } else if (isApartment && val === 'apartment') {
      dispatch(removeAsset('apartment'));
    } else {
      dispatch(addAsset(val));
    }
  };

  return (
    <FlexBox direction='column' gap={5}>
      <Label label={`${t('scoringAssets')}`} />

      <CheckBox
        id='asset-house'
        text={t('house')}
        isChecked={isHouse}
        onCheckBoxChange={handleChange('house')}
        size='22'
      />
      <CheckBox
        id='asset-car'
        text={t('car')}
        isChecked={isCar}
        onCheckBoxChange={handleChange('car')}
        size='22'
      />
      <CheckBox
        id='asset-apartment'
        text={t('apartment')}
        isChecked={isApartment}
        onCheckBoxChange={handleChange('apartment')}
        size='22'
      />
    </FlexBox>
  );
};

ScoringAssets.displayName = 'ScoringAssets';
