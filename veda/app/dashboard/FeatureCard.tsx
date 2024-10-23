import React from 'react'
import { Feature } from './actions'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  feature: Feature
  setParentId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, setParentId }) => {
  return (
    <Card className="hover:bg-accent cursor-pointer" onClick={() => setParentId(feature.id)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xs text-muted-foreground">
          {feature.type} {feature.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-sm font-medium">
          {feature.name}
        </h3>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
