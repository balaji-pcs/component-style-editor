import React from "react";
import PropTypes from "prop-types";

const DisplayInlineIcon = ({ size, color }) => {
  return (
    <svg width={size - 3} height={size - 3}>
      <text
        x="10"
        y="16"
        fontSize="15"
        fontWeight="bolder"
        textAnchor="middle"
        fill="#000"
      >
        A
      </text>

      <rect x="0" y="2" width="2" height="80%" fill="grey"></rect>
      <rect x="18 " y="2" width="2" height="80%" fill="grey"></rect>
    </svg>
  );
};

export default DisplayInlineIcon;

DisplayInlineIcon.defaultProps = {
  size: 24,
  color: "#000",
};
DisplayInlineIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
