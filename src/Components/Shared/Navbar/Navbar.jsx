import { Link, NavLink } from "react-router-dom";
import lightLogo from "/FitBuzz_Light_Logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout();
  };
  const [userFromDB, setUserFromDB] = useState();

  useEffect(() => {
    const fetchUserDataFromDB = async () => {
      try {
        const response = await axiosSecure.get(
          `/get-user?email=${user?.email}`
        );
        const userData = response.data;
        console.log(userData);
        setUserFromDB(userData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserDataFromDB();
  }, [user]);
  const navLinks = (
    <>
      <li className="text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/Gallery">Gallery</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/Trainers">Trainers</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/all-classes">Classes</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/Forum">Forum</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img src={lightLogo} className="lg:w-36" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {userFromDB ? (
            <div className="text-center lg:text-base sm:text-xs flex">
              {userFromDB?.userName}
              <img
                src={userFromDB.photoURL}
                className="lg:w-12 lg: w-8 h-8 items-center rounded-full"
              ></img>
            </div>
          ) : (
            <FontAwesomeIcon icon={faQuestion} size="xl"></FontAwesomeIcon>
          )}

          {user ? (
            <button
              className="btn btn-warning lg:w-fit w-16 lg:text-base text-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-warning lg:w-fit w-16 lg:text-base text-xs">
                Login/ <br></br>Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
