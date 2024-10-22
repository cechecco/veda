import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { Feature } from "./actions";
import { Card } from "@/components/ui/card";

interface FeatureHeaderProps {
    feature: Feature | null;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({ feature }) => {
    const [description, setDescription] = useState(feature?.description || "");

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    useEffect(() => {
        setDescription(feature?.description || "");
    }, [feature]);

    return (
            <Card className="p-2">
            {feature ? (
                <p className="text-xs text-muted-foreground italic">{feature.type} {feature.id}</p>
            ) : (
                <p className="text-xs text-muted-foreground italic">company</p>
            )}
                <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold">
                        {feature ? feature.name : "ABC"}
                    </p>
                </div>
                <p className="text-muted-foreground text-xs px-2 p-2">description</p>
                {feature ? (
                    <p
                        className="w-full text-sm px-2 pb-2"
                    >
                        {description}
                    </p>
                ) : (
                    <p className="w-full text-sm px-2 pb-2">This is your company dashboard. Here you can manage your company projects</p>
                )}
            </Card>
    );
};

export default FeatureHeader;
