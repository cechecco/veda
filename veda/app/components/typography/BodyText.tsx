import React from 'react';

interface BodyTextProps {
  children: React.ReactNode;
}

const BodyText: React.FC<BodyTextProps> = ({ children }) => {
  return <span className="text-sm text-muted-foreground">{children}</span>;
};

export default BodyText;
