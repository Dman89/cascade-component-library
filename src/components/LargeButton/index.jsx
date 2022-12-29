/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function LargeButton({
  text, icon, type, onClick
}) {
  const className = `${type} LargeButton`;

  return (
    <button className={className} type="button" onClick={onClick}>
      {icon} {text}
    </button>
  );
}

export default LargeButton;
