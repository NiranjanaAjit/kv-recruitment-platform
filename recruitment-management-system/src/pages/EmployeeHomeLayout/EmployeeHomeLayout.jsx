import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EmployeeHomeLayout.scss";
import { useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoIosGift } from "react-icons/io";

const EmployeeHomeLayout = () => {
  const navigate = useNavigate();

  const onClickRef = () => {
    navigate("referrals");
  };

  return (
    <div className="home-layout-container">
      <Sidebar>
        <div className="side-bar__buttons" onClick={onClickRef}>
          <IoIosPeople className="side-bar__button__icons" />{" "}
          <h4 className="side-bar__button__labels">Referrals</h4>
        </div>
        <div className="side-bar__buttons">
          {" "}
          <IoIosGift className="side-bar__button__icons" />{" "}
          <h4 className="side-bar__button__labels">Rewards</h4>
        </div>
      </Sidebar>
      <div className="home-layout-content">
        <div className="blank-header"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeHomeLayout;
