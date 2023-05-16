import React from "react";
import PropTypes from "prop-types";

const MarginIcon = ({ size, color, side }) => {
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
            stroke="#ccc"
            strokeWidth="2"
          ></rect>
          <rect x="1" y="-2" width="100%" height="4" fill="#333"></rect>
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
            stroke="#ccc"
            strokeWidth="2"
          ></rect>
          <rect x="18" y="1" width="4" height="100%" fill="#333"></rect>
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
            stroke="#ccc"
            strokeWidth="2"
          ></rect>
          <rect x="1" y="18" width="100%" height="4" fill="#333"></rect>
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
            stroke="#ccc"
            strokeWidth="2"
          ></rect>
          <rect x="-2 " y="1" width="4" height="100%" fill="#333"></rect>
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
            stroke="#000000"
            strokeWidth="2"
          ></rect>
        </svg>
      )}
    </>
  );
};

export default MarginIcon;

MarginIcon.defaultProps = {
  size: 20,
  color: "#000",
  side: "auto",
};
MarginIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  side: PropTypes.string,
};
