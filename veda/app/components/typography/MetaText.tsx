import React from 'react';

interface MetaTextProps {
  children: React.ReactNode;
}

const MetaText: React.FC<MetaTextProps> = ({ children }) => {
  return <span className="text-xs text-muted-foreground italic">{children}</span>;
};

export default MetaText;
