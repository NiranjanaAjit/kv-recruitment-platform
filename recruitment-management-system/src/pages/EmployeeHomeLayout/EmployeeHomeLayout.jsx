import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EmployeeHomeLayout.scss";
import { useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import Header from "../../components/Header/Header";

const EmployeeHomeLayout = () => {
  const navigate = useNavigate();

  const onClickRef = () => {
    navigate("referrals");
  };

  const onJobList = () => {
    navigate("/employee");
  };

  const onClickProfile = () => {
    navigate("profile");
  };

  return (
    <div className="home-layout-container">
      <Sidebar>
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
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeHomeLayout;
