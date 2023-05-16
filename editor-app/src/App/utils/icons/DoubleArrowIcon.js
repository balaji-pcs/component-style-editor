import React from "react";
import PropTypes from "prop-types";

function DoubleArrowIcon({ size, rotate }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      transform={`rotate(${rotate})`}
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
      <line
        x1="20"
        y1="50"
        x2="80"
        y2="50"
        stroke="black"
        markerStart="url(#arrowhead)"
        markerEnd="url(#arrowhead)"
        strokeWidth="4"
      />
    </svg>
  );
}

export default DoubleArrowIcon;

DoubleArrowIcon.defaultProps = {
  size: 20,
  rotate: 0,
};
DoubleArrowIcon.propTypes = {
  size: PropTypes.number,
  rotate: PropTypes.number,
};
