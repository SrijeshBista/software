import React from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
const NavBar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="nav-main">
            <div className="left-part">
              <div className="logo">
                <h1>Mr Chef's</h1>
              </div>
              <div className="bars">
                <FaBars />
              </div>
            </div>
            <div className="right-part">
              <div className="nav-btn">
                <button>
                  <MdOutlineDarkMode />
                </button>
                <button>
                  <IoMdNotifications />
                </button>
              </div>
              <p>|</p>
              <div className="profile">
                <form>
                  <select id="profile">
                    <option value="employ">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
