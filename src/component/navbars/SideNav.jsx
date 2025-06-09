import React from "react";

const SideNav = () => {
  return (
    <>
      <sidenav>
        <div className="sidenav-main">
          <div className="top-part">
        
            <div className="sidenav-bar">
              <ul>
                <li>Menu</li>
                <li>Table Service</li>
                <li>Reservation</li>
                <li>Delivery</li>
                <li>Accounting</li>
              </ul>
            </div>
          </div>
          <div className="bottom-part">
            <ul>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </sidenav>
    </>
  );
};

export default SideNav;
