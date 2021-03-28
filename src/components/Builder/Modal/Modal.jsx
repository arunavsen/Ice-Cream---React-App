import React from "react";
import Modal from "./Modal.module.css";

const Modal = ({children}) => {
  return (
    <div>
      <div class={Modal.backdrop}></div>
      <div class={Modal.modalBody}>
          {children}
      </div>
    </div>
  );
};

export default Modal;
