import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  console.log(props);
  const content = (
    <aside
      className={props.show ? "side-drawer show-nav" : "side-drawer"}
      onClick={props.onClick}
    >
      {props.children}
    </aside>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
