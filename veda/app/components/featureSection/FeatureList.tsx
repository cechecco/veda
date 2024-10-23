import React from 'react'
import { Feature } from '../../actions/actions'
import FeatureCard from './FeatureCard'
import { BodyText } from "../typography"

interface FeatureListProps {
  features: Feature[]
  setParentId: (id: string) => void
}

const FeatureList: React.FC<FeatureListProps> = ({ features, setParentId }) => {
  return (
    <div className='ml-10'>
        {features.length > 0 ? (
          <div className="space-y-2">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                setParentId={setParentId}
              />
            ))}
          </div>
        ) : (
          <BodyText>This item has no sub-features or children.</BodyText>
        )}
    </div>
  )
}

export default FeatureList
