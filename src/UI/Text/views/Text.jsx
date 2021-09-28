import React from "react";
import classes from "../css/Text.Module.css";

const Text = ({ content, className, paraClassName }) => {
  return (
    <div className={`${classes.text_parent} ${className}`}>
      <p className={`${classes.text__child__paragraphText} ${paraClassName}`}>
        {content}
      </p>
    </div>
  );
};

export default Text;
