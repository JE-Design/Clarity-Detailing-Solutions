import React from "react";
import "./Card.scss";

const Card = ({ children, className, empty }) => {
  return (
    <div
      className={`${className} card relative z-10 md:p-8 py-2 flex text-left flex-col`}
    >
      <div
        className={`inner-container flex-auto m-0 md:-m-3 ${
          empty ? "" : "p-6"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
