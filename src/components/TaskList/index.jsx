/* eslint-disable react/prop-types */
import React from "react";
import Headers from "./Headers";
import Items from "./Items";
import ItemsGroup from "./ItemsGroup";
import "./style.css";

function TaskList({
  columns, tasks, selectedHeader, columnOnClick
}) {
  return (
    <section className="TaskList">
      <Headers columns={columns} selectedHeader={selectedHeader} columnOnClick={columnOnClick} />
      {Object.keys(tasks).map((key) => {
        const taskGroup = tasks[key];
        const {
          displayValue, display, color, field, backgroundColor
        } = taskGroup.group;
        return (
          <>
            { display ? <ItemsGroup text={displayValue} backgroundColor={backgroundColor} color={color} length={columns.length} /> : "" }
            <Items items={taskGroup.items} columns={columns} />
          </>
        );
      })}
    </section>
  );
}

export default TaskList;
