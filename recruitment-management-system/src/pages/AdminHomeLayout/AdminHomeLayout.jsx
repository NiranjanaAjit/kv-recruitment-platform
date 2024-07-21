import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AdminHomeLayout.scss";
const AdminHomeLayout = () => {
  return (
    <>
      <div className="homeLayoutContainer">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    </>
  );
};

export default AdminHomeLayout;
