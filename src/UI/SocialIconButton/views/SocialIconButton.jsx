import React from "react";
import Text from "../../Text/views/Text";
import classes from "../css/SocialIconButton.Module.css";

const SocialIconButton = ({
  icon,
  text,
  className,
  paraClassName,
  paraParentClassName,
}) => {
  return (
    <div className={`${className} ${classes.socials__parent}`}>
      {icon}
      <Text
        content={text}
        className={`${paraParentClassName} ${classes.socials__child__text}`}
        paraClassName={paraClassName}
      />
    </div>
  );
};

export default SocialIconButton;
