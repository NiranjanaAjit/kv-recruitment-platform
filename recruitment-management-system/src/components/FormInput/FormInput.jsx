import React from "react";

const FormInput = ({
  label,
  type,
  name,
  handleFocus,
  handleBlur,
  handleChange,
  style,
  value,
  error,
  disable = false,
}) => {
  console.log(value);

  const onChange = (e) => {
    if (handleChange) handleChange(e);
  };
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value || ""}
        style={error ? { ...style, borderColor: "red" } : style}
        disabled={disable}
      />
    </div>
  );
};

export default FormInput;
