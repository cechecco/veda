"use client"

import React, { useEffect, useState } from "react"
import { Feature, getFeature, getFeatures } from "./actions"
import Breadcrumb from './Breadcrumb';
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="p-2 m-2">
        <Accordion type="single" collapsible className="w-full [&>*]:border-b-0 [&>*]:m-0 [&>*]:p-0">
          <AccordionItem value="description">
            <AccordionTrigger className="p-0">
              <p className="text-lg font-bold">{feature ? feature.name : "My company"}</p>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              <p className="text-muted-foreground">
                {feature
                  ? feature.description
                  : "This is your company dashboard. Here you can manage your company features and users."}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {
        subFeatures.map((feature, i) => (
          <Card key={feature.id} className="p-2 m-2">
            <div className="w-full flex justify-between items-top">
              <p className="text-muted-foreground text-xs">{feature.parentId ? "feature" : "project"} {i + 1} - @{feature.id}</p>
            <Button variant="outline" size="icon" onClick={() => setParentId(feature.id)} className="flex-grow-0">
              <ArrowRight className="h-4 w-4" />
            </Button>
            </div>
            <Accordion type="single" collapsible className="w-full [&>*]:border-b-0 [&>*]:m-0 [&>*]:p-0">
                <AccordionItem value="description">
                  <AccordionTrigger className="p-0">
                    <p className="text-lg font-bold">{feature.name}</p>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
          </Card>
        ))
      }
    </Card>
  )
}

export default DashboardPage
