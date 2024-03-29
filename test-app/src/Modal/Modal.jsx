import { Button, Icon } from "@mui/material";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root2");

const Modal = ({ children, openModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      openModal();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <Button className={css.close_btn} onClick={() => openModal()}>
          <Icon className={css.icon} id="icon-plus" />
        </Button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
