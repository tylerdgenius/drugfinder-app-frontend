import React from "react";
import { Link } from "react-router-dom";
import Text from "../../Text/views/Text";
import classes from "../css/Button.Module.css";

const Button = ({
  disabled,
  text,
  type,
  buttonClassName,
  className,
  onClick,
  link,
}) => {
  return (
    <>
      {!disabled && (
        <div className={`${classes.button__parent} ${className}`}>
          <button
            type={type || "button"}
            onClick={onClick}
            className={`${classes.button__child__button} ${buttonClassName}`}
          >
            {link ? (
              <Link to={link}>
                <Text content={text} />
              </Link>
            ) : (
              <Text content={text} />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
