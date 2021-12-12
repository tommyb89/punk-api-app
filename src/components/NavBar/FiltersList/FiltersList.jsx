import "./FiltersList.scss";
import React from "react";
import FilterItem from "./FilterItem/FilterItem";

const FiltersList = (props) => {
  const { handleClassic, handleHighAbv } = props;

  return (
    <section className="filters">
      <FilterItem label={"High ABV (> 6.0%)"} onChange={handleHighAbv} />
      <FilterItem label={"Classics"} onChange={handleClassic} />
      <FilterItem label={"Acidic (pH < 4)"} />
    </section>
  );
};

export default FiltersList;
