"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "./actions"
import Breadcrumb from './Breadcrumb';
import FeatureList from './FeatureList';
import FeatureHeader from './FeatureHeader';
import Chat from './Chat';
import AnalysisWidgets from './AnalysisWidgets';

const DashboardPage: React.FC = () => {

  const [parentId, setParentId] = useState<string | null>(null)

  const [feature, setFeature] = useState<Feature | null>(null)
  const [subFeatures, setSubFeatures] = useState<Feature[]>([])

  const [breadcrumb, setBreadcrumb] = useState<Feature[]>([])

  useEffect(() => {
    const fetchFeatures = async () => {
      const feature = parentId ? await getFeature(parentId) : null
      const subFeatures = await getFeatures(parentId)
      setFeature(feature)
      setSubFeatures(subFeatures)
    }
    fetchFeatures()
  }, [parentId])

  useEffect(() => {
    if (feature) {
      setBreadcrumb(prevBreadcrumb => {
        const featureIndex = prevBreadcrumb.findIndex(item => item.id === feature.id);
        if (featureIndex !== -1) {
          return prevBreadcrumb.slice(0, featureIndex + 1);
        } else {
          return [...prevBreadcrumb, feature];
        }
      });
    } else {
      setBreadcrumb([])
    }
  }, [feature])

  return (
    <>
      <Breadcrumb
        breadcrumb={breadcrumb}
        setParentId={setParentId} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
        <div className="flex flex-col gap-2">
          <FeatureHeader feature={feature} />
          <FeatureList
            feature={feature}
            features={subFeatures}
            setParentId={setParentId} />
        </div>
        <AnalysisWidgets feature={feature} features={subFeatures} />
        <Chat
          feature={feature}
          features={subFeatures}
          setFeature={setFeature}
          setFeatures={setSubFeatures} />
      </div>
    </>
  )
}

export default DashboardPage
