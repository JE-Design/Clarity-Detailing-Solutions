import React from "react";
import { landing_image } from "assets/";
import "./Service.scss";

const Service = ({ title, subtitle, price, secondTitle, content }) => {
  return (
    <div id="service" className="p-2">
      <div
        id="service-image"
        className="bg-cover w-full h-64 bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${landing_image})` }}
      >
        <div className="p-4">
          <h3 className="title">{title}</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
        <p className="price self-end p-4">{price}$</p>
      </div>
      <div id="service-text" className="pt-3">
        <h4 className="title">{secondTitle}</h4>
        <p className="text">{content}</p>
      </div>
    </div>
  );
};

export default Service;
