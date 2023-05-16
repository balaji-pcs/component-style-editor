import React from "react";
import PropTypes from "prop-types";

const ThreeDotsIcon = ({ size, color }) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx="4" cy="12" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
    </svg>
  );
};

export default ThreeDotsIcon;

ThreeDotsIcon.defaultProps = {
  size: 20,
  color: "#000",
};
ThreeDotsIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
