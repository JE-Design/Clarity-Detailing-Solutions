import React from "react";
import { landing_image } from "assets/";
import "./LandingPage.scss";

const LandingPage = () => (
  <div
    className="w-full landing-page"
    style={{ backgroundImage: `url(${landing_image})` }}
  >
    <p>hello</p>
  </div>
);

export default LandingPage;
