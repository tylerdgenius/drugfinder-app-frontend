import React from "react";
import classes from "../css/IconButton.Module.css";

const IconButton = ({ icon, className, onClick }) => {
  return (
    <div
      className={`${classes.iconButton__parent} ${className}`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default IconButton;
