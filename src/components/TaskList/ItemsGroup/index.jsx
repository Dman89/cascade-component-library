/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from "react";
import { Plus } from "../../Icons";
import "./style.css";

function generateColumns(length) {
  const columns = [];

  for (let x = 0; x < length; x++) {
    columns.push(<div className="ItemsGroup-container" />);
  }

  return columns;
}

function ItemsGroup({
  text, color, length, backgroundColor
}) {
  const style = { "background-color": backgroundColor, color };

  return (
    <div className="ItemsGroup">
      <div className="ItemsGroup-container">
        <div className="ItemsGroup-text" style={style}>
          {text}
        </div>
        <div className="ItemsGroup-space" />
        <div className="ItemsGroup-plus" style={style}>
          <Plus />
        </div>
      </div>
      {generateColumns(length)}
    </div>
  );
}

export default ItemsGroup;
