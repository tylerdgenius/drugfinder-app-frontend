import classes from "../css/Label.Module.css";

import React from "react";

const Label = ({ htmlFor, title, className }) => {
  return (
    <label htmlFor={htmlFor} className={`${classes.label__top} ${className}`}>
      {title}
    </label>
  );
};

export default Label;
