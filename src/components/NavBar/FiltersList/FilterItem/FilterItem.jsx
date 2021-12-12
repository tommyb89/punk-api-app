import React from "react";

const FilterItem = (props) => {
  const { label, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" onClick={onChange} />
    </div>
  );
};

export default FilterItem;
