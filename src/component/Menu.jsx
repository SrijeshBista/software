import React from "react";
import NavBar from "./navbars/NavBar";
import SideNav from "./navbars/SideNav";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { FaCoffee } from "react-icons/fa";
import MenuCard from "./MenuCard";
import pasta from "../assets/spaghetti.png";
const Menu = (props) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", count: 253 },
    { name: "Breakfast", count: 120 },
    { name: "Lunch", count: 88 },
    { name: "Dinner", count: 45 },
    { name: "Baverage", count: 33 },
  ];
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
                <div className="card">
                  {categories.map((cat) => (
                    <div
                      key={cat.name}
                      className={`small-card ${
                        activeCategory === cat.name ? "active" : ""
                      }`}
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      <div className="icons">
                        <CiBowlNoodles />
                        
                      </div>
                      <div className="detail">
                        <p>{cat.name}</p>
                        <span>{cat.count} items</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="menu-bottom">
                <div className="cards">
                  <MenuCard
                    name="Spaghetti Carbonara"
                    price="$25.62"
                    img={pasta}
                    des="This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower."
                  />
                  <MenuCard
                    name="Spaghetti Carbonara"
                    price="$25.62"
                    img={pasta}
                    des="This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower."
                  />
                  <MenuCard
                    name="Spaghetti Carbonara"
                    price="$25.62"
                    img={pasta}
                    des="This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower."
                  />
                  <MenuCard
                    name="Spaghetti Carbonara"
                    price="$25.62"
                    img={pasta}
                    des="This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower."
                  />
                  <MenuCard
                    name="Spaghetti Carbonara"
                    price="$25.62"
                    img={pasta}
                    des="This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower."
                  />
                  <MenuCard
                    name="Spaghetti Carbonara"
                    price="$25.62"
                    img={pasta}
                    des="This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower."
                  />
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
