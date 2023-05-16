import React from "react";
import PropTypes from "prop-types";

const DisplayInlineBlockIcon = ({ size, color }) => {
  return (
    <svg width={size - 3} height={size - 3}>
      <rect
        x="6"
        y="6.5"
        width={size - 16}
        height={size - 16}
        fill="white"
        stroke="#000"
        strokeWidth="2.5"
      ></rect>
      <rect x="0" y="2" width="2" height="80%" fill="grey"></rect>
      <rect x="18 " y="2" width="2" height="80%" fill="grey"></rect>
    </svg>
  );
};

export default DisplayInlineBlockIcon;

DisplayInlineBlockIcon.defaultProps = {
  size: 24,
  color: "#000",
};
DisplayInlineBlockIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
