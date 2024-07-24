import "./Modal.scss";

const Modal = ({
  buttonStyle,
  onClose,
  value,
  style,
  onSubmit,
  children,
  className,
}) => {
  return (
    <>
      <div className="modal--outsidebox">
        <div className={`modal--insidebox ${className}`}>
          <div className="modal--close" onClick={onClose}>
            x
          </div>
          <div className="modal--content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
