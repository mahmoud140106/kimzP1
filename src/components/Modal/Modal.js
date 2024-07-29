import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Form from "../Layout/Form";

const BackDrop = ({ close, show }) => (
  <div
    className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
    onClick={close}
  ></div>
);

const OverLay = ({ children,show }) => (
  <div
    className={`${styles.overLay} ${show ? styles.showOverLay : null}`}
  >
    {children}
  </div>
);

const Modal = ({ children,show, closeModal }) => {
  console.log(show);
  return (
    show && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <BackDrop close={closeModal} show={show} />
            <OverLay show={show} >{children}</OverLay>
          </Fragment>,
          document.getElementById("modal")
        )}
      </Fragment>
    )
  );
};

export default Modal;
