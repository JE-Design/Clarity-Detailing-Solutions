import React from "react";
import { Card } from "components/";
import "./Testimonial.scss";

const Testimonial = ({
  className,
  customerName,
  customerTestimony,
  customerPhoto,
  carPhotos,
}) => (
  <Card className={className}>
    <div className="testimony-content">
      <div className="flex">
        <h3 className="w-11/12">{customerName}</h3>
        <img
          className="rounded-full h-16 w-16 mb-2"
          src={customerPhoto}
          alt="customer"
        ></img>
      </div>
      <p>{customerTestimony}</p>
      <a href="#">Five star review on yelp</a>
      <div>
      {carPhotos.map((photoPath) => {
        return <img className="w-full mt-5" src={photoPath}></img>;
      })}
      </div>
    </div>
  </Card>
);

export default Testimonial;
