import React from "react";
import { landing_image } from "assets/";
import "./Service.scss";

const Service = () => {
  return (
    <div id="service">
      <div
        id="service-image"
        className="bg-cover w-full h-64 bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${landing_image})` }}
      >
        <div className="p-4">
          <h3 className="title">Lorem ipsum dolor sit amet</h3>
          <p className="subtitle">Lorem ipsum dolor sit amet</p>
        </div>
        <p className="price self-end p-4">79$</p>
      </div>
      <div id="service-text" className="pt-3">
        <h4 className="title">Lorem ipsum dolor sit amet</h4>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula
          lectus vitae risus pulvinar, non iaculis ex vulputate. Pellentesque
          elementum accumsan diam quis facilisis. Nullam suscipit consequat
          vulputate. In ac tortor enim. .
        </p>
      </div>
    </div>
  );
};

export default Service;
