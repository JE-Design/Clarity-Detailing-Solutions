import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MenuIcon } from "components";
import "./Navbar.scss";

import { logo_image } from "assets/";

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState("#10101000");
    const location = useLocation();
    const options = ["Services", "Testimonials", "Contact"];

    // update navbar color on scroll
    window.addEventListener("scroll", () => {
        // if scroll is not at 0
        if (window.scrollY > 0) setNavbarColor(`#101010`);
        // if scroll is at zero, make navbar transparent
        else setNavbarColor("transparent");
    });
    return (
        <header
            className="z-20 fixed flex flex-col w-full"
            style={{
                backgroundColor: navbarColor,
                transition: "background-color 0.5s",
            }}
        >
            <div id="nav-content" className="relative flex items-center p-6">
                <Link to="/" className="w-20 sm:w-24 mr-4">
                    <img src={logo_image} alt="logo"></img>
                </Link>
                <h2 className="pr-3 w-5/6 md:w-auto text-left">Clarity Detailing Solutions</h2>
                <span className="hidden md:inline h-16"></span>
                <nav className="flex items-center">
                    <div className="hidden md:block">
                        {options.map((option, key) => {
                            let path = "/" + option.toLowerCase();
                            return (
                                <Link
                                    key={key}
                                    to={path}
                                    className="p-3"
                                    style={
                                        location.pathname === path
                                            ? {
                                                  textDecoration: "underline",
                                                  fontWeight: "bold",
                                              }
                                            : {}
                                    }
                                >
                                    {option}
                                </Link>
                            );
                        })}
                    </div>
                    <div>
                        <MenuIcon
                            className="icon mx-5 my-2 block md:hidden"
                            icon={["fa", "bars"]}
                            options={options}
                        ></MenuIcon>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
