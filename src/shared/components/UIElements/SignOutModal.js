import React from "react";

import Modal from "./Modal";
import "./Modal.css";
import "./SignOutModal.css";
// import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

// import Button from './Button';

const SignOutModal = (props) => {
  console.log(props);
  return (
    <Modal
      // Below onCancel makes it possible to click the backdrop to cancel the modal
      // onCancel={props.onCancel}
      // header="Error"
      header={
        <div className="poweroff-icon-div">
          <FaPowerOff className="poweroff-icon" />
        </div>
      }
      headerClass="signout-color"
      show={props.onSignOut}
      footer={
        <div className="modal-error">
          <button onClick={props.onCancel} className="modal-logout-cancel-btn">
            cancel
          </button>
          <button
            onClick={props.onConfirm}
            className="modal-logout-confirm-btn"
          >
            confirm
          </button>
        </div>
      }
    >
      <div className="modal-error-content">
        <div className="main-error">
          <h6>Do you want to sign out?</h6>
          <p>
            Press <b>'Cancel'</b> to return to page or <b>'Confirm'</b> to sign
            out.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SignOutModal;
