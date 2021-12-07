import "./FiltersList.scss";
import React from "react";
import FilterItem from "./FilterItem/FilterItem";

const FiltersList = () => {
  return (
    <>
      <h2>filters</h2>
      <form className="filters">
        {/* Filter Beers by ABV */}
        <FilterItem />
        <FilterItem />
        <FilterItem />
        {/* Filter By Classic Range */}
        <label htmlFor="classic-range">Classic Range</label>
        <input type="checkbox" id="classic-range" name="classic-range" /> <br />
        <br />
        {/* Filter By Acidity (pH lower than 4) */}
        <label htmlFor="high-acidity">High Acidity</label>
        <input type="checkbox" id="high-acidity" name="high-acidity" />
      </form>
    </>
  );
};

export default FiltersList;
