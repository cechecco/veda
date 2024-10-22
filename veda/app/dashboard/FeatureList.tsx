import React from 'react'
import { Feature } from './actions'
import FeatureCard from './FeatureCard'

interface FeatureListProps {
  features: Feature[]
  setParentId: (id: string) => void
}

const FeatureList: React.FC<FeatureListProps> = ({ features, setParentId }) => {
  return (
    <>
      {features.map((feature, i) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          index={i}
          setParentId={setParentId}
        />
      ))}
    </>
  )
}

export default FeatureList
