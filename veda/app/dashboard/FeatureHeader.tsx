import React, { useEffect, useState } from "react";
import { Feature } from "./actions";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface FeatureHeaderProps {
    feature: Feature | null;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({ feature }) => {
    const [description, setDescription] = useState(feature?.description || "");

    useEffect(() => {
        setDescription(feature?.description || "");
    }, [feature]);

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
                    {feature ? `${feature.type} ${feature.id}` : "Company"}
                </CardTitle>
                <h2 className="text-2xl font-bold">
                    {feature ? feature.name : "ABC"}
                </h2>
            </CardHeader>
            <CardContent>
                <h3 className="text-sm font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">
                    {feature
                        ? description
                        : "This is your company dashboard. Here you can manage your company projects"}
                </p>
            </CardContent>
        </Card>
    );
};

export default FeatureHeader;
