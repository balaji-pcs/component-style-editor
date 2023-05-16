import React, { useState } from "react";
import "../styles/Dropdown.css";
import PropTypes from "prop-types";

export default function DropdownWithInput({
  options,
  defaultselected,
  iconDirection,
  className,
  alignArrow,
  icon,
  iconColor,
  getSize,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    handleOptionSelected(option);
    setIsOpen(false);
  };

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };

  const handleEnterKeyPress = (e) => {
    e.keyCode === 13 && getSize(e.target.value);
    setIsOpen(false);
  };

  const handleBlurInput = (e) => {
    getSize(e.target.value);
    setIsOpen(false);
  };

  return (
    <div onClick={toggleDropdown} className={className}>
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
        <div
          className={`dropdown-header ${isOpen ? "open" : ""}`}
          style={{
            flexDirection: iconDirection === "start" ? "row" : "row-reverse",
          }}
        >
          {alignArrow === "left" && (
            <i className={`arrow ${isOpen ? "open" : ""}`} />
          )}
          <input
            type="text"
            value={selectedOption}
            className="dropdown-input"
            onChange={(e) => setSelectedOption(e.target.value)}
            onKeyDown={handleEnterKeyPress}
            onBlur={handleBlurInput}
            style={{
              height: "100%",
              border: "none",
            }}
            placeholder={defaultselected}
          />
          {alignArrow === "right" && (
            <i className={`arrow ${isOpen ? "open" : ""}`} />
          )}
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {options.map((option) => (
              <li key={option} onClick={() => handleOptionSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
DropdownWithInput.defaultProps = {
  options: [],
  defaultselected: "select a value",
  iconDirection: "start",
  className: "",
  alignArrow: "left",
  icon: false,
  iconColor: "lightgrey",
};
DropdownWithInput.propTypes = {
  options: PropTypes.array,
  defaultselected: PropTypes.object,
  iconDirection: PropTypes.string,
  className: PropTypes.string,
  alignArrow: PropTypes.string,
  icon: PropTypes.bool,
  iconColor: PropTypes.string,
};
