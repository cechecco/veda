import React from 'react';

interface MainTitleProps {
  children: React.ReactNode;
}

const MainTitle: React.FC<MainTitleProps> = ({ children }) => {
  return <span className="text-xl font-bold">{children}</span>;
};

export default MainTitle;
