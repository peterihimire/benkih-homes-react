import React from "react";

import Modal from "./Modal";
import "./Modal.css";
import "./ErrorModal.css";

import { FaTimes } from "react-icons/fa";

// import Button from './Button';

const ErrorModal = (props) => {
  console.log(props);
  return (
    <Modal
      onCancel={props.onClear}
      // header="Error"
      header={
        <div className="times-icon-div">
          <FaTimes className="times-icon" />
        </div>
      }
      headerClass="header-color"
      show={!!props.error}
      footer={
        <div className="modal-error">
          <button className="modal-error-btn" onClick={props.onClear}>
            Dismiss
          </button>
        </div>
      }
    >
      <div className="modal-error-content">
        <div className="main-error">
          <h6>Oh, snap!</h6>
          <p>{props.error}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;
