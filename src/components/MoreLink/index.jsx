/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function MoreLink({ text, onClick }) {
  return (
    <div className="MoreLink">
      <button type="button" onClick={() => onClick(true)}>
        {text}
      </button>
    </div>
  );
}

export default MoreLink;
