import React, { useState } from "react";
import PropTypes from "prop-types";

export default function CustomColorPicker({
  defaultColor,
  margin,
  width,
  height,
  onChange,
  children,
}) {
  const [currentColor, setCurrentColor] = useState(defaultColor || "#000000");

  function handleChange(e) {
    setCurrentColor(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          backgroundColor: currentColor,
          width: width,
          height: height,
          margin: margin,
          display: "inline-block",
          cursor: "pointer",
          border: ".5px solid lightgrey",
          borderRadius: "5px",
        }}
      >
        <input
          type="color"
          value={currentColor}
          onChange={handleChange}
          style={{
            opacity: "0",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
      {children}
    </div>
  );
}

CustomColorPicker.defaultProps = {
  margin: "5px",
};
CustomColorPicker.propTypes = {
  margin: PropTypes.string,
};
