import React from "react";
import PropTypes from "prop-types";

const TextIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${height} ${width}`}
      width={width}
      height={height}
    >
      <text
        x="15"
        y="19"
        fontSize="15"
        fontWeight="bold"
        textAnchor="middle"
        fill="#000"
      >
        Tt
      </text>
    </svg>
  );
};

export default TextIcon;

TextIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#000",
};
TextIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
