import "./Header.scss";
import Logo from "../../assets/kv-logo.png";
import { jwtDecode } from "jwt-decode";
import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Header = () => {
	const navigate = useNavigate();
	const data = localStorage.getItem("accessToken");
	const decode = jwtDecode(data);
	console.log(decode);

	const onLogout = () => {
		localStorage.removeItem("accessToken");
		navigate("/");
	};

	return (
		<div className="blank-header">
			<div className="kv-logo">
				<img src={Logo} alt="key value logo" />
			</div>
			<div className="logout-section">
				<div className="logout-icon" onClick={()=> navigate("notifications")}>
					<FaBell className="bell-icon"></FaBell>
				</div>
				<div className="logout-icon" onClick={onLogout}>
					<IoIosExit className="icon"></IoIosExit>
				</div>
				<div className="logee-data">
					<span className="logee-data-name">{decode.name}</span>
					<span className="logee-data-position">
						{decode.position}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
