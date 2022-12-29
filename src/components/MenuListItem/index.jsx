/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function MenuListItem({ text, onClick, icon, sysId }) {
  return (
    <div className="MenuListItem" key={sysId}>
      <button type="button" onClick={onClick} className="menu-list-item">
        <span className="menu-list-item-icon">{icon}</span>
        <span className="menu-list-item-text">{text}</span>
      </button>
    </div>
  );
}

export default MenuListItem;
