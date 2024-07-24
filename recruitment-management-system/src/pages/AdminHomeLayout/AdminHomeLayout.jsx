import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AdminHomeLayout.scss";
import { IoIosPeople } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoIosGift } from "react-icons/io";
import { PiUserListBold } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import Header from "../../components/Header/Header";

const AdminHomeLayout = () => {
  const navigate = useNavigate();
  const onClickRef = () => {
    navigate("referrals");
  };

  const onEmpCreate = () => {
    navigate("create-employee");
  };

  const onEmpList = () => {
    navigate("employeeList");
  };

  const onJobCreate = () => {
    navigate("create-job");
  };

  const onJobList = () => {
    navigate("/admin");
  };

  const onClickProfile = () => {
    navigate("profile");
  };

  return (
    <>
      <div className="homeLayoutContainer">
        <Sidebar>
          <div className="side-bar__buttons" onClick={onEmpCreate}>
            <IoIosPersonAdd className="side-bar__button__icons" />
            <h4 className="side-bar__button__labels">Employee Create</h4>
          </div>
          <div className="side-bar__buttons" onClick={onJobCreate}>
            <IoMdAdd className="side-bar__button__icons" />
            <h4 className="side-bar__button__labels">Create Job</h4>
          </div>
          <div className="side-bar__buttons" onClick={onEmpList}>
            <PiUserListBold className="side-bar__button__icons" />
            <h4 className="side-bar__button__labels">Employee List</h4>
          </div>
          <div className="side-bar__buttons" onClick={onJobList}>
            <PiSuitcaseSimpleBold className="side-bar__button__icons" />
            <h4 className="side-bar__button__labels">Job List</h4>
          </div>
          <div className="side-bar__buttons" onClick={onClickRef}>
            <IoIosPeople className="side-bar__button__icons" />{" "}
            <h4 className="side-bar__button__labels">Referrals</h4>
          </div>
          <div className="side-bar__buttons" onClick={onClickProfile}>
            {" "}
            <IoPersonCircleOutline className="side-bar__button__icons" />{" "}
            <h4 className="side-bar__button__labels">Profile</h4>
          </div>
        </Sidebar>
        <div className="home-layout-content">
          <Header/>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminHomeLayout;
