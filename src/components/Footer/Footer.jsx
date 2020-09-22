import React from "react";
import { logo_image } from "assets/";
import { Link } from "react-router-dom";
import { RouterPaths } from "utils";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full">
            <div
                id="top"
                className="flex items-center flex-col sm:flex-row w-full"
            >
                <nav className="relative flex w-full sm:w-4/12 p-6">
                    <ul className="w-full">
                        {Object.values(RouterPaths).map((path, key) => {
                            return (
                                (path !== "/") &&
                                    <li
                                        key={key}
                                        className="sm:text-left p-1 md:p-2"
                                    >
                                        <Link to={path}>
                                            {path.replace("/","").charAt(0).toUpperCase() +
                                                path.slice(2)}
                                        </Link>
                                    </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="flex w-4/12">
                    <Link to="/" className="m-auto w-4/6 sm:w-40">
                        <img
                            src={logo_image}
                            alt="Clarity Detailing Solutions Logo"
                        />
                    </Link>
                </div>
                <div
                    id="contact"
                    className="relative p-6 flex flex-col w-full sm:w-4/12 break-words"
                >
                    <p className="sm:text-right w-full p-1">123 Main Street</p>
                    <p className="sm:text-right w-full p-1">
                        New York, NY 10030
                    </p>
                    <p className="sm:text-right w-full p-1">905-739-2859</p>
                    <a
                        className="sm:text-right w-full p-1"
                        href="mailto:contact@claritydetailingsolutions.com"
                    >
                        contact@claritydetailingsolutions.com
                    </a>
                </div>
            </div>
            <span className="mx-10">
                <hr className="w-full my-5 linebreak" />
            </span>
            <div id="bottom" className="flex w-full p-2">
                <p className="text-center w-full p-1">
                    Copyright &copy; 2020 Clarity Detailing Solutions
                </p>
            </div>
        </footer>
    );
};

export default Footer;
