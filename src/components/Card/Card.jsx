import React from "react";
import "./Card.scss";

const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} card relative z-10 p-8 flex text-left flex-col`}
    >
      <div className="inner-container -m-3 p-6">{children}</div>
    </div>
  );
};

export default Card;
