import React from "react";
import PropTypes from "prop-types";

const DisplayInlineFlexIcon = ({ size, color }) => {
  return (
    <svg width={size} height={size}>
      <rect
        x="4"
        y="3.5"
        width={size - 10}
        height={size - 10}
        fill="#000"
        stroke="#000"
        strokeWidth="2.5"
      ></rect>
      <rect x="0" y="1" width="2" height="80%" fill="grey"></rect>
      <rect x="20" y="1" width="2" height="80%" fill="grey"></rect>
      <text
        x="11"
        y="14.5"
        fontSize="12"
        fontWeight="bolder"
        textAnchor="middle"
        fill="#fff"
      >
        I
      </text>
    </svg>
  );
};

export default DisplayInlineFlexIcon;

DisplayInlineFlexIcon.defaultProps = {
  size: 24,
  color: "#000",
};
DisplayInlineFlexIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
