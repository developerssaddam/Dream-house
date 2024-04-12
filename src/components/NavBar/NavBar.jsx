import { Link, NavLink } from "react-router-dom";
import { BsHouses } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>

          <li>
            <NavLink to="/update/profile">Update Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  // handleLogout.
  const handleLogout = () => {
    logoutUser();
    toast.success("User logout successfull!");
  };

  return (
    <div className="navbar bg-base-100 font_lato">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu className="text-3xl" />
          </div>
          <ul
            id="menu"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/">
          <button className="text-center">
            <BsHouses className="text-3xl w-full text-[bg-[#491272]] font-bold" />
            <p className="font_lato font-medium text-[12px] text-[#2d2463]">
              Dream Houses
            </p>
          </button>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="menu" className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#491272] text-white px-5 py-2 rounded-md font-semibold font_lato"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-[#491272] text-white px-5 py-2 rounded-md font-semibold font_lato"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
