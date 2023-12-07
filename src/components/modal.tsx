import React from "react";
import '../App.css'

interface ModalProps {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal:React.FC<ModalProps> = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active": "modal"}  onClick={() => setActive(false)}>
      <div className={active ? "modal__container": "modal__container"} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;