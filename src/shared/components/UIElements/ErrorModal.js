import React from "react";

import Modal from "./Modal";
// import Button from './Button';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Error"
      show={!!props.error}
      footer={<button onClick={props.onClear}>Ok</button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
