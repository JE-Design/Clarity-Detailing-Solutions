import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.scss";

import { logo_image } from "assets/";

const Navbar = (props) => {
  const [navbarColor, setNavbarColor] = useState("#10101000");
  const location = useLocation();

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
      <nav className="relative flex w-full p-6">
        <Link to="/" className="w-1/3 sm:w-24 mr-4">
          <img src={logo_image} alt="logo"></img>
        </Link>
        <div id="nav-content" className="flex items-center">
          <h2 className="pr-3">Clarity Detailing Solutions</h2>
          <span className="h-16"></span>
          <Link
            to="/services"
            className="p-3"
            style={
              location.pathname === "/services"
                ? {
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }
                : {}
            }
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="p-3"
            style={
              location.pathname === "/testimonials"
                ? {
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }
                : {}
            }
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="p-3"
            style={
              location.pathname === "/contact"
                ? {
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }
                : {}
            }
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
