import "../Sidebar/Sidebar.scss";
import { IoIosPeople } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const Sidebar = () => {
	return (
		<aside className="sideBarContainer">
			<div className="sideBarButtonsContainer">
				<div className="sideBarButtons">
					<IoMdAdd className="sideBarButtonIcons" />
					<h4 className="sideBarButtonLabels">Create</h4>
				</div>
				<div className="sideBarButtons">
					<IoIosPeople className="sideBarButtonIcons" />{" "}
					<h4 className="sideBarButtonLabels">Referrals</h4>
				</div>
				<div className="sideBarButtons">
					{" "}
					<PiSuitcaseSimpleBold className="sideBarButtonIcons" />{" "}
					<h4 className="sideBarButtonLabels">Rewards</h4>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
