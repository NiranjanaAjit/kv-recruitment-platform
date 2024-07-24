import "./Toast.scss";
const Toast = ({ type, message, handleClose }) => {
  const backgroundColor = type === "ERROR" ? "#d9534f" : "#5cb85c";
  return (
    <div
      className="toast notification bottom-right"
      style={{ backgroundColor }}
    >
      {/* <button onClick={handleClose}>X</button> */}
      <div>{message}</div>
    </div>
  );
};

export default Toast;
