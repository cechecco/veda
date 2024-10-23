import React from 'react'
import { Feature } from './actions'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MetaText, MainTitle } from "../components/typography"

interface FeatureCardProps {
  feature: Feature
  setParentId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, setParentId }) => {
  return (
    <Card className="hover:bg-accent cursor-pointer" onClick={() => setParentId(feature.id)}>
      <CardHeader className="pb-2">
        <CardTitle>
          <MetaText>{feature.type} {feature.id}</MetaText>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MainTitle>{feature.name}</MainTitle>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
