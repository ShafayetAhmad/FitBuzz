import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Homepage from "./Components/Home/Homepage/Homepage";
import UserRegister from "./Components/UserManagment/UserRegister/UserRegister";

import UserLoginComp from "./Components/UserManagment/UserLogin/UserLoginComp";
import AllClasses from "./Components/AllClasses/AllClasses";
import SingleBlog from "./Components/AllBlogs/SingleBlog/SingleBlog";
import TrainerPage from "./Components/TrainerPage/TrainerPage";
import TrainerDetails from "./Components/TrainerPage/TrainerDetails/TrainerDetails";
import BeATrainer from "./Components/TrainerPage/BeATrainer/BeATrainer";
import PrivateRoute from "./PrivateRoute";
import UserBooked from "./Components/UserBooked/UserBooked";
import Dashboard from "./Components/Dashboard/Dashboard";
import PaymentPage from "./Components/PaymentPage/PaymentPage";
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
      {
        path: "/login",
        element: <UserLoginComp></UserLoginComp>,
      },
      {
        path: "/all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/trainers",
        element: <TrainerPage></TrainerPage>,
      },
      {
        path: "/trainers/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: "/be-a-trainer",
        element: (
          <PrivateRoute>
            <BeATrainer></BeATrainer>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-booked",
        element: (
          <PrivateRoute>
            <UserBooked></UserBooked>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-page",
        element: (
          <PrivateRoute>
            <PaymentPage></PaymentPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
