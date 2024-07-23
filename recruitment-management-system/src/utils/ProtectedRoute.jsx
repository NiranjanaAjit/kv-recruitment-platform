import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";

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
  if (!isAuthenticated) return <Navigate to="/" replace={true} />;
  if (userRole !== role)
    return <Navigate to={`/${userRole.toLowerCase()}`} replace={true} />;
  return <Outlet />;
};

export default ProtectedRoute;
