import { Link, NavLink } from "react-router-dom";
import lightLogo from "/FitBuzz_Light_Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  const navLinks = (
    <>
      <li className="text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/Gallery">Gallery</NavLink>
      </li>
      <li className="text-lg">
        <NavLink to="/Trainer">Trainer</NavLink>
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
      <div className="navbar bg-base-100">
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
          <Link className="btn btn-error font-bold text-white" to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
