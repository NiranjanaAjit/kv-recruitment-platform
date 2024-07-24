import "../Content Header/ContentHeader.scss";

const ContentHeader = ({ title, children }) => {
  return (
    <div className="header-container">
      <div className="header-underline">
        <h1 className="header-title">{title}</h1>
      </div>
      <div className="header-buttons">{children}</div>
    </div>
  );
};

export default ContentHeader;
