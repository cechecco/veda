import React from "react";
import Breadcrumb from "./breadcrumb";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-4">
      <Breadcrumb />
      {children}
    </div>
  );
};

export default DashboardLayout;
