import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ imagePath, title, caption }) => {
  return (
    <div
      className="page-header p-12 bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <div className="page-header-div flex flex-col text-left">
        <h1 className="page-header-title">{title}</h1>
        <h2 className="page-header-caption">{caption}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
