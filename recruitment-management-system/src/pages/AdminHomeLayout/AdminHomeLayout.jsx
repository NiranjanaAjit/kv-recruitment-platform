import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AdminHomeLayout.scss";
const AdminHomeLayout = () => {
  return (
    <>
      <div className="homeLayoutContainer">
        <Sidebar />
        <div className="home-layout-content">
          <div className="blank-header"></div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminHomeLayout;
