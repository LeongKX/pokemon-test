import React from "react";

function Filters(props) {
  const { search, type, types, onSearchChange, onTypeChange } = props;

  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by name */}
      <input
        type="text"
        value={search}
        onChange={onSearchChange} // Handles search input changes
      />

      {/* INSTRUCTION: Add a select field for filtering by type */}
      <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
