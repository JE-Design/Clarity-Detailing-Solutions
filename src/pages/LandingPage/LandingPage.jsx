import React from "react";
import { landing_image, about_image, contact_image } from "assets/";
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
        <p>It's all in the details</p>
      </div>
    </div>
    <div
        id="about-section"
        className="w-full flex bg-cover bg-center"
        style={{ backgroundImage: `url(${about_image})` }}
    >
        <div className="p-6 flex self-center mb-20">
            <h2 className="self-center w-1/2">About Us</h2>
            <p className="text-left mr-10 w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra ipsum non leo placerat vulputate. Etiam lobortis feugiat mauris, nec lobortis risus auctor sit amet amenet numet. </p>
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
