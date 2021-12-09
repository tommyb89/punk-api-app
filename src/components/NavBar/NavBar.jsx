import "./NavBar.scss";
import React from "react";
import logo from "../../assets/images/Brewdog_logo.png";

import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = (props) => {
  const { searchTerm, handleInput, filterBeers, isAcidic, highAbv, isClassic } =
    props;
  return (
    <nav className="sidebar">
      <img className="sidebar__logo" src={logo} alt="Brewdog Logo" />
      <h2 className="sidebar__heading">Search Beers</h2>
      <SearchBox
        name={"Beers"}
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      <div className="sidebar__filters">
        <FiltersList
          filterBeers={filterBeers}
          isAcidic={isAcidic}
          highAbv={highAbv}
          isClassic={isClassic}
        />
      </div>
    </nav>
  );
};

export default NavBar;
