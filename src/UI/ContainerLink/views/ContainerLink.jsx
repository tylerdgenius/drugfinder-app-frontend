import React from "react";
import classes from "../css/ContainerLink.Module.css";

const ContainerLink = (props) => {
  return (
    <div
      className={`${classes.container__parent} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ContainerLink;
