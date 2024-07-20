import HomeLayout from "./Pages/HomeLayout/HomeLayout";
import "../src/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
