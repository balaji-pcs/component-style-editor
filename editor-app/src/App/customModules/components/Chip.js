import React from "react";

export default function Chip({ lable }) {
  return (
    <span
      style={{
        height: "10px",
        border: "1px solid black",
        fontSize: "small",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
      }}
    >
      {lable}
    </span>
  );
}
