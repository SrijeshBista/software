// import React from 'react';
import { useState } from "react";
const MenuCard = ({ name, img, price, des }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decreaseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="menucard-main">
        <div className="menu-card">
          <div className="img">
            <img src={img} alt="Name" />
          </div>
          <div className="middle-card">
            <div className="title">
              <h1>{name}</h1>
            </div>
            <div className="des">
              <p>{des}</p>
            </div>
          </div>
          <div className="bottom-card">
            <div className="price">
              <p>{price}</p>
            </div>

            <div className="buttons">
              <button onClick={decreaseCount}>-</button>
              <span>{count}</span>
              <button onClick={increaseCount} className="increase">+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
