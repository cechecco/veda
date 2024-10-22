import React from 'react'
import { Feature } from './actions'

interface FeatureCardProps {
  feature: Feature
  index: number
  setParentId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, setParentId }) => {
  return (
      <div className="flex-grow overflow-hidden">
        <h3
          className="text-lg font-semibold truncate hover:underline cursor-pointer"
          onClick={() => setParentId(feature.id)}
        >
          {feature.name}
        </h3>
        <p className="text-sm text-gray-600 truncate">
          {feature.description}
        </p>
      </div>
  )
}

export default FeatureCard
