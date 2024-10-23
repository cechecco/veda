import React, { useEffect, useState } from "react";
import { Feature } from "./actions";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { MainTitle, Subtitle, BodyText, MetaText } from "../components/typography";

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
                <CardTitle>
                    <MetaText>
                        {feature ? `${feature.type} ${feature.id}` : "Company"}
                    </MetaText>
                </CardTitle>
                <MainTitle>
                    {feature ? feature.name : "ABC"}
                </MainTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                
                {!feature && (
                    <MetaText>
                        This is your company dashboard. Here you can manage your company projects
                    </MetaText>
                )}
                {feature && (
                    <><MetaText>Description</MetaText><BodyText>
                        {description}
                    </BodyText></>
                )}
            </CardContent>
        </Card>
    );
};

export default FeatureHeader;
