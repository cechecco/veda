"use client"

import React, { useState, useEffect } from 'react';
import { Feature } from '../actions/actions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Chat from './Chat';  // Import the Chat component

interface BreadcrumbProps {
    feature: Feature | null;
    setParentId: (id: string | null) => void;
    subFeatures: Feature[];  // Add this prop
    setFeature: React.Dispatch<React.SetStateAction<Feature | null>>;  // Add this prop
    setSubFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;  // Add this prop
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
    feature, 
    setParentId, 
    subFeatures, 
    setFeature, 
    setSubFeatures 
}) => {
    const [breadcrumb, setBreadcrumb] = useState<Feature[]>([]);

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
            setBreadcrumb([]);
        }
    }, [feature]);

    const Triangle = () => (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L6 3L0 6V0Z" fill="currentColor" />
        </svg>
    );

    return (
        <Card className='flex flex-wrap gap-2 items-center p-1 justify-between sticky top-0 z-10'>
            <div className='flex flex-wrap gap-2 items-center'>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setParentId(null)}
                >
                    /
                </Button>
                {breadcrumb.length > 0 && <Triangle />}
                {breadcrumb.map((item, index) => (
                    <div key={item.id} className='flex items-center space-x-1'>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setParentId(item.id)}
                        >
                            {item.name}
                        </Button>
                        {index !== breadcrumb.length - 1 && <Triangle />}
                    </div>
                ))}
            </div>
            <Chat
                feature={feature}
                features={subFeatures}
                setFeature={setFeature}
                setFeatures={setSubFeatures}
            />
        </Card>
    );
};

export default Breadcrumb;
