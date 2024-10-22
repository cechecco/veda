import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { Feature } from "./actions";

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
        <div className="p-2">
            {feature && (
                <p className="text-xs text-muted-foreground italic">{feature.type} {feature.id}</p>
            )}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">
                        {feature ? feature.name : "My company"}
                    </p>
                </div>
                <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <div className="p-4">
                <p className="text-muted-foreground text-xs">description</p>
                {feature ? (
                    <textarea
                        className="w-full p-2 text-sm border rounded resize-none"
                        value={description}
                        onChange={handleDescriptionChange}
                        style={{ height: 'auto', overflow: 'hidden' }}
                        ref={(textarea) => {
                            if (textarea) {
                                textarea.style.height = 'auto';
                                textarea.style.height = textarea.scrollHeight + 'px';
                            }
                        }}
                    />
                ) : (
                    <p className="text-justify">This is your company dashboard. Here you can manage your company projects</p>
                )}
            </div>
        </div>
    );
};

export default FeatureHeader;
