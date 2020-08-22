import React from "react";
import {
  landing_image,
  about_image,
  services_image,
  services_content1,
  services_content2,
  services_content3,
  contact_image,
} from "assets/";
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
      style={{
        backgroundImage: `linear-gradient(to top, black, transparent 8%), url(${about_image})`,
      }}
    >
      <div className="p-6 flex self-center mb-20">
        <h2 className="self-center w-1/2">About Us</h2>
        <p className="text-left mr-10 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra ipsum non leo placerat vulputate. Etiam lobortis feugiat
          mauris, nec lobortis risus auctor sit amet amenet numet.{" "}
        </p>
      </div>
    </div>
    <div
      id="services-section"
      className="w-full flex flex-col text-left bg-cover bg-bottom p-16 pt-2"
      style={{
        backgroundImage: `linear-gradient(to bottom, black, transparent 2%), url(${services_image})`,
      }}
    >
      <h2 className="p-5 text-center">Services</h2>
      <div
        id="services-section1"
        className="bg-cover relative h-full w-full mb-5 sm:mb-10 bg-center"
        style={{ backgroundImage: `url(${services_content1})` }}
      >
        <div className="absolute p-4 bottom-0 left-0">
          <h3>Interior Cleaning</h3>
          <a href="/services">Learn More</a>
        </div>
      </div>
      <div className="w-full h-full flex flex-col mb-5 sm:mb-0 sm:flex-row">
        <div
          id="services-section2"
          className="bg-cover relative flex flex-col h-full w-full sm:w-1/2 mr-10 sm:mr-5 bg-center"
          style={{ backgroundImage: `url(${services_content2})` }}
        >
          <div className="absolute p-4 bottom-0 left-0">
            <h3>Car Washing</h3>
            <a href="/services">Learn More</a>
          </div>
        </div>
        <div
          id="services-section3"
          className="bg-cover relative flex flex-col hidden sm:block h-full w-full sm:w-1/2 bg-center"
          style={{ backgroundImage: `url(${services_content3})` }}
        >
          <div className="absolute p-4 bottom-0 left-0">
            <h3>Coating</h3>
            <a href="/services">Learn More</a>
          </div>
        </div>
      </div>
      <div
        id="services-section3"
        className="bg-cover relative flex flex-col block sm:hidden h-full w-full sm:w-1/2 bg-center"
        style={{ backgroundImage: `url(${services_content3})` }}
      >
        <div className="absolute p-4 bottom-0 left-0">
          <h3>Coating</h3>
          <a href="/services">Learn More</a>
        </div>
      </div>
    </div>
    <div
      id="contact-section"
      className="w-full flex justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, black, transparent 4%, transparent 96%, ${variables.colorBlack}), url(${contact_image})`,
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
