import React from "react";
import classes from "../css/Avatar.Module.css";

const AvatarComponent = ({ className, src, alt, imgClassName }) => {
  return (
    <div className={`${classes.avatar__top} ${className}`}>
      <img
        className={`${classes.avatar__child__img} ${imgClassName}`}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default AvatarComponent;
