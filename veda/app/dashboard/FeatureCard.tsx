import React from 'react'
import { Feature } from './actions'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MetaText, MainTitle, BodyText } from "../components/typography"

interface FeatureCardProps {
  feature: Feature
  setParentId: (id: string) => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, setParentId }) => {
  return (
    <Card className="hover:bg-accent cursor-pointer" onClick={() => setParentId(feature.id)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex flex-col gap-1">
          <MetaText>{feature.type} {feature.id}</MetaText>
          <MainTitle>{feature.name}</MainTitle>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <BodyText>{feature.description}</BodyText>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
