import React from "react";
import PropTypes from "prop-types";

const StarIcon = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10 L63.39 39.1 L95.11 39.1 L69.55 60.9 L82.94 90 L50 69.06 L17.06 90 L30.45 60.9 L4.89 39.1 L36.61 39.1 Z"
        fill={color}
      />
    </svg>
  );
};

export default StarIcon;

StarIcon.defaultProps = {
  size: 12,
  color: "#000",
};
StarIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
