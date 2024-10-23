import React from 'react'
import { Feature } from './actions'
import { Checkbox } from '@radix-ui/react-checkbox'

interface FeatureCardProps {
  feature: Feature
  index: number
  setParentId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, setParentId }) => {
  return (
      <div className="flex-grow overflow-hidden">
        <p className="text-xs text-muted-foreground italic">{feature.type} {feature.id}</p>
        <div className="flex items-center space-x-2">
          <Checkbox id={`checkbox-${feature.id}`} />
        </div>
        <h3
          className="text-lg font-semibold truncate hover:underline cursor-pointer"
          onClick={() => setParentId(feature.id)}
        >
          {feature.name}
        </h3>
      </div>
  )
}

export default FeatureCard
