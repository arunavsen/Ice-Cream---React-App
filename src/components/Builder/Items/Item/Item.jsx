import React from "react";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <li className="react item" id="item">
      <span>Vanilla</span>
      <span className="quantity">2</span>
      <div class="right">
        <button type="button" className="plus rounded">
          +
        </button>
        <button type="button" className="minus rounded">
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
