/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button";
import "./style.css";

function Buttons({ list }) {
  return (
    <div className="Buttons">
      {list.map(({ text, onClick, icon }) => (
        <Button text={text} onClick={onClick} icon={icon} key={text} />
      ))}
    </div>
  );
}

export default Buttons;
