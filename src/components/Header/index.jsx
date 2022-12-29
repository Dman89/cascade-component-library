import React from "react";
import "./style.css";

// eslint-disable-next-line react/prop-types
function Header({ text }) {
  return (
    <div className="Header">
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
