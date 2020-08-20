import React from "react";
import "./PageContainer.scss";

const PageContainer = ({ children, className }) => {
  return <div className={`${className} p-6 page-container`}>{children}</div>;
};

export default PageContainer;
