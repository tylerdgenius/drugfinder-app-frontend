import React from "react";
import Image from "../../Image/views/Image";
import Text from "../../Text/views/Text";
import classes from "../css/MenuItem.Module.css";
import { MdDashboard } from "react-icons/md";
import LinkText from "../../Link/views/LinkIndex";
import { Link } from "react-router-dom";

const MenuItem = ({
  imgSrc,
  icon,
  text,
  to,
  className,
  imgClassName,
  textClassName,
}) => {
  return (
    <Link to={to} className={`${className} ${classes.menuItem__parent}`}>
      {icon}
      <Text
        content={text}
        paraClassName={`${classes.menuItem__child__text} ${textClassName}`}
      />
    </Link>
  );
};

export default MenuItem;
