import React from "react";

export default function Note({ text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "20px",
          width: "20px",
          backgroundColor: "blue",
          textAlign: "center",
          borderRadius: "50px",
          color: "#ffffff",
        }}
      >
        i
      </div>
      &nbsp;&nbsp;<b style={{ color: "blue" }}>{text}</b>
    </div>
  );
}
