import HomeLayout from "./pages/HomeLayout/HomeLayout";
import "../src/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

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
      // ADDITION : children: Needs to be added
    },
  ]);

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
