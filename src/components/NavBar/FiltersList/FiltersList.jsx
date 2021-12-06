import "./FiltersList.scss";

const FiltersList = (props) => {
  return (
    <>
      <h2>filters</h2>
      <form className="filters">
        {/* Filter Beers by ABV */}
        <label htmlFor="abv-range">Filter by ABV: </label>
        <input type="range" name="abv-range" min="0" max="60" step="0.1" />
        <br />
        <br />
        {/* Filter By Classic Range */}
        <label htmlFor="classic-range">Classic Range</label>
        <input type="checkbox" id="classic-range" name="classic-range" /> <br />
        <br />
        {/* Filter By Acidity (pH lower than 4) */}
        <label htmlFor="high-acidity">High Acidity</label>
        <input type="checkbox" id="chigh-acidity" name="high-acidity" />
      </form>
    </>
  );
};

export default FiltersList;
