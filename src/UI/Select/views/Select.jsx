import React from "react";
import classes from "../css/Select.Module.css";

const Select = ({
  name,
  values,
  className,
  selectClassName,
  optionClassName,
  placeholder,
  onChange,
}) => {
  return (
    <div className={`${classes.select__parent} ${className}`}>
      <select
        name={name}
        placeholder={placeholder}
        className={`${classes.select__child__select} ${selectClassName}`}
        onChange={onChange}
      >
        {values.map((value) => {
          return (
            <option
              value={value.optionValues}
              className={`${classes.select__child__option} ${optionClassName}`}
            >
              {value.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
