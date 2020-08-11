import React from "react";
import { landing_image } from "assets/";
import "./LandingPage.scss";

const LandingPage = () => (
  <div
    className="w-full flex landing-page"
    style={{ backgroundImage: `url(${landing_image})` }}
  >
    <div className="p-6 self-end text-left">
      <h1>Clarity Detailing Solutions</h1>
      <h2>It's all in the details</h2>
    </div>
  </div>
);

export default LandingPage;
