import "../Sidebar/Sidebar.scss";
import { IoIosPeople } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const Sidebar = () => {
  return (
    <aside className="side-bar-container">
      <div className="side-bar__buttons-container">
        <div className="side-bar__buttons">
          <IoMdAdd className="side-bar__button__icons" />
          <h4 className="side-bar__button__labels">Create</h4>
        </div>
        <div className="side-bar__buttons">
          <IoIosPeople className="side-bar__button__icons" />{" "}
          <h4 className="side-bar__button__labels">Referrals</h4>
        </div>
        <div className="side-bar__buttons">
          {" "}
          <PiSuitcaseSimpleBold className="side-bar__button__icons" />{" "}
          <h4 className="side-bar__button__labels">Rewards</h4>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
