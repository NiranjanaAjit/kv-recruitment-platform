import "./Header.scss";
import Logo from "../../assets/kv-logo.png";

const Header = () => {
  return (
    <div className="blank-header">
      <img src={Logo} alt="key value logo" />
    </div>
  );
};

export default Header;
