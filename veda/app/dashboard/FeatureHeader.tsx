import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { Feature } from "./actions";

interface FeatureHeaderProps {
    feature: Feature | null;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({ feature }) => {
    return (
        <>
            <div className="p-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">
                        {feature ? feature.name : "My company"}
                    </p>
                    {feature && (
                        <Button variant="outline" size="icon">
                            <Pencil className="h-4 w-4" />
                        </Button>
                    )}
                </div>
                <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <p className="text-muted-foreground p-2 text-justify">
                {feature
                    ? feature.description
                    : "This is your company dashboard. Here you can manage your company projects"}
            </p>
        </>
    );
};

export default FeatureHeader;
