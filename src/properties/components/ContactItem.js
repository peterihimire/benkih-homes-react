import React from "react";
import "./ContactItem.css";

const ContactItem = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h4>Left content</h4>
      </div>
      <aside className="contact-right">
        <h4>Right content</h4>
      </aside>
    </div>
  );
};

export default ContactItem;
