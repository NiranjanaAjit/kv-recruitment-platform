import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EmployeeHomeLayout.scss";
const EmployeeHomeLayout = () => {
  return (
    <div className="home-layout-container">
      <Sidebar />
      <div className="home-layout-content">
        <div className="blank-header"></div>
        <Outlet/>
      </div>
    </div>
  );
};

export default EmployeeHomeLayout;
