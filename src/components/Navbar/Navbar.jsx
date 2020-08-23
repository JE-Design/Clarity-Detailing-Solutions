import React from "react";
import "./Navbar.scss";

import { logo_image } from "assets/";

const Navbar = () => {
    return (
        <header className="z-20 fixed flex flex-col w-full">
            <nav className="relative flex w-full p-6">
                <a href="/" className="w-1/3 sm:w-24 mr-4">
                    <img src={logo_image} alt="logo"></img>
                </a>
                <div id="nav-content" className="flex items-center">
                    <h2 className="pr-3">Clarity Detailing Solutions</h2>
                    <span className="h-16"></span>
                    <a href="/services" className="p-3">
                        Services
                    </a>
                    <a href="/testimonials" className="p-3">
                        Testimonials
                    </a>
                    <a href="/contact" className="p-3">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
