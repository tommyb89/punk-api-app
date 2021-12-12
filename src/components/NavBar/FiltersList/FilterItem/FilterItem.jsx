import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { label, onChange } = props;
  return (
    <div className="wrapper">
      <input className="wrapper__checkbox" type="checkbox" onClick={onChange} />
      <label className="wrapper__label">{label}</label>
    </div>
  );
};

export default FilterItem;
