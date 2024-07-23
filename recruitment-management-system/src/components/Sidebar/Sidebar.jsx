import "../Sidebar/Sidebar.scss";


const Sidebar = ({children}) => {
  return (
    <aside className="side-bar-container">
      <div className="side-bar__buttons-container">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
