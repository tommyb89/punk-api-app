import "./FiltersList.scss";
import React from "react";
import FilterItem from "./FilterItem/FilterItem";

const FiltersList = (props) => {
  const { highAcidic, isClassic, isAcidic } = props;
  return (
    <section className="filters">
      <FilterItem label={"High ABV (> 6.0%)"} onChange={highAcidic} />
      <FilterItem label={"Classics"} onChange={isClassic} />
      <FilterItem label={"Acidic (pH < 4)"} onChange={isAcidic} />
    </section>
  );
};

export default FiltersList;
