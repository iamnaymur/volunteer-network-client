import React, { useContext } from "react";
import logo from "../../assets/logos/Group 1329.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 mt-5">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link>Donations</Link>
            </li>
            <li>
              <Link>Events</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="cursor-pointer normal-case text-xl">
          <img className="w-48" src={logo} alt="Brand Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link>Donations</Link>
          </li>
          <li>
            <Link>Events</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <Link to='/allRegistered'  className="avatar me-2 tooltip" data-tip='Click here to see all registered events.'>
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </Link>
        )}
        {user ? (
          <Link
            onClick={handleLogout}
            to="/register"
            className="btn btn-primary ms-2"
          >
            logOut
          </Link>
        ) : (
          <Link to="/register" className="btn btn-primary ms-2">
            Register
          </Link>
        )}
        <Link className="btn ms-2">Admin</Link>
      </div>
    </div>
  );
};

export default Navbar;
