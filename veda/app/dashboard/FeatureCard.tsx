import React from 'react'
import { Feature } from './actions'
import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  feature: Feature
  index: number
  setParentId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, setParentId }) => {
  return (
    <Card className="p-2 m-2">
      <div className="w-full flex justify-between items-top">
        <div className="w-full">
          <p className="text-muted-foreground text-xs">
            {feature.parentId ? "feature" : "project"} {index + 1} - @{feature.id}
          </p>
          <p 
            className="text-lg font-bold cursor-pointer hover:underline" 
            onClick={() => setParentId(feature.id)}
          >
            {feature.name}
          </p>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </Card>
  )
}

export default FeatureCard
