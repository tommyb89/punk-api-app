import "./FiltersList.scss";
import React from "react";
import FilterItem from "./FilterItem/FilterItem";

const FiltersList = (props) => {
  const { handleClassic, handleHighAbv, handleAcidic } = props;

  return (
    <section className="filters">
      <FilterItem label={"High ABV (> 6.0%)"} onChange={handleHighAbv} />
      <FilterItem label={"Classics"} onChange={handleClassic} />
      <FilterItem label={"Acidic (pH < 4)"} onChange={handleAcidic} />
    </section>
  );
};

export default FiltersList;
