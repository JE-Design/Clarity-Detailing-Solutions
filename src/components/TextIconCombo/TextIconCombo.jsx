import React from "react";
import { LinkIcon } from "components/";

const LinkIconCombo = ({ text, textClassName, iconClassName, ...props }) => {
  return (
    <div className="flex break-all py-1">
      <LinkIcon className={`${iconClassName} mr-2 p-0`} {...props} />
      <p className={textClassName}>{text}</p>
    </div>
  );
};

export default LinkIconCombo;
