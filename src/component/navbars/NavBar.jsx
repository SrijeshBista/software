import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import profile from "../../assets/Profilepicture.png";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const [popup, showepopup] = useState(false);
  // function to open the profile

  const openpopup = () => {
    showepopup(true);
  };
  const closepopup = () => {
    showepopup(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="nav-main">
            <div className="left-part">
              <div className="logo">
                <h1>Mr Chef's</h1>
              </div>
              {/* <div className="bars">
                <button><FaBars /></button>
              </div> */}
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
              <hr />
              <div className="profile" onClick={openpopup}>
                <div className="pic">
                  <img src={profile} alt="" />
                </div>
                <div className="name">
                  <p className="main-name">Jack leo</p>
                  <p>Waiter</p>
                </div>
                <button>
                  {" "}
                  <IoIosArrowDown />
                </button>
              </div>

              {popup && (
                <div className="popup">
                  <div className="popup-content">
                    <p>This is the profile popup</p>
                    <button onClick={closepopup}>Close</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
