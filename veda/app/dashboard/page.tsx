"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "../actions/actions"
import Breadcrumb from '../components/Breadcrumb';
import Chat from '../components/Chat';
import AnalysisWidgets from '../components/AnalysisWidgets';
import FeatureSection from '../components/featureSection/FeatureSection';

const DashboardPage: React.FC = () => {

  const [parentId, setParentId] = useState<string | null>(null)

  const [feature, setFeature] = useState<Feature | null>(null)
  const [subFeatures, setSubFeatures] = useState<Feature[]>([])

  useEffect(() => {
    const fetchFeatures = async () => {
      const feature = parentId ? await getFeature(parentId) : null
      const subFeatures = await getFeatures(parentId)
      setFeature(feature)
      setSubFeatures(subFeatures)
    }
    fetchFeatures()
  }, [parentId])

  return (
    <>
      <Breadcrumb
        feature={feature}
        setParentId={setParentId} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
        <FeatureSection
          feature={feature}
          subFeatures={subFeatures}
          setParentId={setParentId}
        />
        <AnalysisWidgets feature={feature} features={subFeatures} />
      </div>
      <Chat
        feature={feature}
        features={subFeatures}
        setFeature={setFeature}
        setFeatures={setSubFeatures} />
    </>
  )
}

export default DashboardPage
