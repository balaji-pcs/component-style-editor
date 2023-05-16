import React from "react";
import PropTypes from "prop-types";

export default function Container(props) {
  const {
    width,
    height,
    border,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    overflowY,
    bg,
    className,
  } = props;
  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        border: border,
        display: display,
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
        overflowY: overflowY,
        backgroundColor: bg,
      }}
    >
      {props.children}
    </div>
  );
}

Container.defaultProps = {
  height: "100px",
  width: "100px",
  border: "1px solid #eaeaea",
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "normal",
  overflowY: "none",
  bg: "inherit",
};
Container.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  overflowY: PropTypes.string,
  bg: PropTypes.string,
};
