import React from "react";
import PropTypes from "prop-types";

const BorderRadius = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-5 -5 ${height} ${width}`}
      width={width}
      height={height - 1}
    >
      <rect
        x="2.5"
        y="2.5"
        width={width - 10}
        height={height - 10}
        rx="4"
        ry="4"
        fill="none"
        stroke="black"
        stroke-width="1"
      />
      <rect
        x="7.5"
        y="7.5"
        width={width - 20}
        height={height - 20}
        fill="none"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  );
};

export default BorderRadius;

BorderRadius.defaultProps = {
  width: 26,
  height: 26,
  color: "#000",
};
BorderRadius.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
