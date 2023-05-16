import React from "react";
import PropTypes from "prop-types";

const UndoIcon = ({ width, height, color }) => {
  return (
    <svg viewBox={`0 0 ${height} ${width}`} width={width} height={height - 1}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        fill={color}
        d="M12 4V1L7 6l5 5V7c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7h-2c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9z"
        transform="rotate(-45 12 12)"
      />
    </svg>
  );
};

export default UndoIcon;

UndoIcon.defaultProps = {
  width: 26,
  height: 26,
  color: "#000",
};
UndoIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
