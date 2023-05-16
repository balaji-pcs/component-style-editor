import React from "react";
import PropTypes from "prop-types";

const PaddingIcon = ({ size, color, side }) => {
  return (
    <>
      {side === "top" && (
        <svg width={size} height={size}>
          <rect
            x="1"
            y="1"
            width={size - 2}
            height={size - 2}
            fill="white"
            stroke="#000"
            strokeWidth="1"
          ></rect>
          <rect x="2" y="2" width="80%" height="4" fill="lightgrey"></rect>
        </svg>
      )}
      {side === "right" && (
        <svg width={size} height={size}>
          <rect
            x="1"
            y="1"
            width={size - 2}
            height={size - 2}
            fill="white"
            stroke="#000"
            strokeWidth="1"
          ></rect>
          <rect x="14" y="2" width="4" height="80%" fill="lightgrey"></rect>
        </svg>
      )}
      {side === "bottom" && (
        <svg width={size} height={size}>
          <rect
            x="1"
            y="1"
            width={size - 2}
            height={size - 2}
            fill="white"
            stroke="#000"
            strokeWidth="1"
          ></rect>
          <rect x="2" y="14" width="80%" height="4" fill="lightgrey"></rect>
        </svg>
      )}
      {side === "left" && (
        <svg width={size} height={size}>
          <rect
            x="1"
            y="1"
            width={size - 2}
            height={size - 2}
            fill="white"
            stroke="#000"
            strokeWidth="1"
          ></rect>
          <rect x="2 " y="2" width="4" height="80%" fill="lightgrey"></rect>
        </svg>
      )}
      {side === "auto" && (
        <svg width={size} height={size}>
          <rect
            x="1"
            y="1"
            width={size - 2}
            height={size - 2}
            fill="white"
            stroke="#000"
            strokeWidth="1"
          ></rect>
          <rect x="2" y="2" width="80%" height="4" fill="lightgrey"></rect>
          <rect x="14" y="2" width="4" height="80%" fill="lightgrey"></rect>
          <rect x="2" y="14" width="80%" height="4" fill="lightgrey"></rect>
          <rect x="2 " y="2" width="4" height="80%" fill="lightgrey"></rect>
        </svg>
      )}
    </>
  );
};

export default PaddingIcon;

PaddingIcon.defaultProps = {
  size: 20,
  color: "#000",
  side: "auto",
};
PaddingIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  side: PropTypes.string,
};
