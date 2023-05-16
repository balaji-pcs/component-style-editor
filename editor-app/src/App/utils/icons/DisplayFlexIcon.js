import React from "react";
import PropTypes from "prop-types";

const DisplayFlexIcon = ({ size, color }) => {
  return (
    <svg width={size - 3} height={size - 3}>
      <rect
        x="1"
        y="1"
        width={size - 5}
        height={size - 5}
        fill="white"
        stroke="grey"
        strokeWidth="2"
      ></rect>
      <rect
        x="5"
        y="5"
        width={size - 21}
        height={size - 13}
        fill="#000000"
        stroke="#000"
        strokeWidth="2.5"
      ></rect>
      <rect
        x="13"
        y="5"
        width={size - 21}
        height={size - 13}
        fill="#000000"
        stroke="#000"
        strokeWidth="2.5"
      ></rect>
    </svg>
  );
};

export default DisplayFlexIcon;

DisplayFlexIcon.defaultProps = {
  size: 24,
  color: "#000",
};
DisplayFlexIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
