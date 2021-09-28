import React from "react";
import classes from "../css/Container.Module.css";

const Container = (props) => {
  return (
    <div className={`${classes.container__parent} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
