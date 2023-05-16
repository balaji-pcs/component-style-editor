import React from "react";
import PropTypes from "prop-types";

const DustbinIcon = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      transform="rotate(180)"
    >
      <rect
        x="10"
        y="70"
        width="80"
        height="20"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="10"
        width="60"
        height="60"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x="30"
        y="20"
        width="40"
        height="10"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default DustbinIcon;

DustbinIcon.defaultProps = {
  size: 20,
  color: "#000",
};
DustbinIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
