import "./NavBar.scss";
import React from "react";
import logo from "../../assets/images/Brewdog_logo.png";

import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = (props) => {
  const { handleInput, handleClassic, handleHighAbv, handleAcidic } = props;

  return (
    <nav className="sidebar">
      <img className="sidebar__logo" src={logo} alt={"Brewdog Logo"} />
      <div className="sidebar__search">
        <h2 className="sidebar__heading">Search Beers</h2>
        <SearchBox name={"Beers"} handleInput={handleInput} />
        <h3 className="sidebar__filters-heading">Filter Beers</h3>
        <FiltersList
          handleClassic={handleClassic}
          handleHighAbv={handleHighAbv}
          handleAcidic={handleAcidic}
        />
      </div>
    </nav>
  );
};

export default NavBar;
