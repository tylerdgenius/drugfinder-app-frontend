import React from "react";
import classes from "../css/Input.Module.css";

const Input = ({
  type,
  className,
  value,
  onChange,
  name,
  id,
  inputClassName,
  placeholder,
}) => {
  return (
    <div className={`${classes.input__top} ${className}`}>
      <input
        type={type ? type : "text"}
        name={name ? name : ""}
        id={id ? id : ""}
        onChange={
          onChange
            ? onChange
            : () => {
                console.log("Button was clicked");
              }
        }
        value={value ? value : ""}
        className={`${classes.input__child__input} ${
          inputClassName ? inputClassName : ""
        }`}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default Input;
