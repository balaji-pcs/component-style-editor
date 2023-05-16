import React from "react";
import PropTypes from "prop-types";

const DisplayBlockIcon = ({ size, color }) => {
  return (
    <svg width={size - 3} height={size - 6}>
      <rect
        x="1"
        y="6.5"
        width={size - 5}
        height={size - 18}
        fill="white"
        stroke="#000"
        stroke-width="2.5"
      ></rect>
      <rect x="0" y="1" width="100%" height="2  " fill="gray"></rect>
      <rect x="0" y="16" width="100%" height="2" fill="gray"></rect>
    </svg>
  );
};

export default DisplayBlockIcon;

DisplayBlockIcon.defaultProps = {
  size: 24,
  color: "#000",
};
DisplayBlockIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
