import React from "react";

import Modal from "./Modal";
import "./Modal.css";
import "./ErrorModal.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

// import Button from './Button';

const SuccessModal = (props) => {
  console.log(props);
  return (
    <Modal
      onCancel={props.onClear}
      // header="Error"
      header={
        <div className="times-icon-div">
          <FaCheck className="times-icon" />
        </div>
      }
      headerClass="success-color"
      show={!!props.success}
      footer={
        <div className="modal-error">
          <Link to={props.link} className="modal-success-btn">
            Proceed
          </Link>
        </div>
      }
    >
      <div className="modal-error-content">
        <div className="main-error">
          <h6>Great!</h6>
          <p>{props.success}</p>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
