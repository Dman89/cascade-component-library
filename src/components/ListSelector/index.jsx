/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function ListSelector({ items, selected }) {
  return (
    <div className="ListSelector">
      {items.map(({
        text, onClick, type
      }) => (
        <div key={type}>
          <button
            type="button"
            onClick={() => onClick(type)}
            className={selected === type ? "selected" : ""}
          >
            {text}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListSelector;
