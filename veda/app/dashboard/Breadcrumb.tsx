import React from 'react';
import { Feature } from './actions';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BreadcrumbProps {
    breadcrumb: Feature[];
    setParentId: (id: string | null) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumb, setParentId }) => {
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
                {breadcrumb.map((feature, index) => (
                    <div key={feature.id} className='flex items-center space-x-1'>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setParentId(feature.id)}
                        >
                            {feature.name}
                        </Button>
                        {index !== breadcrumb.length - 1 && <p>/</p>}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Breadcrumb;
