import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import EmployeeHomeLayout from "./pages/EmployeeHomeLayout/EmployeeHomeLayout";
import "../src/App.scss";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { setRole, signIn } from "./store/authReducer";
import { roleEnum } from "./utils/role.enum";
import ProtectedRoute from "./utils/ProtectedRoute";
import AdminHomeLayout from "./pages/AdminHomeLayout/AdminHomeLayout";
import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Referrals from "./pages/Referrals/Referrals";
import AdminJobDetails from "./pages/AdminJobDetails/AdminJobDetails";
import EmployeeJobDetails from "./pages/EmployeeJobDetails/EmployeeJobDetails";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import CreateJob from "./pages/CreateJob/CreateJob";
import ReferCandidate from "./pages/ReferCandidate/ReferCandidate";
import EmployeeProfile from "./pages/EmployeeProfile/EmployeeProfile";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import EditEmployee from "./pages/EditEmployee/EditEmployee";
import EditJob from "./pages/EditJob/EditJob";
import Notifications from "./pages/Notifications/Nofitications";

function Router() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  if (token) {
    dispatch(signIn());
    const decodedToken = jwtDecode(token);
    const role = decodedToken?.position?.toUpperCase();
    if (role === roleEnum.ADMIN) dispatch(setRole(role));
    else dispatch(setRole(roleEnum.NORMAL_USER));
  }
  const route = createBrowserRouter([
    {
      //ADDITION : Login Page and assign
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/employee",
      element: <ProtectedRoute role={roleEnum.NORMAL_USER} />,
      children: [
        {
          path: "/employee",
          element: <EmployeeHomeLayout />,
          children: [
            {
              index: true,
              element: <EmployeeDashboard />,
            },
            {
              path: "referrals",
              element: <Referrals />,
            },
            {
              path: "jobDetails/:id",
              element: <EmployeeJobDetails />,
            },
            {
              path: "refer",
              element: <ReferCandidate />,
            },
            {
              path: "profile",
              element: <EmployeeProfile />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <ProtectedRoute role={roleEnum.ADMIN} />,
      children: [
        {
          index: "/admin",
          element: <AdminHomeLayout />,
          children: [
            {
              index: true,
              element: <AdminDashboard />,
            },
            {
              path: "referrals",
              element: <Referrals />,
            },
            {
              path: "jobDetails/:id",
              element: <AdminJobDetails />,
            },
            {
              path: "employeeList",
              element: <EmployeeList />,
            },
            {
              path: "employeeList/edit/:id",
              element: <EditEmployee />,
            },
            {
              path: "create-job",
              element: <CreateJob />,
            },
            {
              path: "create-employee",
              element: <CreateEmployee />,
            },
            {
              path: "jobDetails/edit/:id",
              element: <EditJob />,
            },
            {
              path: "notifications",
              element: <Notifications />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default Router;
