import React, { useState } from "react";
import "../styles/Dropdown.css";
import PropTypes from "prop-types";
import CustomColorPicker from "./CustomColorPicker";
import { useSelector } from "react-redux";

export default function Dropdown({
  options,
  defaultselected,
  iconDirection,
  onSelect,
  onColorSelect,
  className,
  alignArrow,
  icon,
  iconColor,
  colorIcon,
  textOnly,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option,index) => {
    handleOptionSelected(option,index);
    setIsOpen(false);
  };

  const handleOptionSelected = (option,index) => {
    onSelect(option,index);
    setSelectedOption(option);
  };
  const handleColorPicker = (color) => {
    onColorSelect(color);
  };

  return (
    <div onClick={toggleDropdown} className={className} onBlur={()=>setIsOpen(false)}>
      <div className="dropdown-container">
        {icon && (
          <div
            style={{
              height: "40px",
              width: "45px",
              borderRadius: "5px",
              backgroundColor: iconColor,
            }}
          />
        )}
        {colorIcon && (
          <CustomColorPicker
            defaultColor={iconColor}
            margin="0px"
            width="40px"
            height="40px"
            onChange={(color) => handleColorPicker(color)}
          />
        )}
        <div
          className={`dropdown-header ${isOpen ? "open" : ""}`}
          style={{
            flexDirection: iconDirection === "start" ? "row" : "row-reverse",
          }}
        >
          {alignArrow === "left" && (
            <i className={`arrow ${isOpen ? "open" : ""}`} />
          )}
          <span>{selectedOption ? selectedOption : defaultselected}</span>
          {alignArrow === "right" && (
            <i className={`arrow ${isOpen ? "open" : ""}`} />
          )}
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {textOnly && options.map((option,index) => (
              <li key={option} onClick={() => handleOptionSelect(option,index)} >
                {option}
              </li>
            ))}
            {icon && options.map((option,index) => (
              <li key={option} onClick={() => handleOptionSelect(option,index)} >
                {option}
              </li>
            ))}
            {colorIcon && options.map((option,index) => (
              <li key={option} onClick={() => handleOptionSelect(option,index)} >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
Dropdown.defaultProps = {
  options: [],
  defaultselected: "select a value",
  iconDirection: "start",
  className: "",
  alignArrow: "left",
  icon: false,
  iconColor: "lightgrey",
};
Dropdown.propTypes = {
  options: PropTypes.array,
  defaultselected: PropTypes.object,
  iconDirection: PropTypes.string,
  className: PropTypes.string,
  alignArrow: PropTypes.string,
  icon: PropTypes.bool,
  iconColor: PropTypes.string,
};
