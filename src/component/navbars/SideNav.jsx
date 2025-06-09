import React, { useState } from "react";
import { FaHamburger, FaTable, FaBoxOpen, FaChartPie } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const SideNav = () => {
  const [active, setActive] = useState("Menu");

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div id="sidenav">
      <div className="container">
        <div className="sidenav-main">
          <div className="top-part">
            <div className="sidenav-bar">
              <ul>
                <li
                  className={active === "Menu" ? "active" : ""}
                  onClick={() => handleActive("Menu")}
                >
                  <Link to="/">
                  <FaHamburger /> Menu
                </Link>
                </li>

              
                <li
                  className={active === "Table Service" ? "active" : ""}
                  onClick={() => handleActive("Table Service")}
                >
                  <Link to="/tableservice"> <FaTable /> Table Service</Link>
                </li>
                
               
                <li
                  className={active === "Reservation" ? "active" : ""}
                  onClick={() => handleActive("Reservation")}
                >
                  <Link to="/reservation"> <SlCalender /> Reservation</Link>
                </li>
                
               
                <li
                  className={active === "Delivery" ? "active" : ""}
                  onClick={() => handleActive("Delivery")}
                >
                 <Link to="/delivery">  <FaBoxOpen /> Delivery</Link>
                </li>
               
                <li
                  className={active === "Accounting" ? "active" : ""}
                  onClick={() => handleActive("Accounting")}
                >
                   <Link to="/accounting"><FaChartPie /> Accounting</Link>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="bottom-part">
            <ul>
              <li
                className={active === "Profile" ? "active" : ""}
                onClick={() => handleActive("Profile")}
              >
                <CgProfile /> Profile
              </li>
              <li
                className={active === "Logout" ? "active" : ""}
                onClick={() => handleActive("Logout")}
              >
                <IoExitOutline /> Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
