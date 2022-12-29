/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function Title({ title }) {
  return (
    <div className="Title">
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
