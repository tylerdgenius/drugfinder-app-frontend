import React from "react";
import classes from "../css/TextArea.Module.css";

const TextArea = ({
  placeholder,
  name,
  textClassName,
  className,
  id,
  maxLength,
  required,
  rows,
  cols,
  disabled,
  wrap,
  value,
  onChange,
}) => {
  return (
    <div className={`${classes.textarea__parent} ${className}`}>
      <textarea
        className={`${classes.text__child} ${textClassName}`}
        placeholder={placeholder}
        name={name}
        value={value}
        maxLength={maxLength}
        id={id}
        rows={rows}
        cols={cols}
        required={required}
        disabled={disabled}
        wrap={wrap}
        onChange={onChange ? onChange : () => {}}
      ></textarea>
    </div>
  );
};

export default TextArea;
