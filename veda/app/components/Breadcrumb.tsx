"use client"

import React, { useState, useEffect } from 'react';
import { Feature } from '../actions/actions';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BreadcrumbProps {
    feature: Feature | null;
    setParentId: (id: string | null) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ feature, setParentId }) => {
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

    // Implementa qui la logica per renderizzare il breadcrumb
    // e gestire il click su un elemento del breadcrumb

    return (
        <Card className='flex flex-wrap gap-2 items-center p-1 justify-between'>
            <div className='flex flex-wrap gap-2 items-center'>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setParentId(null)}
                >
                    <Home className="h-4 w-4" />
                </Button>
                {breadcrumb.length > 0 && <p>/</p>}
                {breadcrumb.map((item, index) => (
                    <div key={item.id} className='flex items-center space-x-1'>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setParentId(item.id)}
                        >
                            {item.name}
                        </Button>
                        {index !== breadcrumb.length - 1 && <p>/</p>}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Breadcrumb;
