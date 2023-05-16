import React from "react";
import "../styles/SearchBar.css";
import { SearchIcon } from "../../utils/icons/SearchIcon";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
}
