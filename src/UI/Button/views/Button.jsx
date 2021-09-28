import React from "react";
import Text from "../../Text/views/Text";
import classes from "../css/Button.Module.css";

const Button = ({
  disabled,
  text,
  type,
  buttonClassName,
  className,
  onClick,
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
            <Text content={text} />
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
