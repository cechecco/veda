"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "./actions"
import Breadcrumb from './Breadcrumb';
import FeatureList from './FeatureList';
import FeatureHeader from './FeatureHeader';

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
    <div className="p-2">
      <Breadcrumb
        breadcrumb={breadcrumb}
        setParentId={setParentId}
      />
      <FeatureHeader feature={feature} />
      <FeatureList
        features={subFeatures}
        setParentId={setParentId}
      />
    </div>
  )
}

export default DashboardPage
