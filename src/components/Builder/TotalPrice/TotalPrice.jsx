import React from "react";
import Totalprice from "./TotalPrice.module.css";

const TotalPrice = () => {
  return (
    <div class={Totalprice.total}>
      <div>Total Price</div>
      <div>3000.00 Tk</div>
    </div>
  );
};

export default TotalPrice;
