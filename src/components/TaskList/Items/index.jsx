/* eslint-disable react/prop-types */
import React from "react";
import { CircleEmpty } from "../../Icons";
import "./style.css";

function Items({ items, columns }) {
  return (
    <>
      {items.map((item) => (
        <div className="TaskList-Items">
          {columns.map(({ field: columnField }, index) => {
            const foundField = item.fields.find(({ field }) => (
              field === columnField
            ));
            if (!foundField) return "";

            const circle = index === 0 ? <CircleEmpty /> : "";
            const icon = foundField.icon || circle;

            return (
              <div className="col">
                <div className="container">
                  {icon ? (
                    <div className="icon">
                      {icon}
                    </div>
                  ) : ""}
                  <div>
                    {foundField.displayValue}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Items;
