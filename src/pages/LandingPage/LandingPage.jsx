import React from "react";
import { landing_image } from "assets/";
import { about_landing_image } from "assets/";
import "./LandingPage.scss";

const LandingPage = () => (
    <>
        <div
            className="w-full flex landing-page bg-cover bg-right"
            style={{ backgroundImage: `url(${landing_image})` }}
        >
            <div className="p-6 self-end text-left">
                <h1>Clarity Detailing Solutions</h1>
                <h2>It's all in the details</h2>
            </div>
        </div>
        <div
            id="about-us"
            className="w-full flex bg-cover bg-right"
            style={{ backgroundImage: `url(${about_landing_image})` }}
        >
            <div className="p-6 flex self-center">
                <h2 className="self-center w-1/2">About Us</h2>
                <p className="text-left mr-10 w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra ipsum non leo placerat vulputate. Etiam lobortis feugiat mauris, nec lobortis risus auctor sit amet amenet numet. </p>
            </div>
        </div>
    </>
);

export default LandingPage;
