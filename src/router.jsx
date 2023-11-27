import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Homepage from "./Components/Home/Homepage/Homepage";
import UserRegister from "./Components/UserManagment/UserRegister/UserRegister";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/register",
        element: <UserRegister></UserRegister>,
      },
    ],
  },
]);

export default router;
