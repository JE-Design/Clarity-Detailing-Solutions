import React from "react";
import { landing_image } from "assets/";
import "./LandingPage.scss";

const LandingPage = () => (
  <div
    className="w-full flex landing-page"
    style={{ backgroundImage: `url(${landing_image})` }}
  >
    <div className="self-end">
      <h1 class="text-4xl">Clarity Detailing Solutions</h1>
      <h2 class="text-3xl">It's all in the details</h2>
    </div>
  </div>
);

export default LandingPage;
