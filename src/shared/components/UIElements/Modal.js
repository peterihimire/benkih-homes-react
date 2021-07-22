import React from "react";
import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div
      // className={`${props.show} ? modal ${props.className} show-modal : modal `}
      className={`modal ${props.className}`}
      // className={props.show ? "modal  show-modal" : "modal"}
      style={props.style}
    >
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <div className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </div>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      {/* <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      > */}

      <ModalOverlay {...props} />

      {/* </CSSTransition> */}
    </React.Fragment>
  );
};

export default Modal;
