import React from "react";

import Modal from "./Modal";
import "./Modal.css";
import "./ErrorModal.css";
// import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

// import Button from './Button';

const SignOutModal = (props) => {
  console.log(props);
  return (
    <Modal
      onCancel={props.onClear}
      // header="Error"
      header={
        <div className="times-icon-div">
          <FaPowerOff className="times-icon" />
        </div>
      }
      headerClass="success-color"
      show={!!props.success}
      footer={
        <div className="modal-error">
          {/* <Link to={props.link} className="modal-success-btn">
            Proceed
          </Link> */}
          <button onClick={props.cancel}>cancel</button>
          <button onClick={props.confirm}>confirm</button>
        </div>
      }
    >
      <div className="modal-error-content">
        <div className="main-error">
          <h6>Do you want to sign out?</h6>
          <p>Press 'Cancel' to return to page and 'Confirm' to sign out.</p>
        </div>
      </div>
    </Modal>
  );
};

export default SignOutModal;
