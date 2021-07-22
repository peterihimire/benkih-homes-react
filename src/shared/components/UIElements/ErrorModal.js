import React from "react";

import Modal from "./Modal";
import "./Modal.css";
import "./ErrorModal.css";

// import Button from './Button';

const ErrorModal = (props) => {
  console.log(props);
  return (
    <Modal
      onCancel={props.onClear}
      header="Error"
      show={!!props.error}
      footer={
        <div className="modal-ok">
          <button className="modal-ok-btn" onClick={props.onClear}>
            Ok
          </button>
        </div>
      }
      // className={`${props.show} ? modal  show-modal : modal `}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
