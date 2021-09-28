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
    <div className={`${className} ${classes.input__top} `}>
      <input
        type={type ? type : "text"}
        name={name ? name : ""}
        id={id ? id : ""}
        onChange={onChange ? onChange : () => {}}
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
