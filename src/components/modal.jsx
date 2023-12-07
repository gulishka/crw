import React from "react";
import '../App.css'

const Modal = ({active, setActive}) => {
  return (
    <div className="modal" {active ? "modal active": "modal"}  onClick={() => setActive(false)}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>

      </div>
    </div>
  );
}

export default Modal;