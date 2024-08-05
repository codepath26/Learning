import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-orange-300 py-1 px-10 sticky top-0 left-0">
      <div className="flex justify-between">
        <h1 className="w-1/2 ">logo</h1>
        <div className="w-1/2  flex justify-end">
          <ul className="w-[60%]  flex justify-around">
            <NavLink
              className={({ isActive }) =>
                `  ${
                  isActive ? "border-b border-purple-600" : ""
                } text-white cursor-pointer`
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `  ${
                  isActive ? "border-b border-purple-600" : ""
                } text-white cursor-pointer`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `  ${
                  isActive ? "border-b border-purple-600" : ""
                } text-white cursor-pointer`
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `  ${
                  isActive ? "border-b border-purple-600" : ""
                } text-white cursor-pointer`
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
