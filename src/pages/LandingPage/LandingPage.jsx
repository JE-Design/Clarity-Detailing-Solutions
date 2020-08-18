import React from "react";
import { landing_image, contact_image } from "assets/";
import variables from "styles/colors.scss";
import "./LandingPage.scss";

const LandingPage = () => (
  <div>
    <div
      id="landing-header"
      className="w-full flex bg-cover bg-right"
      style={{ backgroundImage: `url(${landing_image})` }}
    >
      <div className="p-6 self-end text-left">
        <h1>Clarity Detailing Solutions</h1>
        <h2>It's all in the details</h2>
      </div>
    </div>
    <div
      id="contact-section"
      className="w-full flex justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${variables.colorBlack}, transparent 4%, transparent 96%, ${variables.colorBlack}), url(${contact_image})`,
      }}
    >
      <div className="p-6 self-center">
        <h3>Need a Quote?</h3>
        <a href="/contact">
          <h4>Contact Us</h4>
        </a>
      </div>
    </div>
  </div>
);

export default LandingPage;
