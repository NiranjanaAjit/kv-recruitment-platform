import React from "react";

const Button = ({ text, type, id, handleSubmit, className }) => {
  return (
    <button
      className={className}
      type={type}
      id={id}
      onClick={handleSubmit}
      data-testid="button-test-id"
    >
      {text}
    </button>
  );
};

export default Button;
