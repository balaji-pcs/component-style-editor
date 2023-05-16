import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const {
    width,
    height,
    border,
    bg,
    color,
    fontSize,
    boxShadow,
    borderRadius,
    padding,
    filter,
    className,
    sx,
    onClick,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = props;
  return (
    <button
      className={className}
      onClick={(e) => onClick(e)}
      style={{
        width: width,
        height: height,
        border: border,
        backgroundColor: bg,
        color: color,
        fontSize: fontSize,
        boxShadow: boxShadow,
        borderRadius: borderRadius,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        filter: filter,
        ...sx,
      }}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  height: "auto",
  width: "auto",
  border: "1px solid #eaeaea",
  color: "#000000",
  boxShadow: "0px 0px 0px 0px grey",
  fontSize: "10px",
  bg: "inherit",
  borderRadius: "5px",
  paddingTop: "10px",
  paddingRight: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  marginTop: "auto",
  marginRight: "auto",
  marginBottom: "auto",
  marginLeft: "auto",
  filter: "auto",
};
Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
  fontSize: PropTypes.string,
  bg: PropTypes.string,
  borderRadius: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  marginTop: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  filter: PropTypes.string,
};
