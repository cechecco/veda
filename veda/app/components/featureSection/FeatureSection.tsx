import React from 'react';
import FeatureHeader from './FeatureHeader';
import FeatureList from './FeatureList';
import { Feature } from '../../actions/actions';

interface FeatureSectionProps {
  feature: Feature | null;
  subFeatures: Feature[];
  setParentId: (id: string | null) => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ feature, subFeatures, setParentId }) => {
  return (
    <div className="flex flex-col gap-2">
      <FeatureHeader feature={feature} />
      <FeatureList
        feature={feature}
        features={subFeatures}
        setParentId={setParentId}
      />
    </div>
  );
};

export default FeatureSection;
