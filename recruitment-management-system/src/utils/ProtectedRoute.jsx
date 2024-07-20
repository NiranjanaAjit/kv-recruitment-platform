import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { setRole, signIn } from "../store/authReducer";

const ProtectedRoute = ({ role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole);

  //   useEffect(() => {
  //     if (!isAuthenticated || !userRole == role)
  //       return navigate("/", { replace: true });
  //   }, [pathname]);
  if (!isAuthenticated || !userRole == role)
    return navigate("/", { replace: true });
  return <Outlet />;
};

export default ProtectedRoute;
