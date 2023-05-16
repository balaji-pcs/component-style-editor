import React from "react";
import PropTypes from "prop-types";

export default function Divider({ margin, width, height, orientation, color }) {
  return (
    <>
      {orientation !== "vertical" ? (
        <hr
          style={{
            margin: `${margin}px 0px`,
            width: width,
            height: 0,
            borderColor: color,
          }}
        />
      ) : (
        <hr
          style={{
            margin: `0px ${margin}px`,
            width: 0,
            height: height,
            borderColor: color,
          }}
        />
      )}
    </>
  );
}

Divider.defaultProps = {
  margin: "10px",
  width: "99%",
  height: "99%",
  color: "#000",
};
Divider.propTypes = {
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
