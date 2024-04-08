import { Link, NavLink } from "react-router-dom";
import { BsHouses } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import "./NavBar.css";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 font_lato">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu className="text-3xl" />
          </div>
          <ul
            id="menu"
            tabIndex={1}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <button className="text-center">
            <BsHouses className="text-3xl w-full text-[#A78BFA] font-bold" />
            <p className="font_lato font-medium text-[12px] text-[#211951]">
              Dream Houses
            </p>
          </button>
        </Link>
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
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            id="profile"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
        <button className="bg-[#A78BFA] text-white px-5 py-2 rounded-md font-semibold font_lato">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
