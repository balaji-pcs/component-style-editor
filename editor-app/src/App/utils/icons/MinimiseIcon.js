import React from "react";
import PropTypes from "prop-types";

const MinimiseIcon = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="10" height="10" stroke={color} strokeWidth="2" />
      <rect x="6" y="6" width="7" height="7" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default MinimiseIcon;

MinimiseIcon.defaultProps = {
  size: 12,
  color: "#000",
};
MinimiseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
