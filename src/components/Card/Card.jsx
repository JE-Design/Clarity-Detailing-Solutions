import React from "react";
import "./Card.scss";

const Card = ({ children, className }) => {
  return (
    <div className={`${className} card p-8 flex text-left flex-col`}>
      <div className="inner-container p-6">{children}</div>
    </div>
  );
};

export default Card;
