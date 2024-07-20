import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
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
