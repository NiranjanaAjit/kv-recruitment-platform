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
  handleAddNew,
}) => {
  const getSelectClassName = (statusOption) => {
    if (statusOption) {
      console.log(statusOption);
      const v = status?.toUpperCase();

      switch (v) {
        case "ACCEPTED":
          return "select-box-green-background";
        case "SUBMITTED":
          return "select-box-yellow-background";
        case "INTERVIEWED":
          return "select-box-blue-background";
        case "DECLINED":
          return "select-box-red-background";
        case "UNDER REVIEW":
          return "select-box-orange-background";
        default:
          return "select-box";
      }
    }
    return "select-box";
  };
  const selectClassName = getSelectClassName(value);

  return (
    <div className="input-group">
      <label htmlFor={name}>{placeholder}</label>
      <select
        name={name}
        onChange={handleChange}
        value={value}
        className={className ? className : selectClassName}
      >
        <option value="">{placeholder ? placeholder : "All"}</option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.display}
          </option>
        ))}
        <option
          value=""
          onClick={handleAddNew}
          style={{ display: newPositionButton ? "block" : "none" }}
        >
          + Add new position
        </option>
      </select>
    </div>
  );
};

export default Select;
