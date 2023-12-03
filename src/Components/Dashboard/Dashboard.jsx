import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import TrainerDashboard from "./TrainerDashboard/TrainerDashboard";
import UserDashboard from "./UserDashboard/UserDashboard";

const Dashboard = () => {
  const formRef = useRef(null);
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [userDetails, setUserDetails] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const { updateProfile } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const fullName = formData.get("fullName");
    const imglink = formData.get("imglink");
    updateProfile(fullName, imglink);
  };
  useEffect(() => {
    axiosSecure.get(`/get-user?email=${user?.email}`).then((data) => {
      setUserDetails(data.data);
      setUserRole(data.data.userRole);
    });
  }, [setUserDetails, user]);
  console.log(userRole);
  return (
    <div>
      <div>
        {userRole == "admin" && (
          <AdminDashboard user={userDetails}></AdminDashboard>
        )}{" "}
        {userRole == "trainer" && (
          <TrainerDashboard user={userDetails}></TrainerDashboard>
        )}{" "}
        {userRole == "user" && (
          <UserDashboard user={userDetails}></UserDashboard>
        )}
      </div>
      <div>
        {" "}
        <h3 className="text-center font-bold text-3xl">
          Update Your Account Details
        </h3>
        <form className="card-body" ref={formRef}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Full Name</span>
            </label>
            <input
              type="name"
              placeholder="Full Name"
              name="fullName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Profile Picture Link</span>
            </label>
            <input
              type="url"
              placeholder="Image Link"
              name="imglink"
              className="input input-bordered"
              required
            />
          </div>
          <button
            onClick={handleUpdateProfile}
            className="btn btn-error text-white text-2xl my-4"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
