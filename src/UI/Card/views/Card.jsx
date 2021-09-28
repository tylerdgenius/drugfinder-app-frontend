import React from "react";
import classes from "../css/Card.Module.css";

const Card = (props) => {
  return (
    <div style={props.style} className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
