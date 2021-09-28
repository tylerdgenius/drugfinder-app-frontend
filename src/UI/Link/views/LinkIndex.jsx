import React from "react";
import { Link } from "react-router-dom";
import classes from "../css/Link.Module.css";

const LinkText = ({ content, className, to }) => {
  return (
    <Link to={to} className={`${classes.link__parent} ${className}`}>
      {content}
    </Link>
  );
};

export default LinkText;
