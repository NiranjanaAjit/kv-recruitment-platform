import { Fragment, useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import TextField from "../../components/TextField/TextField";
import "./Login.scss";
import KvLogo from "../../assets/kv-logo.png";
import Logo from "../../assets/kv-login.jpeg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { roleEnum } from "../../utils/role.enum";
import { useDispatch } from "react-redux";
import { signIn, setRole } from "../../store/authReducer";
import { useLoginMutation } from "../../api/loginApi";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { data, isSuccess, error, isError }] = useLoginMutation();

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
    login(loginCredential);
  };
  useEffect(() => {
    if (isSuccess && data.data.token) {
      const token = data?.data?.token;
      localStorage.setItem("accessToken", token);
      const decoded = jwtDecode(token);
      const role = decoded?.position?.toUpperCase();
      dispatch(signIn());

      if (role === roleEnum.ADMIN) {
        dispatch(setRole(role));
        navigate("/admin");
      } else {
        dispatch(setRole(roleEnum.NORMAL_USER));
        navigate("/employee");
      }
    }
  }, [isSuccess, data]);
  useEffect(() => {
    if (isError) {
      setErrors((errors) => ({ ...errors, password: error.data.message }));
    }
  }, [isError, error]);
  useEffect(() => {
    setTimeout(() => {
      usernameRef.current?.focus();
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
        {/* <div className="hero">
          <img src={Logo} alt="Login Image" className="login--image" />
        </div> */}
        {/*<!---login section--->*/}
        <div className="yellow-blur-box"></div>
        <div className="blue-blur-box"></div>

        <div className="login">
          <form>
            <img src={KvLogo} alt="Logo" className="logo" />
            <TextField
              label="Email"
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleChange(e, 100)}
              value={loginCredential.username}
              error={errors.email}
              ref={usernameRef}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => handleChange(e, 100)}
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
