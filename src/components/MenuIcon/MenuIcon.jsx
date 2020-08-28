import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuIcon.scss";

const MenuIcon = ({ className, icon, openMenu, setOpenMenu }) => {
    const handleMenuClick = (e) => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <button
                className="link-icon flex items-center"
                rel="noopener noreferrer"
                onClick={handleMenuClick}
            >
                <FontAwesomeIcon className={className} icon={icon} />
            </button>
        </div>
    );
};

export default MenuIcon;
