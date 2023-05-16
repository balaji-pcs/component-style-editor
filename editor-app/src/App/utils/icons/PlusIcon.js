import React from "react";
import PropTypes from "prop-types";

const PlusIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path fill={color} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </svg>
  );
};

export default PlusIcon;

PlusIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#000",
};
PlusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
