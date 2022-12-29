/* eslint-disable react/prop-types */
import React from "react";

function Square({ color = "#F3BD6A" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export default Square;
