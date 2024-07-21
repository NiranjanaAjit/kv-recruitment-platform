import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../HomeLayout/HomeLayout.scss";
const HomeLayout = () => {
  return (
    <>
      <div className="homeLayoutContainer">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
