import React, { useState } from "react";
import "../styles/Accordion.css";
import PlusIcon from "../../utils/icons/PlusIcon";

export default function Accordion({ title, children, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={handleClick}>
        <div className="acordionDiv-a123">
          <div className={`accordion-icon ${isOpen ? "open" : ""}`} />
          <div className="accordion-title">{title}</div>
        </div>
        {icon === undefined ? <PlusIcon /> : icon}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
