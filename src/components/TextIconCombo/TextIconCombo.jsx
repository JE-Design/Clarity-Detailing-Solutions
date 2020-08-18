import React from "react";
import { LinkIcon } from "components/";

const LinkIconCombo = ({ text, textClassName, iconClassName, ...props }) => {
  return (
    <div className="flex py-1">
      <LinkIcon className={iconClassName} {...props} />
      <p className={textClassName}>{text}</p>
    </div>
  );
};

export default LinkIconCombo;
