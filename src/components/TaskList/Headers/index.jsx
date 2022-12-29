/* eslint-disable react/prop-types */
import React from "react";
import { SortAsc, SortDesc } from "../../Icons";
import "./style.css";

function Headers({ columns, selectedHeader, columnOnClick }) {
  return (
    <header className="TaskList-Headers">
      {columns.map(({ label, field }) => {
        const selected = selectedHeader.field === field;
        const { sort } = selectedHeader;
        const sortAsc = sort === "asc";
        const labelClassName = selected ? `${sort} selected-label` : "";
        const iconDiv = (
          <div className="icon">
            {sortAsc ? <SortAsc /> : <SortDesc />}
          </div>
        );
        return (
          <div className="col">
            <button className={labelClassName} type="button" onClick={() => columnOnClick(field, sortAsc)}>
              <div className="label">
                {label}
              </div>
              {selected ? iconDiv : ""}
            </button>
          </div>

        );
      })}
    </header>
  );
}

export default Headers;
