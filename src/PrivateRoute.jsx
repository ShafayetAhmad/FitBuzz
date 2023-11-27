/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Components/Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) return <h1>Loading</h1>;

  if (user) return children;
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
