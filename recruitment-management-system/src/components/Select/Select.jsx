import React from "react";
import "./Select.scss";
const Select = ({ name, options, placeholder, className }) => {
  return (
    <select name={name} className={`select-box ${className}`}>
      <option value="" selected disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.display}</option>
      ))}
    </select>
  );
};

export default Select;
