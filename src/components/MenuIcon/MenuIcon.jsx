import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./MenuIcon.scss";

const MenuIcon = ({ className, icon, options }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleMenuClick = (e) => {
        setDropdownOpen(!dropdownOpen);
    };
    if (dropdownOpen)
        setTimeout(() => {
            setDropdownOpen(false);
        }, 3000);
    return (
        <div>
            <button
                className="link-icon flex items-center"
                rel="noopener noreferrer"
                onClick={handleMenuClick}
            >
                <FontAwesomeIcon className={className} icon={icon} />
            </button>
            {dropdownOpen ? (
                <ul className="fixed top-0 right-0 mt-20 mr-12 p-2 text-right">
                    {options.map((option, key) => {
                        let path = "/" + option.toLowerCase();
                        return (
                            <li key={key}>
                                <Link to={path} className="p-3">
                                    {option}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export default MenuIcon;
