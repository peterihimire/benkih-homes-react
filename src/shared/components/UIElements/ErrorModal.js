import React from "react";

import Modal from "./Modal";
import "./Modal.css";

// import Button from './Button';

const ErrorModal = (props) => {
  console.log(props);
  return (
    <Modal
      onCancel={props.onClear}
      header="Error"
      show={!!props.error}
      footer={<button onClick={props.onClear}>Ok</button>}
      className={`${props.show} ? modal  show-modal : modal `}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
