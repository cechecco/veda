import React from 'react';
import FeatureHeader from './FeatureHeader';
import FeatureList from './FeatureList';
import { Feature } from '../../actions/actions';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface FeatureSectionProps {
  feature: Feature | null;
  subFeatures: Feature[];
  setParentId: (id: string | null) => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ feature, subFeatures, setParentId }) => {
  return (
    <Card className='bg-primary'>
      <CardHeader>
      <FeatureHeader feature={feature} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <FeatureList
          features={subFeatures}
          setParentId={setParentId}
        />
      </CardContent>
    </Card>
  );
};

export default FeatureSection;
