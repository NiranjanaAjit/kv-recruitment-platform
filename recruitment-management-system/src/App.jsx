import HomeLayout from "./pages/HomeLayout/HomeLayout";
import "../src/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import JobDetails from "./pages/JobDetails/JobDetails";

function App() {
  const route = createBrowserRouter([
    {
      //ADDITION : Login Page and assign
      path: "/",
      element: <Login />,
      // errorElement: <NotFound />,
    },

    {
      path: "/dashboard", //CHANGES:  Path needs to be Changed
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
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
export default App;
