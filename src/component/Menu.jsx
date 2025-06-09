import React from "react";
import NavBar from "./navbars/NavBar";
import SideNav from "./navbars/SideNav";
import { FaSearch } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
const Menu = () => {
  return (
    <>
      <section id="menu">
        <div className="container">
          <div className="menu-main">
            {/* left side  */}
            <div className="menu-left">
              <div className="menu-top">
                <div className="search">
                  <form>
                    <FaSearch />
                    <input type="search" placeholder="Search a food" />
                  </form>
                </div>
                <div className="filter">
                  <button>
                    <LuSlidersHorizontal />
                  </button>
                </div>
              </div>
              <div className="menu-middle">
                <div className="small-card">
                    <div className="icons"><CiBowlNoodles /></div>
                    <div className="detail">
                        <p>All</p>
                        <span>253 items</span>
                    </div>
                </div>
                <div className="small-card">
                    <div className="icons"><CiBowlNoodles /></div>
                    <div className="detail">
                        <p>All</p>
                        <span>253 items</span>
                    </div>
                </div>
                <div className="small-card">
                    <div className="icons"><CiBowlNoodles /></div>
                    <div className="detail">
                        <p>All</p>
                        <span>253 items</span>
                    </div>
                </div>
                <div className="small-card">
                    <div className="icons"><CiBowlNoodles /></div>
                    <div className="detail">
                        <p>All</p>
                        <span>253 items</span>
                    </div>
                </div>
                <div className="small-card">
                    <div className="icons"><CiBowlNoodles /></div>
                    <div className="detail">
                        <p>All</p>
                        <span>253 items</span>
                    </div>
                </div>
              </div>
               
            </div>
            {/* right side  */}
            <div className="menu-right"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
