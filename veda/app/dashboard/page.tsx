"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "./actions"
import Breadcrumb from './Breadcrumb';
import { Card } from "@/components/ui/card";

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
      const featureIndex = breadcrumb.findIndex(item => item.id === feature.id);
      if (featureIndex !== -1) {
        setBreadcrumb(prevBreadcrumb => prevBreadcrumb.slice(featureIndex, prevBreadcrumb.length - 1));
      } else {
        setBreadcrumb(prevBreadcrumb => [...prevBreadcrumb, feature]);
      }
    } else {
      setBreadcrumb([])
    }
  }, [feature])

  return (
    <Card className="p-2 m-2">
      <Breadcrumb breadcrumb={breadcrumb} setParentId={setParentId} />
      {
        feature ? (
          <div className="p-2 m-2">
            <p className="text-lg font-bold">{feature.name}</p>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ) : (
          <div className="p-2 m-2">
            <p className="text-lg font-bold">My company</p>
            <p className="text-muted-foreground">This is your company dashboard. Here you can manage your company features and users.</p>
          </div>
        )
      }
      <p className="font -bold text-sm pl-4">Features</p>
      {
        subFeatures.map(feature => (
          <Card key={feature.id} onClick={() => setParentId(feature.id)} className="p-2 m-2">
            <p className="text-lg font-bold">{feature.name}</p>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))
      }
    </Card>
  )
}

export default DashboardPage
