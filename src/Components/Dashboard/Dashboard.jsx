import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import TrainerDashboard from "./TrainerDashboard/TrainerDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [userDetails, setUserDetails] = useState(null);
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    axiosSecure.get(`/get-user?email=${user?.email}`).then((data) => {
      setUserDetails(data.data);
      setUserRole(data.data.userRole);
    });
  }, [setUserDetails, user]);
  console.log(userRole);
  return (
    <div>
      {userRole == "admin" && (
        <AdminDashboard user={userDetails}></AdminDashboard>
      )}{" "}
      {userRole == "trainer" && (
        <TrainerDashboard
          user={userDetails}
        ></TrainerDashboard>
      )}{" "}
      {userRole == "user" && <UserDashboard></UserDashboard>}
    </div>
  );
};

export default Dashboard;
