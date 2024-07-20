import { Fragment, useEffect, useRef, useState } from "react";
import TextField from "../../components/TextField/TextField";
import "./Login.scss";
import KvLogo from "../../assets/kv-logo.png";
import Logo from "../../assets/kv-login.jpeg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { roleEnum } from "../../utils/role.enum";

const Login = () => {
  const navigate = useNavigate();

  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  const usernameRef = useRef();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    console.log(loginCredential);
    e.preventDefault();
    const role = roleEnum.NORMAL_USER;
    localStorage.setItem("accessToken", "true");
    localStorage.setItem("role", role);
    if (role === roleEnum.ADMIN) navigate("/admin");
    else navigate("/employee");
  };

  useEffect(() => {
    setTimeout(() => {
      usernameRef.current.focus();
    }, 1500);
  }, []);

  const handleChange = (e, maxLength) => {
    if (e.target.value.length > maxLength) {
      setErrors((errors) => ({
        ...errors,
        [e.target.name]: `Maximum length ${maxLength} characters`,
      }));
      return;
    }
    if (
      loginCredential[e.target.name].length == maxLength &&
      e.target.value.length <= maxLength
    ) {
      setErrors((errors) => ({
        ...errors,
        [e.target.name]: "",
      }));
    }
    setLoginCredential((creds) => ({
      ...creds,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Fragment>
      <main className="login--layout">
        {/*<!---hero section--->*/}
        <div className="hero">
          <img src={Logo} alt="Login Image" className="login--image" />
        </div>
        {/*<!---login section--->*/}
        <div className="login">
          <form>
            <img src={KvLogo} alt="Logo" className="logo" />
            <TextField
              label="Email"
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleChange(e, 20)}
              value={loginCredential.username}
              error={errors.email}
              ref={usernameRef}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => handleChange(e, 30)}
              error={errors.password}
              value={loginCredential.password}
            />
            <Button
              className="login--layout-button"
              text="Log in"
              type="submit"
              handleSubmit={onLogin}
            />
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
