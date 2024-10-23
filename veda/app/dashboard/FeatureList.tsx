import React from 'react'
import { Feature } from './actions'
import FeatureCard from './FeatureCard'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MetaText, BodyText } from "../components/typography"

interface FeatureListProps {
  feature: Feature | null
  features: Feature[]
  setParentId: (id: string) => void
}

const FeatureList: React.FC<FeatureListProps> = ({ feature, features, setParentId }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>
          <MetaText>{feature ? "Features" : "Projects"}</MetaText>
        </CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default FeatureList
