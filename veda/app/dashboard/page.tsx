"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "../actions/actions"
import { getAnalysis, Analysis } from "../actions/analysisActions"
import Breadcrumb from '../components/Breadcrumb';
import AnalysisWidgets from '../components/AnalysisWidgets';
import FeatureSection from '../components/featureSection/FeatureSection';

const DashboardPage: React.FC = () => {

  const [parentId, setParentId] = useState<string | null>(null)

  const [feature, setFeature] = useState<Feature | null>(null)
  const [subFeatures, setSubFeatures] = useState<Feature[]>([])
  const [analysis, setAnalysis] = useState<Analysis>({
    riceScores: {
      features: []
    },
    moscowAnalysis: {
      features: []
    },
    feedback: {
      feedback: "", list: []
    }
  })

  useEffect(() => {
    const fetchFeatures = async () => {
      const feature = parentId ? await getFeature(parentId) : null
      const subFeatures = await getFeatures(parentId)
      const analysis = await getAnalysis(feature)
      setFeature(feature)
      setSubFeatures(subFeatures)
      setAnalysis(analysis)
    }
    fetchFeatures()
  }, [parentId])

  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Breadcrumb
          feature={feature}
          setParentId={setParentId}
          subFeatures={subFeatures}
          setFeature={setFeature}
          setSubFeatures={setSubFeatures}
        />
      </div>
      <div className="flex-1 overflow-y-auto md:overflow-hidden">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:h-full">
          <div className="md:overflow-y-auto md:h-full">
            <FeatureSection
              feature={feature}
              subFeatures={subFeatures}
              setParentId={setParentId}
            />
          </div>
          <div className="md:overflow-y-auto md:h-full">
            <AnalysisWidgets feature={feature} features={subFeatures} analysis={analysis} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
