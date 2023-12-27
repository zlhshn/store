import logo from "../assets/trend.png";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { NavLink, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginProvider";
import trend from "../assets/trend.png"

const titles = [
  {
    title: "Home",
    path: "/dashboard",
  },

  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(LoginContext);
  const location = useLocation()

  return (
    <nav className="bg-[#be5f7f] md:text-sm  dark:text-gray-900">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <NavLink
            to="/dashboard"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={trend} width={80} height={80} alt="trend" />
           
          </NavLink>
          {/**iconu md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden">
            <button
              className="menu-btn text-black hover:text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={` ${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {titles.map((item) => (
              <li
                key={item.title}
                className="text-white font-medium  flex justify-center "
              >
                {/* state true olduğunda linkleri ortalamk için */}
                <NavLink
                  to={item.path}
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white hover:bg-gray-500 font-bold  ${location.pathname=== item.path ? "scale-[1.3] bg-gray-500 text-white" : ""}`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 text-[20px] ">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-white text-[20px]  md:inline-flex"
              onClick={logout}
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
