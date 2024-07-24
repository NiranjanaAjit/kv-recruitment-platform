import React from "react";
import "./Select.scss";
const Select = ({
  name,
  options,
  placeholder,
  value,
  className,
  handleChange,
  newPositionButton,
  handleAddNew
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{placeholder}</label>
      <select
        name={name}
        onChange={handleChange}
        value={value}
        className={className ? className : "select-box"}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.display}
          </option>
        ))}
        <option value=""  onClick={handleAddNew} style={{display: newPositionButton ? "block" : "none"}}>
        + Add new position
        </option>
      </select>
    </div>
  );
};

export default Select;
