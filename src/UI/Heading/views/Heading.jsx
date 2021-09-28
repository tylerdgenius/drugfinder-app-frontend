import React from "react";
import classes from "../css/Heading.Module.css";

const HeadingH3 = ({ content, className, headingClassName }) => {
  return (
    <div className={`${classes.heading__parent} ${className}`}>
      <h3 className={`${classes.heading__child__heading} ${headingClassName}`}>
        {content}
      </h3>
    </div>
  );
};

export default HeadingH3;
