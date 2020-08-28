import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MenuIcon } from "components";
import debounce from "lodash.debounce";
import "./Navbar.scss";

import { logo_image } from "assets/";

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState("#10101000");
    const [openMenu, setOpenMenu] = useState(false);
    const [top, setTop] = useState("0px");
    const location = useLocation();
    const options = ["Services", "Testimonials", "Contact"];

    let scrollPos = window.pageYOffset;
    let scrollPercentage = Math.floor((scrollPos / window.innerHeight) * 100)
    const updateStuff = (prevScrollPos, cancel) => {
        let currentScrollPos = window.pageYOffset;
        if (
            // Support for tablets and mobile devices
            prevScrollPos < 0 ||
            currentScrollPos < 0 ||
            prevScrollPos > currentScrollPos ||
            (prevScrollPos === 0 && currentScrollPos === 0)
        ) {
            setTop("0px");
        } else {
            if (location.pathname === "/") {
                if (scrollPercentage > 20) {
                    setTop("-180px");
                    setOpenMenu(false);
                }
            } else {
                setTop("-180px");
                setOpenMenu(false);
            }
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
            { maxWait: 500 }
        )
    );

    if (openMenu) {
        if (navbarColor === "#10101000" || navbarColor === "transparent")
            setNavbarColor(`#101010`);
    } else {
        if (scrollPos === 0 && navbarColor !== "transparent") {
            setNavbarColor("transparent");
        }
    }

    return (
        <header
            className="z-20 fixed flex flex-col w-full"
            id="navbar"
            style={{
                backgroundColor: navbarColor,
                top: top,
                transition: "all 0.5s ease-in-out",
            }}
        >
            <div id="nav-content" className="relative flex items-center p-6">
                <Link
                    to="/"
                    className="w-24 mr-4"
                    onClick={() => {
                        setOpenMenu(false);
                        setNavbarColor("transparent");
                    }}
                >
                    <img src={logo_image} alt="logo"></img>
                </Link>
                <h2 className="pr-3 hidden sm:block w-5/6 md:w-auto text-left">
                    Clarity Detailing Solutions
                </h2>
                <span className="w-5/6 block sm:hidden"></span>
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
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                        ></MenuIcon>
                    </div>
                </nav>
            </div>
            <ul
                className="z-20 -mt-5 pb-5 pr-5 text-center block md:hidden"
                style={openMenu ? { height: "block" } : { display: "none" }}
            >
                {options.map((option, key) => {
                    let path = "/" + option.toLowerCase();
                    return (
                        <li key={key}>
                            <Link
                                to={path}
                                className="p-3"
                                onClick={() => {
                                    setOpenMenu(false);
                                    setNavbarColor("transparent");
                                }}
                            >
                                {option}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};

export default Navbar;
