import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import "../src/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDetails from "./Pages/JobDetails/JobDetails";

function App() {
  const route = createBrowserRouter([
    {
      //ADDITION : Login Page and assign
      // path: "/",
      // element: <Login />,
      // errorElement: <ErrorPage />,
    },

    {
      path: "/", //CHANGES:  Path needs to be Changed
      element: <HomeLayout />,

      children: [
        // {
        //   index: true,
        //   element: <JobList />,
        // },
        { path: "jobDetails", element: <JobDetails /> },
        // { path: "edit/:id", element: <EditEmployee /> },
        // { path: "details/:id", element: <EmployeeDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
