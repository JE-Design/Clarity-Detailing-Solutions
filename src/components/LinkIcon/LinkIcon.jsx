import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkIcon = ({ className, icon, url }) => {
  return (
    <Link className="flex items-center" href={url}>
      <FontAwesomeIcon className={className} icon={icon} />
    </Link>
  );
};

export default LinkIcon;
