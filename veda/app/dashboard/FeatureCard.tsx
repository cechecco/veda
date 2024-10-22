import React from 'react'
import { Feature } from './actions'
import { Button } from "@/components/ui/button"
import { ArrowRight, Folder } from "lucide-react"

interface FeatureCardProps {
  feature: Feature
  index: number
  setParentId: (id: string) => void
  isLast: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, setParentId, isLast }) => {
  return (
      <div className="flex-grow overflow-hidden">
        <h3 className="text-lg font-semibold truncate hover:underline cursor-pointer" onClick={() => setParentId(feature.id)}>{feature.name}</h3>
        <p className="text-sm text-gray-600 truncate">{feature.description}</p>
      </div>
  )
}

export default FeatureCard
