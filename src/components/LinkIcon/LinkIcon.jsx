import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkIcon = ({ className, icon, url }) => {
  console.log(className);
  return (
    <a className="flex items-center" href={url}>
      <FontAwesomeIcon className={className} icon={icon} />
    </a>
  );
};

export default LinkIcon;
