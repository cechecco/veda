import React from 'react';
import { Feature } from './actions';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

interface BreadcrumbProps {
    breadcrumb: Feature[];
    setParentId: (id: string | null) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumb, setParentId }) => {
    return (
        <div className='flex flex-wrap gap-2 items-center p-2'>
            <Button variant="outline" size="icon" onClick={() => setParentId(null)}>
                <Home className="h-4 w-4" />
            </Button>
            {breadcrumb.length > 0 && <p>/</p>}
            {breadcrumb.map((feature, index) => (
                <>
                    <Button key={feature.id} variant="outline" onClick={() => setParentId(feature.id)}>
                        {feature.name}
                    </Button>
                    {index !== breadcrumb.length - 1 && <p>/</p>}
                </>
            ))}
        </div>
    );
};

export default Breadcrumb;
