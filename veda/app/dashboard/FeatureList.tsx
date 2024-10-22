import React from 'react'
import { Feature } from './actions'
import FeatureCard from './FeatureCard'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface FeatureListProps {
  features: Feature[]
  setParentId: (id: string) => void
}

const FeatureList: React.FC<FeatureListProps> = ({ features, setParentId }) => {
  return (
    <Card>
      <CardContent className="p-2">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <React.Fragment key={feature.id}>
              <FeatureCard
                feature={feature}
                index={index}
                setParentId={setParentId}
                isLast={index === features.length - 1}
              />
              {index < features.length - 1 && <Separator className="my-2" />}
            </React.Fragment>
          ))
        ) : (
          <p className="text-sm text-gray-600">This item has no sub-features or children.</p>
        )}
      </CardContent>
    </Card>
  )
}

export default FeatureList
