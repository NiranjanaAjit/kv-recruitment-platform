import { forwardRef, useState } from "react";
import { RiEye2Line } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";

const TextField = forwardRef((props, ref) => {
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="login--textfield">
      <input
        ref={ref}
        type={passwordShow ? "text" : props.type}
        name={props.name}
        id={props.id}
        placeholder=""
        onChange={handleChange}
        value={props.value}
        style={
          props.error ? { ...props.style, borderColor: "red" } : props.style
        }
      />
      <label htmlFor={props.id}>{props.label}</label>
      {props.type === "password" && (
        <button
          className="eye"
          type="button"
          onClick={() => setPasswordShow((prev) => !prev)}
        >
          {passwordShow ? (
            <RiEyeCloseFill size={18} />
          ) : (
            <RiEye2Line size={18} />
          )}
        </button>
      )}
      {props.error && (
        <p
          style={{
            margin: "5px 0 0 5px",
            fontSize: "12px",
            color: "red",
            borderRadius: "4px",
          }}
        >
          {props.error}
        </p>
      )}
    </div>
  );
});

export default TextField;
