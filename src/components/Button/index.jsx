/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function Button({ text, onClick, icon }) {
  return (
    <div className="Button">
      <button type="button" onClick={onClick}>
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
      </button>
    </div>
  );
}

export default Button;
