import React from "react";
import { HiOutlineMenuAlt2, HiOutlineHome, HiChip, HiLogin, HiLogout } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen p-2 bg-gray-100">
      <ul className="p-5 space-y-8">
        <li>
        <NavLink to="/account">
          <button>
            <HiLogout size={"1.5rem"} color="#072541" />
          </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <button>
              <HiOutlineHome className="leftcions" size={"1.5rem"} color="#072541" />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <button>
              <CiShoppingCart size={"1.5rem"} color="#072541"/>
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/favs">
            <button>
              <IoHeartOutline size={"1.5rem"} color="#072541"/>
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <button>
              <CiDeliveryTruck size={"1.5rem"} color="#072541"/>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <button>
              <HiLogin size={"1.5rem"} color="#072541"/>
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
