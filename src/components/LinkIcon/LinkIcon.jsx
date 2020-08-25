import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LinkIcon.scss";

const LinkIcon = ({ className, icon, url }) => {
  return (
    <a
      className="link-icon flex items-center"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <FontAwesomeIcon className={className} icon={icon} />
    </a>
  );
};

export default LinkIcon;
