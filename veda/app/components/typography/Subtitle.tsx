import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <span className="text-xs font-medium">{children}</span>;
};

export default Subtitle;
