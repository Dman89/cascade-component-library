/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { DownArrow, Plus } from "../Icons";
import MenuListItem from "../MenuListItem";
import MoreLink from "../MoreLink";
import "./style.css";

function MenuList({ list, title, plusOnClick, limit = 4, showMoreLink }) {
  const [showList, setShowList] = useState(true);
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="MenuList">
      <h3 className="menu-list-header">
        <button
          className="header-icon"
          type="button"
          onClick={() => setShowList(!showList)}
        >
          <DownArrow />
        </button>
        <span className="header-content">{title}</span>
        <button className="header-add" type="button" onClick={plusOnClick}>
          <Plus />
        </button>
      </h3>
      <div className={showList ? "show" : "hide"}>
        {list.map(({ text, onClick, icon, sysId }, index) => {
          if (!showAll && index > limit - 1) return <div key={sysId} />;
          return (
            <MenuListItem
              text={text}
              onClick={onClick}
              icon={icon}
              sysId={sysId}
              key={sysId}
            />
          );
        })}
        {showMoreLink.show ? (
          <MoreLink text={showMoreLink.text} onClick={setShowAll} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default MenuList;
