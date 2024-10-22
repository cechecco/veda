"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "./actions"
import Breadcrumb from './Breadcrumb';
import FeatureList from './FeatureList';
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";

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
      <div className="p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold">
            {feature ? feature.name : "My company"}
          </p>
          {feature && (
            <Button
              variant="outline"
              size="icon"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button
          variant="outline"
          size="icon"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-muted-foreground p-2 text-justify">
        {feature
          ? feature.description
          : "This is your company dashboard. Here you can manage your company projects"}
      </p>
      <FeatureList
        features={subFeatures}
        setParentId={setParentId}
      />
    </div>
  )
}

export default DashboardPage
