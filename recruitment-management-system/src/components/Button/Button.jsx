import React from "react";

const Button = ({ text, type, id, handleSubmit, className }) => {
  return (
    <button className={className} type={type} id={id} onClick={handleSubmit}>
      {text}
    </button>
  );
};

export default Button;
