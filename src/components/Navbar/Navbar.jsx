import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./Navbar.scss";

import { logo_image } from "assets/";

const Navbar = (props) => {
  const [navbarColor, setNavbarColor] = useState("#10101000");
  const [top, setTop] = useState("0px");
  const location = useLocation();

  let scrollPos = window.pageYOffset;
  const updateStuff = (prevScrollPos, cancel) => {
    let currentScrollPos = window.pageYOffset;
    if (
      prevScrollPos > currentScrollPos ||
      (prevScrollPos === 0 && currentScrollPos === 0)
    ) {
      setTop("0px");
    } else {
      setTop("-180px");
    }
    prevScrollPos = window.pageYOffset;
    // if scroll is not at 0
    if (window.scrollY > 0) {
      setNavbarColor(`#101010`);
    }
    // if scroll is at zero, make navbar transparent
    else setNavbarColor("transparent");
  };
  // update navbar color on scroll
  window.addEventListener(
    "scroll",
    debounce(
      function () {
        updateStuff(scrollPos, this.cancel);
      },
      500,
      { leading: true, maxWait: 500 }
    )
  );
  return (
    <header
      className="z-20 fixed flex flex-col w-full"
      id="navbar"
      style={{
        backgroundColor: navbarColor,
        transition: "background-color 0.5s",
        top: top,
        transition: "all 0.5s ease-in-out",
      }}
    >
      <nav className="relative flex w-full p-6">
        <Link to="/" className="w-1/3 sm:w-24 mr-4">
          <img src={logo_image} alt="logo"></img>
        </Link>
        <div id="nav-content" className="flex items-center">
          <Link to="/" className="pr-3">
            <h2>Clarity Detailing Solutions</h2>
          </Link>
          <span className="divider"></span>
          <Link
            to="/services"
            className="nav-link p-3"
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
            className="nav-link p-3"
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
            className="nav-link p-3"
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
