import React from "react";

const FilterItem = (props) => {
  const { filterName, activeFilter, filterType } = props;
  return (
    <div>
      <label htmlFor={filterName}>Filter by ABV: </label>
      <input type={filterType} name={filterName} min="0" max="60" step="0.1" />
    </div>
  );
};

export default FilterItem;
